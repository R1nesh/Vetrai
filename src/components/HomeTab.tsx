import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { AlertTriangle, TrendingUp, MessageSquare, Navigation } from 'lucide-react';
import { cities, trafficHotspots, improvements, publicSentiment } from '../lib/mockData';
import { useCity } from '../lib/cityContext';

export function HomeTab() {
  const { selectedCity } = useCity();

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
      {/* Traffic Hotspots */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#EE0000]" />
            <CardTitle className="text-white">Traffic Hotspot Roads</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            Most congested roads based on real-time data and historical patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {hotspots.map((hotspot, index) => (
              <div 
                key={hotspot.id}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-[#EE0000] transition-colors"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="text-white">{hotspot.road}</h4>
                  <p className="text-gray-400 text-sm">Peak Hours: {hotspot.peakHours}</p>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${getSeverityColor(hotspot.severity)}`}>
                    <span className="text-white text-sm">{hotspot.severity}%</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Avg Delay: {hotspot.avgDelay}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Improvement Recommendations */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#EE0000]" />
            <CardTitle className="text-white">Suggested Traffic Improvements</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            AI-powered recommendations to reduce congestion and improve traffic flow
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recommendations.map(rec => (
              <div 
                key={rec.id}
                className="p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-[#EE0000] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getPriorityColor(rec.priority)}>
                        {rec.priority} Priority
                      </Badge>
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {rec.impact} Impact
                      </Badge>
                    </div>
                    <h4 className="text-white mb-1">{rec.title}</h4>
                    <p className="text-gray-400 text-sm">
                      Estimated congestion reduction: <span className="text-[#EE0000]">{rec.estimatedReduction}</span>
                    </p>
                  </div>
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
            <CardTitle className="text-white">Public Sentiment Analysis</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            Most common traffic complaints from social media and community forums
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sentiment.map((item, index) => (
              <div 
                key={item.id}
                className="p-4 bg-gray-800 rounded-lg border border-gray-700"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EE0000] text-white flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-2">{item.complaint}</h4>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-gray-400">
                        <span className="text-[#EE0000]">{item.frequency.toLocaleString()}</span> mentions
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400">
                        Sources: {item.sources}
                      </span>
                    </div>
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