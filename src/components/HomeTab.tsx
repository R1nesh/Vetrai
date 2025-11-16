import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { AlertTriangle, TrendingUp, MessageSquare, Navigation } from 'lucide-react';
import { cities, trafficHotspots, improvements, publicSentiment } from '../lib/mockData';
import { useCity } from '../lib/cityContext';
import { TechnologyInfo } from './TechnologyInfo';

export function HomeTab() {
  const { selectedCity, getCityDisplayName } = useCity();
  const cityDisplayName = getCityDisplayName(selectedCity);

  const hotspots = trafficHotspots[selectedCity as keyof typeof trafficHotspots] || [];
  const recommendations = improvements[selectedCity as keyof typeof improvements] || [];
  const sentiment = publicSentiment[selectedCity as keyof typeof publicSentiment] || [];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-[#EE0000] hover:bg-[#EE0000]';
      case 'High': return 'bg-orange-500 hover:bg-orange-500';
      case 'Medium': return 'bg-yellow-500 hover:bg-yellow-500';
      default: return 'bg-gray-500 hover:bg-gray-500';
    }
  };

  const getSeverityColor = (severity: number) => {
    if (severity >= 90) return 'bg-[#EE0000]';
    if (severity >= 80) return 'bg-orange-500';
    if (severity >= 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#EE0000] to-black p-8 rounded-lg border border-gray-800">
        <h1 className="text-3xl font-bold text-white mb-2">
          Welcome to Vetrai
        </h1>
        <p className="text-gray-200">
          Traffic Intelligence for {cityDisplayName} • Powered by Verizon 5G & Edge Computing
        </p>
      </div>

      {/* Technology Information */}
      <TechnologyInfo />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Hotspots */}
        <Card className="bg-gray-900 border-gray-800 lg:col-span-2">
          <CardHeader>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#EE0000]" />
              <CardTitle className="text-white">Traffic Hotspots</CardTitle>
            </div>
            <CardDescription>Critical congestion areas in {cityDisplayName}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {hotspots.map((hotspot, index) => (
                <div 
                  key={index}
                  className="bg-gray-950 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4 text-[#EE0000]" />
                      <h4 className="font-semibold text-white">{hotspot.location}</h4>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getSeverityColor(hotspot.severity)}`}></div>
                      <span className="text-sm text-gray-400">{hotspot.severity}%</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{hotspot.description}</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs border-gray-700 text-gray-300">
                      {hotspot.peakTime}
                    </Badge>
                    <Badge variant="outline" className="text-xs border-gray-700 text-gray-300">
                      Avg delay: {hotspot.avgDelay}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Public Sentiment */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#EE0000]" />
              <CardTitle className="text-white">Public Sentiment</CardTitle>
            </div>
            <CardDescription>Community feedback on traffic</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {sentiment.map((item, index) => (
                <div 
                  key={index}
                  className="bg-gray-950 border border-gray-800 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-white">{item.category}</span>
                    <span className="text-sm text-gray-400">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        item.sentiment === 'negative' ? 'bg-[#EE0000]' :
                        item.sentiment === 'neutral' ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{item.trend}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#EE0000]" />
            <CardTitle className="text-white">AI-Recommended Improvements</CardTitle>
          </div>
          <CardDescription>Data-driven suggestions for {cityDisplayName}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendations.map((improvement, index) => (
              <div
                key={index}
                className="bg-gray-950 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white">{improvement.title}</h4>
                  <Badge className={getPriorityColor(improvement.priority)}>
                    {improvement.priority}
                  </Badge>
                </div>
                <p className="text-sm text-gray-400 mb-3">{improvement.description}</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Impact</span>
                    <span className="text-green-500">{improvement.impact}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Cost</span>
                    <span className="text-yellow-500">{improvement.cost}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Timeline</span>
                    <span className="text-blue-500">{improvement.timeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
