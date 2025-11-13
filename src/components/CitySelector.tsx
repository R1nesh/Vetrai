import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { MapPin } from 'lucide-react';
import { useCity } from '../lib/cityContext';
import { cities } from '../lib/mockData';

export function CitySelector() {
  const { selectedCity, setSelectedCity } = useCity();

  return (
    <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2">
      <MapPin className="w-4 h-4 text-[#EE0000]" />
      <span className="text-gray-400 text-sm">City:</span>
      <Select value={selectedCity} onValueChange={setSelectedCity}>
        <SelectTrigger className="w-48 bg-gray-800 border-gray-700 text-white h-8">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent className="bg-gray-800 border-gray-700">
          {cities.map(city => (
            <SelectItem 
              key={city.id} 
              value={city.id}
              className="text-white focus:bg-gray-700 focus:text-white"
            >
              {city.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
