import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Pause, SkipForward } from 'lucide-react';
import { Button } from './ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export function TrafficProjection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentHour, setCurrentHour] = useState(0);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  // Generate projection data
  const projectionData = Array.from({ length: 72 }, (_, i) => {
    const hour = i % 24;
    const day = Math.floor(i / 24);
    const baseTraffic = 40;
    const morningPeak = hour >= 7 && hour <= 9 ? 30 : 0;
    const eveningPeak = hour >= 16 && hour <= 18 ? 35 : 0;
    const weekendReduction = day === 1 || day === 2 ? -10 : 0;
    const randomVariation = Math.random() * 10;
    
    return {
      hour: i,
      label: `Day ${day + 1}, ${hour}:00`,
      congestion: Math.max(0, Math.min(100, baseTraffic + morningPeak + eveningPeak + weekendReduction + randomVariation)),
      predicted: Math.max(0, Math.min(100, baseTraffic + morningPeak * 0.8 + eveningPeak * 0.8 + weekendReduction + randomVariation)),
    };
  });

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentHour(prev => (prev + 1) % 72);
    }, 1000 / animationSpeed);

    return () => clearInterval(interval);
  }, [isPlaying, animationSpeed]);

  const currentData = projectionData[currentHour];
  const day = Math.floor(currentHour / 24) + 1;
  const hour = currentHour % 24;

  const getCongestionColor = (level: number) => {
    if (level >= 75) return '#EE0000';
    if (level >= 50) return '#f97316';
    if (level >= 25) return '#eab308';
    return '#22c55e';
  };

  return (
    <div className="space-y-6">
      {/* Projection Chart */}
      <div className="bg-gray-950 rounded-lg p-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={projectionData}>
            <defs>
              <linearGradient id="congestionGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EE0000" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#EE0000" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="hour" 
              stroke="#9CA3AF"
              tickFormatter={(value) => `${Math.floor(value / 24) + 1}d`}
            />
            <YAxis stroke="#9CA3AF" label={{ value: 'Congestion %', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
              labelStyle={{ color: '#fff' }}
              formatter={(value: number) => [`${value.toFixed(0)}%`, '']}
              labelFormatter={(label) => {
                const h = label as number;
                return `Day ${Math.floor(h / 24) + 1}, Hour ${h % 24}`;
              }}
            />
            <Area type="monotone" dataKey="congestion" stroke="#EE0000" fill="url(#congestionGradient)" name="Current Trend" />
            <Area type="monotone" dataKey="predicted" stroke="#3b82f6" fill="url(#predictedGradient)" name="AI Prediction" />
            
            {/* Current position indicator */}
            <Line
              type="monotone"
              dataKey={(data) => data.hour === currentHour ? 100 : null}
              stroke="#fff"
              strokeWidth={2}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Animation Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-950 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-[#EE0000] hover:bg-[#cc0000] text-white"
            size="sm"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button
            onClick={() => setCurrentHour((prev) => (prev + 6) % 72)}
            variant="outline"
            className="border-gray-700 text-gray-300 hover:bg-gray-800"
            size="sm"
          >
            <SkipForward className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-400 text-sm">Speed:</span>
          {[0.5, 1, 2, 4].map(speed => (
            <Button
              key={speed}
              onClick={() => setAnimationSpeed(speed)}
              variant={animationSpeed === speed ? 'default' : 'outline'}
              className={animationSpeed === speed ? 'bg-[#EE0000] hover:bg-[#cc0000]' : 'border-gray-700 text-gray-300 hover:bg-gray-800'}
              size="sm"
            >
              {speed}x
            </Button>
          ))}
        </div>
      </div>

      {/* Current Status Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
          <p className="text-gray-400 text-sm mb-2">Current Time</p>
          <h3 className="text-white text-2xl">Day {day}, {hour}:00</h3>
        </div>
        
        <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
          <p className="text-gray-400 text-sm mb-2">Congestion Level</p>
          <div className="flex items-end gap-2">
            <h3 
              className="text-2xl"
              style={{ color: getCongestionColor(currentData.congestion) }}
            >
              {currentData.congestion.toFixed(0)}%
            </h3>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHour}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="h-2 flex-1 bg-gray-800 rounded-full overflow-hidden"
              >
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: getCongestionColor(currentData.congestion) }}
                  initial={{ width: 0 }}
                  animate={{ width: `${currentData.congestion}%` }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
          <p className="text-gray-400 text-sm mb-2">AI Prediction</p>
          <div className="flex items-end gap-2">
            <h3 className="text-blue-400 text-2xl">{currentData.predicted.toFixed(0)}%</h3>
            <div className="h-2 flex-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-blue-400"
                initial={{ width: 0 }}
                animate={{ width: `${currentData.predicted}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Visual Simulation */}
      <div className="bg-gray-950 rounded-lg p-4 border border-gray-800">
        <h4 className="text-white mb-4">Traffic Flow Simulation</h4>
        <div className="relative h-24 bg-gray-900 rounded-lg overflow-hidden">
          {/* Road */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-12 bg-gray-800 border-t-2 border-b-2 border-gray-700 relative">
              {/* Lane markers */}
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-8 h-0.5 bg-gray-600"
                  style={{ left: `${i * 5}%` }}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                />
              ))}
              
              {/* Vehicles */}
              {Array.from({ length: Math.floor(currentData.congestion / 10) }).map((_, i) => (
                <motion.div
                  key={`${currentHour}-${i}`}
                  className="absolute w-8 h-4 rounded"
                  style={{ 
                    backgroundColor: getCongestionColor(currentData.congestion),
                    top: i % 2 === 0 ? '20%' : '60%',
                  }}
                  initial={{ left: '-10%' }}
                  animate={{ left: '110%' }}
                  transition={{ 
                    duration: 5 / animationSpeed,
                    delay: i * (0.5 / animationSpeed),
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
