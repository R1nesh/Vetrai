import { useEffect, useRef, useState } from 'react';
import { useCity } from '../lib/cityContext';
import { cityRoads } from '../lib/roadData';
import { motion } from 'motion/react';

declare global {
  interface Window {
    L: any;
  }
}

interface InteractiveCityMapProps {
  isLive?: boolean;
}

export function InteractiveCityMap({ isLive = false }: InteractiveCityMapProps) {
  const { selectedCity } = useCity();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const layersRef = useRef<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const animationFrameRef = useRef<number>();
  const trafficOffsetRef = useRef(0);

  const getSeverityColor = (severity: number) => {
    if (severity >= 90) return '#EE0000';
    if (severity >= 80) return '#f97316';
    if (severity >= 70) return '#eab308';
    return '#22c55e';
  };

  useEffect(() => {
    const loadLeaflet = async () => {
      if (!window.L) {
        // Add CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);

        // Add JS
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.async = true;
        await new Promise((resolve) => {
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }
      setIsLoaded(true);
    };

    loadLeaflet();
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.L) return;

    const cityData = cityRoads[selectedCity as keyof typeof cityRoads];
    if (!cityData) return;

    if (!mapInstanceRef.current) {
      // Create new map
      const map = window.L.map(mapRef.current, {
        center: [cityData.center.lat, cityData.center.lng],
        zoom: cityData.zoom,
        zoomControl: true,
        attributionControl: true,
      });

      // Use CartoDB Dark Matter for a clean, professional look
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(map);

      mapInstanceRef.current = map;
    } else {
      // Update existing map
      const map = mapInstanceRef.current;
      map.setView([cityData.center.lat, cityData.center.lng], cityData.zoom, {
        animate: true,
        duration: 1.5
      });
    }

    // Clear existing layers
    layersRef.current.forEach(layer => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.removeLayer(layer);
      }
    });
    layersRef.current = [];

    // Add traffic overlays
    cityData.roads.forEach((road, index) => {
      const color = getSeverityColor(road.severity);
      const coordinates = road.coordinates.map(coord => [coord[0], coord[1]]);

      // Create glow effect for high severity roads
      if (road.severity >= 85) {
        const glowLayer = window.L.polyline(coordinates, {
          color: color,
          weight: 8,
          opacity: 0.3,
          smoothFactor: 1,
          className: `road-glow-${index}`
        });

        glowLayer.addTo(mapInstanceRef.current);
        layersRef.current.push(glowLayer);
      }

      // Main traffic layer - thinner lines
      const trafficLayer = window.L.polyline(coordinates, {
        color: color,
        weight: isLive ? 3 : 4,
        opacity: 0.85,
        smoothFactor: 1,
        className: `road-traffic-${index}`
      });

      // Add popup with road information
      trafficLayer.bindPopup(`
        <div style="color: #fff; background: #1f2937; padding: 12px; border-radius: 8px; min-width: 180px; border: 1px solid #374151;">
          <h4 style="margin: 0 0 10px 0; font-weight: 600; font-size: 15px; color: #f9fafb;">${road.name}</h4>
          <div style="font-size: 13px; color: #d1d5db;">
            <div style="margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
              <span style="color: ${color}; font-size: 18px;">●</span>
              <span>Congestion: <strong style="color: ${color};">${road.severity}%</strong></span>
            </div>
            <div style="color: #9ca3af;">Avg Speed: <strong>${road.avgSpeed} mph</strong></div>
          </div>
        </div>
      `, {
        className: 'custom-popup',
        closeButton: true,
        maxWidth: 250
      });

      trafficLayer.addTo(mapInstanceRef.current);
      layersRef.current.push(trafficLayer);

      // Add hover effect
      trafficLayer.on('mouseover', function(e: any) {
        this.setStyle({
          weight: isLive ? 5 : 6,
          opacity: 1
        });
      });

      trafficLayer.on('mouseout', function(e: any) {
        this.setStyle({
          weight: isLive ? 3 : 4,
          opacity: 0.85
        });
      });
    });

    // Live traffic animation
    if (isLive) {
      const animateTraffic = () => {
        trafficOffsetRef.current = (trafficOffsetRef.current + 1) % 360;
        
        cityData.roads.forEach((road, index) => {
          const severity = road.severity;
          
          // Animate high traffic roads with pulsing effect
          if (severity >= 85) {
            const roadElement = document.querySelector(`.road-traffic-${index}`) as HTMLElement;
            if (roadElement) {
              const pulseOpacity = 0.7 + Math.sin(trafficOffsetRef.current * 0.05) * 0.25;
              roadElement.style.opacity = pulseOpacity.toString();
            }
          }
        });

        animationFrameRef.current = requestAnimationFrame(animateTraffic);
      };

      animateTraffic();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [selectedCity, isLoaded, isLive]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="w-full h-[500px] bg-gray-950 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#EE0000] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        className="w-full h-[500px] rounded-lg overflow-hidden border border-gray-800"
        style={{ background: '#0c0c0c' }}
      />
      
      {isLive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg px-3 py-2 flex items-center gap-2 z-10"
        >
          <div className="w-2 h-2 bg-[#EE0000] rounded-full animate-pulse"></div>
          <span className="text-white text-sm font-semibold">LIVE TRAFFIC FLOW</span>
        </motion.div>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg px-3 py-2 text-xs text-gray-400 z-10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 rounded" style={{ backgroundColor: '#EE0000' }}></div>
            <span>Heavy Traffic</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 rounded" style={{ backgroundColor: '#f97316' }}></div>
            <span>Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 rounded" style={{ backgroundColor: '#eab308' }}></div>
            <span>Light</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 rounded" style={{ backgroundColor: '#22c55e' }}></div>
            <span>Free Flow</span>
          </div>
        </div>
      </div>

      {/* Controls hint */}
      <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg px-3 py-2 text-xs text-gray-400 z-10">
        {isLive ? 'Click roads for details • Drag to pan • Scroll to zoom' : 'Click and drag to pan • Scroll to zoom • Click roads for info'}
      </div>

      <style jsx>{`
        :global(.leaflet-popup-content-wrapper) {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        :global(.leaflet-popup-tip) {
          background: #1f2937 !important;
        }
        :global(.custom-popup .leaflet-popup-content) {
          margin: 0 !important;
        }
      `}</style>
    </div>
  );
}