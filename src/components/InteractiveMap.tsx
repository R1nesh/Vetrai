import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Camera } from 'lucide-react';
import { trafficCameras } from '../lib/mockData';

export function InteractiveMap() {
  const [hoveredRoad, setHoveredRoad] = useState<number | null>(null);
  const [selectedCamera, setSelectedCamera] = useState<number | null>(null);

  // Road segments with traffic data
  const roads = [
    { id: 1, x1: 50, y1: 50, x2: 350, y2: 50, severity: 'critical', name: 'Highway 1 North', width: 8 },
    { id: 2, x1: 350, y1: 50, x2: 550, y2: 100, severity: 'high', name: 'Highway 1 East', width: 8 },
    { id: 3, x1: 50, y1: 150, x2: 450, y2: 150, severity: 'medium', name: 'Main Street', width: 6 },
    { id: 4, x1: 100, y1: 250, x2: 500, y2: 250, severity: 'critical', name: 'Downtown Expressway', width: 8 },
    { id: 5, x1: 200, y1: 50, x2: 200, y2: 350, severity: 'high', name: 'North-South Corridor', width: 6 },
    { id: 6, x1: 400, y1: 100, x2: 400, y2: 300, severity: 'medium', name: 'Central Avenue', width: 5 },
    { id: 7, x1: 50, y1: 350, x2: 550, y2: 350, severity: 'low', name: 'South Bypass', width: 5 },
    { id: 8, x1: 300, y1: 150, x2: 550, y2: 250, severity: 'high', name: 'Connector Route', width: 6 },
  ];

  const cameras = [
    { id: 1, x: 200, y: 50, status: 'active' },
    { id: 2, x: 350, y: 100, status: 'active' },
    { id: 3, x: 200, y: 150, status: 'active' },
    { id: 4, x: 400, y: 150, status: 'active' },
    { id: 5, x: 300, y: 250, status: 'active' },
    { id: 6, x: 200, y: 300, status: 'maintenance' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return '#EE0000';
      case 'high': return '#f97316';
      case 'medium': return '#eab308';
      case 'low': return '#22c55e';
      default: return '#6b7280';
    }
  };

  return (
    <div className="relative bg-gray-950 rounded-lg p-4 overflow-hidden">
      <svg 
        viewBox="0 0 600 400" 
        className="w-full h-auto"
        style={{ maxHeight: '500px' }}
      >
        {/* Background Grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1f2937" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#grid)" />

        {/* Roads */}
        {roads.map(road => (
          <g key={road.id}>
            <motion.line
              x1={road.x1}
              y1={road.y1}
              x2={road.x2}
              y2={road.y2}
              stroke={getSeverityColor(road.severity)}
              strokeWidth={road.width}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: hoveredRoad === road.id ? 1 : 0.7 }}
              transition={{ duration: 1, delay: road.id * 0.1 }}
              onMouseEnter={() => setHoveredRoad(road.id)}
              onMouseLeave={() => setHoveredRoad(null)}
              style={{ cursor: 'pointer', filter: hoveredRoad === road.id ? 'brightness(1.3)' : 'none' }}
            />
            {/* Traffic flow animation */}
            <motion.circle
              r="3"
              fill="white"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                cx: [road.x1, road.x2],
                cy: [road.y1, road.y2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: road.id * 0.3,
              }}
            />
          </g>
        ))}

        {/* Cameras */}
        {cameras.map(camera => (
          <g key={camera.id}>
            <motion.circle
              cx={camera.x}
              cy={camera.y}
              r={selectedCamera === camera.id ? 14 : 10}
              fill={camera.status === 'active' ? '#22c55e' : '#6b7280'}
              stroke="#000"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + camera.id * 0.1, type: 'spring' }}
              onClick={() => setSelectedCamera(selectedCamera === camera.id ? null : camera.id)}
              style={{ cursor: 'pointer' }}
            />
            {/* Camera pulse effect */}
            {camera.status === 'active' && (
              <motion.circle
                cx={camera.x}
                cy={camera.y}
                r="10"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: camera.id * 0.3,
                }}
              />
            )}
          </g>
        ))}
      </svg>

      {/* Hover tooltip */}
      {hoveredRoad !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-lg"
        >
          <p className="text-white">{roads.find(r => r.id === hoveredRoad)?.name}</p>
          <p className="text-sm text-gray-400 capitalize">
            {roads.find(r => r.id === hoveredRoad)?.severity} congestion
          </p>
        </motion.div>
      )}

      {/* Selected camera info */}
      {selectedCamera !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute bottom-4 left-4 bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Camera className="w-4 h-4 text-green-500" />
            <p className="text-white">Camera #{selectedCamera}</p>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Status: {cameras.find(c => c.id === selectedCamera)?.status}
          </p>
        </motion.div>
      )}
    </div>
  );
}
