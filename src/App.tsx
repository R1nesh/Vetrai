import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { HomeTab } from './components/HomeTab';
import { AnnualDataReportTab } from './components/AnnualDataReportTab';
import { LiveDataTab } from './components/LiveDataTab';
import { AIAnalysisTab } from './components/AIAnalysisTab';
import { VetraiLogo } from './components/VetraiLogo';
import { CityProvider } from './lib/cityContext';
import { CitySelector } from './components/CitySelector';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <CityProvider>
      <div className="min-h-screen bg-black">
        {/* Header */}
        <header className="border-b border-gray-800 bg-black sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <VetraiLogo />
              <CitySelector />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-900 border border-gray-800 mb-6">
              <TabsTrigger 
                value="home" 
                className="data-[state=active]:bg-[#EE0000] data-[state=active]:text-white text-gray-300"
              >
                Home
              </TabsTrigger>
              <TabsTrigger 
                value="annual" 
                className="data-[state=active]:bg-[#EE0000] data-[state=active]:text-white text-gray-300"
              >
                Annual Data Report
              </TabsTrigger>
              <TabsTrigger 
                value="live" 
                className="data-[state=active]:bg-[#EE0000] data-[state=active]:text-white text-gray-300"
              >
                Live Data
              </TabsTrigger>
              <TabsTrigger 
                value="ai" 
                className="data-[state=active]:bg-[#EE0000] data-[state=active]:text-white text-gray-300"
              >
                AI Analysis
              </TabsTrigger>
            </TabsList>

            <TabsContent value="home" className="mt-0">
              <HomeTab />
            </TabsContent>

            <TabsContent value="annual" className="mt-0">
              <AnnualDataReportTab />
            </TabsContent>

            <TabsContent value="live" className="mt-0">
              <LiveDataTab />
            </TabsContent>

            <TabsContent value="ai" className="mt-0">
              <AIAnalysisTab />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </CityProvider>
  );
}