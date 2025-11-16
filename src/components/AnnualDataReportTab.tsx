import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Calendar, Camera, MapPin } from 'lucide-react';
import { InteractiveCityMap } from './InteractiveCityMap';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { monthlyTrafficData } from '../lib/mockData';

export function AnnualDataReportTab() {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const months = [
    { value: 'all', label: 'All Year' },
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#EE0000]" />
            <CardTitle className="text-white">Annual Traffic Analysis</CardTitle>
          </div>
          <CardDescription className="text-gray-400">
            Comprehensive yearly traffic data with interactive visualizations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <Select value={selectedMonth} onValueChange={setSelectedMonth}>
              <SelectTrigger className="w-full md:w-64 bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Select month" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                {months.map(month => (
                  <SelectItem 
                    key={month.value} 
                    value={month.value}
                    className="text-white focus:bg-gray-700 focus:text-white"
                  >
                    {month.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Map */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#EE0000]" />
              <CardTitle className="text-white">Traffic Heatmap & Camera Locations</CardTitle>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-400">Active Cameras</span>
              </div>
            </div>
          </div>
          <CardDescription className="text-gray-400">
            Interactive map showing traffic density by road with camera positions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <InteractiveCityMap />
        </CardContent>
      </Card>

      {/* Traffic Trends Chart */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Monthly Traffic Trends</CardTitle>
          <CardDescription className="text-gray-400">
            Average traffic volume and congestion levels throughout the year
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyTrafficData}>
              <defs>
                <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EE0000" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#EE0000" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorCongestion" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#F3F4F6' }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="avgTraffic" 
                stroke="#EE0000" 
                fillOpacity={1} 
                fill="url(#colorTraffic)" 
                name="Avg Traffic Volume"
              />
              <Area 
                type="monotone" 
                dataKey="congestionLevel" 
                stroke="#f97316" 
                fillOpacity={1} 
                fill="url(#colorCongestion)" 
                name="Congestion Level"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Incident Analysis */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Monthly Incident Analysis</CardTitle>
          <CardDescription className="text-gray-400">
            Breakdown of traffic incidents by type and frequency
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyTrafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                labelStyle={{ color: '#F3F4F6' }}
              />
              <Legend />
              <Bar dataKey="incidents" fill="#EE0000" name="Total Incidents" />
              <Bar dataKey="avgSpeed" fill="#22c55e" name="Avg Speed (mph)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Total Incidents</p>
              <h3 className="text-white text-3xl mt-2">2,847</h3>
              <p className="text-gray-500 text-sm mt-1">-12% from last year</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Average Congestion</p>
              <h3 className="text-white text-3xl mt-2">68%</h3>
              <p className="text-gray-500 text-sm mt-1">+5% from last year</p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Peak Hour Average</p>
              <h3 className="text-white text-3xl mt-2">22 mph</h3>
              <p className="text-gray-500 text-sm mt-1">-8% from last year</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
