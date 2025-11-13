import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface Vehicle {
  id: number;
  x: number;
  y: number;
  speed: number;
  road: number;
}

export function LiveTrafficMap() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [pulseKey, setPulseKey] = useState(0);

  // Road network
  const roads = [
    { id: 1, x1: 50, y1: 100, x2: 550, y2: 100, flow: 85, name: 'Highway 1' },
    { id: 2, x1: 50, y1: 200, x2: 550, y2: 200, flow: 65, name: 'Main Street' },
    { id: 3, x1: 50, y1: 300, x2: 550, y2: 300, flow: 45, name: 'South Road' },
    { id: 4, x1: 200, y1: 50, x2: 200, y2: 350, flow: 72, name: 'North Ave' },
    { id: 5, x1: 400, y1: 50, x2: 400, y2: 350, flow: 58, name: 'Central Blvd' },
  ];

  const getFlowColor = (flow: number) => {
    if (flow >= 75) return '#EE0000';
    if (flow >= 50) return '#f97316';
    if (flow >= 25) return '#eab308';
    return '#22c55e';
  };

  // Initialize vehicles
  useEffect(() => {
    const initialVehicles: Vehicle[] = [];
    roads.forEach(road => {
      const vehicleCount = Math.floor(road.flow / 10);
      for (let i = 0; i < vehicleCount; i++) {
        initialVehicles.push({
          id: initialVehicles.length,
          x: road.x1 + (road.x2 - road.x1) * Math.random(),
          y: road.y1 + (road.y2 - road.y1) * Math.random(),
          speed: Math.random() * 2 + 1,
          road: road.id,
        });
      }
    });
    setVehicles(initialVehicles);
  }, []);

  // Animate vehicles
  useEffect(() => {
    const interval = setInterval(() => {
      setVehicles(prev => prev.map(vehicle => {
        const road = roads.find(r => r.id === vehicle.road);
        if (!road) return vehicle;

        let newX = vehicle.x;
        let newY = vehicle.y;

        // Move along road
        if (road.y1 === road.y2) {
          // Horizontal road
          newX += vehicle.speed;
          if (newX > road.x2) newX = road.x1;
        } else {
          // Vertical road
          newY += vehicle.speed;
          if (newY > road.y2) newY = road.y1;
        }

        return { ...vehicle, x: newX, y: newY };
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Pulse effect for congestion zones
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseKey(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-950 rounded-lg overflow-hidden">
      <svg viewBox="0 0 600 400" className="w-full h-auto" style={{ maxHeight: '500px' }}>
        {/* Background */}
        <rect width="600" height="400" fill="#030712" />
        
        {/* Grid */}
        <defs>
          <pattern id="liveGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#1f2937" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#liveGrid)" />

        {/* Roads with glow effect */}
        {roads.map(road => (
          <g key={road.id}>
            {/* Glow layer */}
            <line
              x1={road.x1}
              y1={road.y1}
              x2={road.x2}
              y2={road.y2}
              stroke={getFlowColor(road.flow)}
              strokeWidth="12"
              opacity="0.2"
              strokeLinecap="round"
            />
            {/* Main road */}
            <motion.line
              x1={road.x1}
              y1={road.y1}
              x2={road.x2}
              y2={road.y2}
              stroke={getFlowColor(road.flow)}
              strokeWidth="6"
              strokeLinecap="round"
              initial={{ opacity: 0.6 }}
              animate={{ opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            {/* Congestion pulse for high traffic */}
            {road.flow >= 75 && (
              <motion.line
                key={pulseKey}
                x1={road.x1}
                y1={road.y1}
                x2={road.x2}
                y2={road.y2}
                stroke={getFlowColor(road.flow)}
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 2 }}
              />
            )}
          </g>
        ))}

        {/* Vehicles */}
        {vehicles.map(vehicle => (
          <circle
            key={vehicle.id}
            cx={vehicle.x}
            cy={vehicle.y}
            r="2"
            fill="white"
            opacity="0.8"
          />
        ))}

        {/* Intersection markers */}
        {[
          { x: 200, y: 100 }, { x: 400, y: 100 },
          { x: 200, y: 200 }, { x: 400, y: 200 },
          { x: 200, y: 300 }, { x: 400, y: 300 },
        ].map((intersection, i) => (
          <g key={i}>
            <circle
              cx={intersection.x}
              cy={intersection.y}
              r="6"
              fill="#374151"
              stroke="#EE0000"
              strokeWidth="2"
            />
            <motion.circle
              cx={intersection.x}
              cy={intersection.y}
              r="6"
              fill="none"
              stroke="#EE0000"
              strokeWidth="1"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur border border-gray-800 rounded-lg p-3 space-y-2">
        <p className="text-white text-sm">Traffic Flow</p>
        {roads.slice(0, 3).map(road => (
          <div key={road.id} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: getFlowColor(road.flow) }}
            ></div>
            <span className="text-xs text-gray-400">{road.name}</span>
            <span className="text-xs text-gray-500">{road.flow}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
