import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Settings, Key, Save, Check } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function SettingsDialog() {
  const [apiKey, setApiKey] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Load saved API key from localStorage
    const savedKey = localStorage.getItem('tomtom_api_key');
    if (savedKey) {
      setApiKey(savedKey);
      setIsSaved(true);
    }
  }, []);

  const handleSave = () => {
    if (apiKey.trim()) {
      localStorage.setItem('tomtom_api_key', apiKey.trim());
      setIsSaved(true);
      toast.success('API key saved successfully');
      setIsOpen(false);
      // Reload the page to apply the new key
      window.location.reload();
    } else {
      toast.error('Please enter a valid API key');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-gray-900 border-gray-700 hover:bg-gray-800 hover:border-[#EE0000] transition-colors"
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
          {isSaved && <Check className="w-3 h-3 ml-2 text-green-500" />}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-gray-800 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-white">
            <Settings className="w-5 h-5" />
            API Configuration
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Configure your TomTom API key for advanced traffic mapping features
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="api-key" className="text-gray-300 flex items-center gap-2">
              <Key className="w-4 h-4" />
              TomTom API Key
            </Label>
            <Input
              id="api-key"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your TomTom API key"
              className="bg-gray-950 border-gray-700 text-white placeholder:text-gray-500"
            />
            <p className="text-xs text-gray-500">
              Don't have an API key?{' '}
              <a 
                href="https://developer.tomtom.com/user/register" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#EE0000] hover:underline"
              >
                Get one free from TomTom
              </a>
            </p>
          </div>

          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 space-y-2">
            <h4 className="text-sm font-semibold text-gray-300">Why TomTom?</h4>
            <ul className="text-xs text-gray-400 space-y-1">
              <li>• Real-time traffic flow data for NYC and Dallas</li>
              <li>• HD traffic incident reporting</li>
              <li>• Integration with Verizon 5G network data</li>
              <li>• Enhanced vehicle-level traffic visualization</li>
            </ul>
          </div>

          <Button 
            onClick={handleSave} 
            className="w-full bg-[#EE0000] hover:bg-[#cc0000] text-white"
          >
            <Save className="w-4 h-4 mr-2" />
            Save API Key
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
