import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Activity, Zap, TrendingUp } from 'lucide-react';
import { InteractiveCityMap } from './InteractiveCityMap';
import { TomTomTrafficMap } from './TomTomTrafficMap';
import { TrafficProjection } from './TrafficProjection';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useCity } from '../lib/cityContext';

export function LiveDataTab() {
  const [liveStats, setLiveStats] = useState({
    avgSpeed: 28,
    activeIncidents: 12,
    congestionLevel: 78,
    camerasOnline: 156,
  });
  const [tomtomApiWorking, setTomtomApiWorking] = useState(false);

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        avgSpeed: Math.max(15, Math.min(45, prev.avgSpeed + (Math.random() - 0.5) * 3)),
        activeIncidents: Math.max(0, Math.min(25, prev.activeIncidents + Math.floor((Math.random() - 0.5) * 3))),
        congestionLevel: Math.max(0, Math.min(100, prev.congestionLevel + (Math.random() - 0.5) * 5)),
        camerasOnline: Math.max(140, Math.min(160, prev.camerasOnline + Math.floor((Math.random() - 0.5) * 2))),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCongestionColor = (level: number) => {
    if (level >= 75) return 'text-[#EE0000]';
    if (level >= 50) return 'text-orange-500';
    if (level >= 25) return 'text-yellow-500';
    return 'text-green-500';
  };

  const city = useCity();

  // Check if TomTom API key is available
  useEffect(() => {
    const apiKey = localStorage.getItem('tomtom_api_key');
    setTomtomApiWorking(!!apiKey);
  }, []);

  const handleApiStatusChange = (isWorking: boolean) => {
    setTomtomApiWorking(isWorking);
  };

  return (
    <div className="space-y-6">
      {/* Live Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0 }}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Average Speed</p>
                  <h3 className="text-white text-3xl mt-1">{liveStats.avgSpeed.toFixed(1)}</h3>
                  <p className="text-gray-500 text-sm">mph</p>
                </div>
                <Activity className="w-8 h-8 text-[#EE0000]" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Active Incidents</p>
                  <h3 className="text-white text-3xl mt-1">{liveStats.activeIncidents}</h3>
                  <p className="text-gray-500 text-sm">current</p>
                </div>
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Congestion Level</p>
                  <h3 className={`text-3xl mt-1 ${getCongestionColor(liveStats.congestionLevel)}`}>
                    {liveStats.congestionLevel.toFixed(0)}%
                  </h3>
                  <p className="text-gray-500 text-sm">citywide</p>
                </div>
                <TrendingUp className={`w-8 h-8 ${getCongestionColor(liveStats.congestionLevel)}`} />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Cameras Online</p>
                  <h3 className="text-white text-3xl mt-1">{liveStats.camerasOnline}</h3>
                  <p className="text-gray-500 text-sm">of 160 total</p>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Live Traffic Map */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Activity className="w-5 h-5 text-[#EE0000]" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#EE0000] rounded-full animate-pulse"></div>
              </div>
              <CardTitle className="text-white">Real-Time Traffic Map</CardTitle>
            </div>
            <Badge className="bg-green-500 hover:bg-green-500">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              LIVE
            </Badge>
          </div>
          <CardDescription className="text-gray-400">
            Live traffic flow with real-time updates every 30 seconds
          </CardDescription>
        </CardHeader>
        <CardContent>
          {tomtomApiWorking ? (
            <TomTomTrafficMap isLive={true} onApiStatusChange={handleApiStatusChange} />
          ) : (
            <InteractiveCityMap isLive={true} />
          )}
        </CardContent>
      </Card>

      {/* Traffic Projection */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#EE0000]" />
            <CardTitle className="text-white">Traffic Projection - Next 72 Hours</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            AI-powered prediction of traffic patterns based on historical and real-time data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TrafficProjection />
        </CardContent>
      </Card>
    </div>
  );
}