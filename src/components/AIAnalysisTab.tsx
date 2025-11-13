import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Brain, TrendingUp, AlertCircle, Lightbulb, BarChart3, Activity } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Badge } from './ui/badge';
import { monthlyTrafficData, hourlyTrafficData } from '../lib/mockData';

export function AIAnalysisTab() {
  // Analysis data
  const congestionFactors = [
    { factor: 'Rush Hour', impact: 85, color: '#EE0000' },
    { factor: 'Road Construction', impact: 72, color: '#f97316' },
    { factor: 'Weather Conditions', impact: 58, color: '#eab308' },
    { factor: 'Special Events', impact: 45, color: '#3b82f6' },
    { factor: 'Accidents', impact: 92, color: '#dc2626' },
  ];

  const roadPerformance = [
    { road: 'Highway 1', efficiency: 45, volume: 95, speed: 35, incidents: 82 },
    { road: 'Highway 2', efficiency: 62, volume: 78, speed: 58, incidents: 45 },
    { road: 'Main St', efficiency: 38, volume: 88, speed: 28, incidents: 65 },
    { road: 'Downtown', efficiency: 28, volume: 92, speed: 22, incidents: 88 },
    { road: 'Bypass', efficiency: 78, volume: 42, speed: 75, incidents: 15 },
  ];

  const interventionROI = [
    { intervention: 'Smart Signals', cost: 2.5, reduction: 22, roi: 8.8 },
    { intervention: 'HOV Lanes', cost: 15, reduction: 28, roi: 1.9 },
    { intervention: 'Ramp Metering', cost: 3.2, reduction: 15, roi: 4.7 },
    { intervention: 'Transit Expansion', cost: 45, reduction: 35, roi: 0.8 },
    { intervention: 'Road Widening', cost: 28, reduction: 18, roi: 0.6 },
  ];

  const predictions = [
    { id: 1, title: 'Evening rush hour congestion will increase by 12% next week', severity: 'high', confidence: 87 },
    { id: 2, title: 'Highway 1 traffic will improve by 8% after signal optimization', severity: 'positive', confidence: 92 },
    { id: 3, title: 'Weather patterns suggest 15% slowdown on Wednesday', severity: 'medium', confidence: 78 },
    { id: 4, title: 'Special event downtown will cause 25% increase in surrounding areas', severity: 'high', confidence: 95 },
  ];

  const insights = [
    { id: 1, title: 'Peak congestion shifted 30 minutes earlier compared to last year', icon: TrendingUp, color: 'text-orange-500' },
    { id: 2, title: 'Incident response time improved by 18% with mobile units', icon: Activity, color: 'text-green-500' },
    { id: 3, title: '42% of delays are concentrated in just 3 bottleneck locations', icon: AlertCircle, color: 'text-[#EE0000]' },
    { id: 4, title: 'Public transit usage could reduce traffic by 20% if frequency increased', icon: Lightbulb, color: 'text-blue-500' },
  ];

  const COLORS = ['#EE0000', '#f97316', '#eab308', '#3b82f6', '#8b5cf6'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-gray-900 to-gray-800 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="w-6 h-6 text-[#EE0000]" />
            <CardTitle className="text-white text-2xl">AI-Powered Traffic Analysis</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            Advanced machine learning insights and predictive analytics for traffic optimization
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map(insight => {
          const Icon = insight.icon;
          return (
            <Card key={insight.id} className="bg-gray-900 border-gray-800 hover:border-[#EE0000] transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gray-800 ${insight.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white">{insight.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Predictions */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#EE0000]" />
            <CardTitle className="text-white">AI Predictions</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            Machine learning forecasts based on historical patterns and current trends
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {predictions.map(pred => (
              <div key={pred.id} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-white mb-2">{pred.title}</p>
                    <div className="flex items-center gap-2">
                      <Badge 
                        className={
                          pred.severity === 'high' ? 'bg-[#EE0000] hover:bg-[#EE0000]' :
                          pred.severity === 'positive' ? 'bg-green-500 hover:bg-green-500' :
                          'bg-orange-500 hover:bg-orange-500'
                        }
                      >
                        {pred.severity === 'positive' ? 'Positive' : pred.severity === 'high' ? 'High Impact' : 'Medium Impact'}
                      </Badge>
                      <span className="text-gray-400 text-sm">
                        Confidence: <span className="text-[#EE0000]">{pred.confidence}%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Congestion Factors */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Congestion Contributing Factors</CardTitle>
            <CardDescription className="text-gray-400">
              AI-identified causes of traffic congestion
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={congestionFactors} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" stroke="#9CA3AF" />
                <YAxis type="category" dataKey="factor" stroke="#9CA3AF" width={120} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="impact" radius={[0, 8, 8, 0]}>
                  {congestionFactors.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Road Performance Radar */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Road Performance Analysis</CardTitle>
            <CardDescription className="text-gray-400">
              Multi-factor performance comparison
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={roadPerformance}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="road" stroke="#9CA3AF" />
                <PolarRadiusAxis stroke="#9CA3AF" />
                <Radar name="Efficiency" dataKey="efficiency" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} />
                <Radar name="Volume" dataKey="volume" stroke="#EE0000" fill="#EE0000" fillOpacity={0.3} />
                <Legend />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Hourly Pattern Analysis */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">24-Hour Traffic Pattern</CardTitle>
            <CardDescription className="text-gray-400">
              Current vs AI-predicted congestion levels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={hourlyTrafficData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="hour" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" label={{ value: 'Congestion %', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Legend />
                <Line type="monotone" dataKey="current" stroke="#EE0000" strokeWidth={2} name="Current" />
                <Line type="monotone" dataKey="predicted" stroke="#3b82f6" strokeWidth={2} strokeDasharray="5 5" name="AI Prediction" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Intervention ROI */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Intervention Cost-Benefit Analysis</CardTitle>
            <CardDescription className="text-gray-400">
              Recommended improvements ranked by ROI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={interventionROI}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="intervention" stroke="#9CA3AF" angle={-45} textAnchor="end" height={100} />
                <YAxis stroke="#9CA3AF" label={{ value: 'ROI', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="roi" fill="#22c55e" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Recommendations */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-[#EE0000]" />
            <CardTitle className="text-white">AI-Generated Recommendations</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            Data-driven intervention strategies for maximum impact
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {interventionROI.sort((a, b) => b.roi - a.roi).map((item, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#EE0000] text-white text-sm">
                        {index + 1}
                      </span>
                      <h4 className="text-white">{item.intervention}</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-3">
                      <div>
                        <p className="text-gray-400 text-sm">Investment</p>
                        <p className="text-white">${item.cost}M</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Congestion Reduction</p>
                        <p className="text-green-500">{item.reduction}%</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">ROI</p>
                        <p className="text-[#EE0000]">{item.roi}x</p>
                      </div>
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
