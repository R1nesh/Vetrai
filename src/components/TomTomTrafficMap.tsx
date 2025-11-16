import { useEffect, useRef, useState } from 'react';
import { useCity } from '../lib/cityContext';
import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';

declare global {
  interface Window {
    tt: any;
  }
}

interface TomTomTrafficMapProps {
  isLive?: boolean;
}

interface Vehicle {
  id: number;
  lat: number;
  lng: number;
  speed: number;
  angle: number;
  route: [number, number][];
  routeIndex: number;
  type: 'car' | 'truck' | 'bus';
  color: string;
}

export function TomTomTrafficMap({ isLive = false }: TomTomTrafficMapProps) {
  const { selectedCity } = useCity();
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  const vehiclesRef = useRef<Vehicle[]>([]);
  const animationFrameRef = useRef<number>();
  const markersRef = useRef<any[]>([]);

  // City coordinates for NYC and Dallas
  const cityCoords: Record<string, { lat: number; lng: number; zoom: number }> = {
    'New York': { lat: 40.7580, lng: -73.9855, zoom: 13 },
    'Dallas': { lat: 32.7767, lng: -96.7970, zoom: 13 }
  };

  // Main traffic routes for simulation
  const trafficRoutes: Record<string, [number, number][][]> = {
    'New York': [
      // Times Square to Central Park
      [[40.7580, -73.9855], [40.7614, -73.9776], [40.7678, -73.9812], [40.7829, -73.9654]],
      // Broadway route
      [[40.7484, -73.9857], [40.7589, -73.9851], [40.7676, -73.9822]],
      // FDR Drive
      [[40.7128, -73.9776], [40.7359, -73.9755], [40.7489, -73.9680], [40.7689, -73.9545]],
      // West Side Highway
      [[40.7489, -74.0060], [40.7589, -74.0070], [40.7789, -74.0080]],
    ],
    'Dallas': [
      // Central Expressway
      [[32.7767, -96.7970], [32.7867, -96.7900], [32.7967, -96.7850]],
      // LBJ Freeway
      [[32.9267, -96.8270], [32.9267, -96.7970], [32.9267, -96.7670]],
      // Downtown routes
      [[32.7767, -96.8070], [32.7767, -96.7970], [32.7767, -96.7870]],
      // North Central
      [[32.8067, -96.7970], [32.7867, -96.7970], [32.7667, -96.7970]],
    ]
  };

  useEffect(() => {
    const apiKey = localStorage.getItem('tomtom_api_key');
    setHasApiKey(!!apiKey);

    if (!apiKey) return;

    const loadTomTom = async () => {
      if (!window.tt) {
        // Add CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.0/maps/maps.css';
        document.head.appendChild(link);

        // Add JS
        const script = document.createElement('script');
        script.src = 'https://api.tomtom.com/maps-sdk-for-web/cdn/6.x/6.25.0/maps/maps-web.min.js';
        script.async = true;
        await new Promise((resolve) => {
          script.onload = resolve;
          document.body.appendChild(script);
        });
      }
      setIsLoaded(true);
    };

    loadTomTom();
  }, []);

  // Initialize vehicles for traffic simulation
  const initializeVehicles = (city: string) => {
    const routes = trafficRoutes[city] || trafficRoutes['New York'];
    const vehicles: Vehicle[] = [];
    const vehicleTypes: ('car' | 'truck' | 'bus')[] = ['car', 'car', 'car', 'car', 'truck', 'bus'];
    const colors = ['#EE0000', '#f97316', '#eab308', '#3b82f6', '#8b5cf6'];

    routes.forEach((route, routeIdx) => {
      // Create multiple vehicles per route
      const vehiclesPerRoute = Math.floor(Math.random() * 5) + 3;
      for (let i = 0; i < vehiclesPerRoute; i++) {
        const startIndex = Math.floor(Math.random() * route.length);
        const type = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
        vehicles.push({
          id: routeIdx * 10 + i,
          lat: route[startIndex][0],
          lng: route[startIndex][1],
          speed: Math.random() * 0.0003 + 0.0001,
          angle: 0,
          route: route,
          routeIndex: startIndex,
          type: type,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    });

    vehiclesRef.current = vehicles;
  };

  useEffect(() => {
    if (!isLoaded || !mapRef.current || !window.tt || !hasApiKey) return;

    const apiKey = localStorage.getItem('tomtom_api_key');
    if (!apiKey) return;

    const coords = cityCoords[selectedCity] || cityCoords['New York'];

    if (!mapInstanceRef.current) {
      // Create new map
      const map = window.tt.map({
        key: apiKey,
        container: mapRef.current,
        center: [coords.lng, coords.lat],
        zoom: coords.zoom,
        style: 'tomtom://vector/1/basic-night',
      });

      // Add traffic flow layer
      map.on('load', () => {
        map.addLayer({
          'id': 'traffic-flow',
          'type': 'line',
          'source': {
            'type': 'vector',
            'tiles': [`https://api.tomtom.com/traffic/map/4/tile/flow/relative/{z}/{x}/{y}.pbf?key=${apiKey}`]
          },
          'source-layer': 'Traffic flow',
          'paint': {
            'line-color': [
              'case',
              ['<', ['get', 'speed'], 25], '#EE0000',
              ['<', ['get', 'speed'], 50], '#f97316',
              ['<', ['get', 'speed'], 75], '#eab308',
              '#22c55e'
            ],
            'line-width': 3,
            'line-opacity': 0.8
          }
        });

        // Add traffic incidents layer
        map.addLayer({
          'id': 'traffic-incidents',
          'type': 'circle',
          'source': {
            'type': 'vector',
            'tiles': [`https://api.tomtom.com/traffic/map/4/tile/incidents/{z}/{x}/{y}.pbf?key=${apiKey}`]
          },
          'source-layer': 'Traffic incidents',
          'paint': {
            'circle-radius': 8,
            'circle-color': '#EE0000',
            'circle-stroke-width': 2,
            'circle-stroke-color': '#fff'
          }
        });
      });

      mapInstanceRef.current = map;
    } else {
      // Update existing map
      mapInstanceRef.current.flyTo({
        center: [coords.lng, coords.lat],
        zoom: coords.zoom,
        essential: true,
        duration: 1500
      });
    }

    // Initialize vehicle simulation
    if (isLive) {
      initializeVehicles(selectedCity);
      animateVehicles();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [selectedCity, isLoaded, hasApiKey, isLive]);

  const animateVehicles = () => {
    if (!mapInstanceRef.current || !isLive) return;

    // Clear old markers
    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    // Update vehicle positions
    vehiclesRef.current.forEach(vehicle => {
      // Move vehicle along route
      vehicle.routeIndex += 1;
      if (vehicle.routeIndex >= vehicle.route.length) {
        vehicle.routeIndex = 0;
      }

      const currentPoint = vehicle.route[vehicle.routeIndex];
      const nextPoint = vehicle.route[(vehicle.routeIndex + 1) % vehicle.route.length];

      // Calculate angle for rotation
      const dx = nextPoint[1] - currentPoint[1];
      const dy = nextPoint[0] - currentPoint[0];
      vehicle.angle = Math.atan2(dy, dx) * 180 / Math.PI;

      // Interpolate position
      const t = Math.random() * 0.5;
      vehicle.lat = currentPoint[0] + (nextPoint[0] - currentPoint[0]) * t;
      vehicle.lng = currentPoint[1] + (nextPoint[1] - currentPoint[1]) * t;

      // Create vehicle marker
      const el = document.createElement('div');
      el.style.width = vehicle.type === 'truck' ? '16px' : vehicle.type === 'bus' ? '18px' : '12px';
      el.style.height = vehicle.type === 'truck' ? '16px' : vehicle.type === 'bus' ? '18px' : '12px';
      el.style.backgroundColor = vehicle.color;
      el.style.borderRadius = vehicle.type === 'bus' ? '4px' : '50%';
      el.style.border = '2px solid white';
      el.style.transform = `rotate(${vehicle.angle}deg)`;
      el.style.transition = 'all 0.5s ease-out';
      el.style.boxShadow = '0 0 10px rgba(238, 0, 0, 0.5)';

      const marker = new window.tt.Marker({ element: el })
        .setLngLat([vehicle.lng, vehicle.lat])
        .addTo(mapInstanceRef.current);

      markersRef.current.push(marker);
    });

    animationFrameRef.current = requestAnimationFrame(() => {
      setTimeout(animateVehicles, 500); // Update every 500ms
    });
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      markersRef.current.forEach(marker => marker.remove());
    };
  }, []);

  if (!hasApiKey) {
    return (
      <div className="w-full h-[500px] bg-gray-950 rounded-lg flex items-center justify-center border border-gray-800">
        <div className="text-center max-w-md px-6">
          <AlertCircle className="w-12 h-12 text-[#EE0000] mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">TomTom API Key Required</h3>
          <p className="text-gray-400 mb-4">
            Please configure your TomTom API key in Settings to view real-time traffic maps for NYC and Dallas.
          </p>
          <a
            href="https://developer.tomtom.com/user/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#EE0000] hover:bg-[#cc0000] text-white px-4 py-2 rounded-lg transition-colors"
          >
            Get Free API Key
          </a>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[500px] bg-gray-950 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#EE0000] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading TomTom map...</p>
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
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg px-3 py-2 flex items-center gap-2 z-[1000]"
          >
            <div className="w-2 h-2 bg-[#EE0000] rounded-full animate-pulse"></div>
            <span className="text-white text-sm font-semibold">LIVE TRAFFIC FLOW</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg px-3 py-2 z-[1000]"
          >
            <div className="text-xs text-gray-300">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-[#EE0000] rounded-full"></div>
                <span>Cars</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-3 h-3 bg-[#f97316] rounded-full"></div>
                <span>Trucks</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#3b82f6] rounded"></div>
                <span>Buses</span>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg px-3 py-2 text-xs text-gray-400 z-[1000]">
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

      {/* Powered by badge */}
      <div className="absolute bottom-4 right-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg px-3 py-2 text-xs text-gray-400 z-[1000] flex items-center gap-2">
        <span>Powered by</span>
        <span className="text-white font-semibold">TomTom Traffic API</span>
      </div>
    </div>
  );
}
