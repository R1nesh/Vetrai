import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Settings, Info } from 'lucide-react';

export function SettingsDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-gray-900 border-gray-700 hover:bg-gray-800 hover:border-[#EE0000] transition-colors"
        >
          <Settings className="w-4 h-4 mr-2" />
          About
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Info className="w-5 h-5" />
            About Vetrai
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Traffic Intelligence Platform powered by Verizon
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 space-y-2">
            <h4 className="text-sm font-semibold text-gray-300">Verizon Technology Stack</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• 5G Ultra Wideband Network for real-time data</li>
              <li>• Mobile Edge Computing (MEC) for low-latency processing</li>
              <li>• AI-powered traffic prediction and analysis</li>
              <li>• IoT-connected traffic cameras and sensors</li>
              <li>• Network slicing for priority traffic data</li>
            </ul>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 space-y-2">
            <h4 className="text-sm font-semibold text-gray-300">Key Features</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Real-time traffic monitoring across multiple cities</li>
              <li>• 72-hour traffic flow projections</li>
              <li>• Annual data reports with historical trends</li>
              <li>• AI-driven intervention recommendations</li>
              <li>• Ethical AI practices and transparency</li>
            </ul>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 space-y-2">
            <h4 className="text-sm font-semibold text-gray-300">Cities Supported</h4>
            <div className="text-xs text-gray-400 grid grid-cols-2 gap-1">
              <div>• New York City</div>
              <div>• Dallas</div>
              <div>• Los Angeles</div>
              <div>• Chicago</div>
            </div>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-gray-500">
              © 2025 Vetrai - Powered by Verizon
            </p>
            <p className="text-xs text-gray-600 mt-1">
              All data shown is simulated for demonstration purposes
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
