import { createContext, useContext, useState, ReactNode } from 'react';

interface CityContextType {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  getCityDisplayName: (cityId: string) => string;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

// Map city IDs to display names
const cityDisplayNames: Record<string, string> = {
  'nyc': 'NYC',
  'la': 'Los Angeles',
  'chicago': 'Chicago',
  'houston': 'Houston',
  'phoenix': 'Phoenix',
  'philadelphia': 'Philadelphia',
  'san-antonio': 'San Antonio',
  'san-diego': 'San Diego',
  'dallas': 'Dallas',
  'austin': 'Austin',
};

// Map city IDs to TomTom map names
export const cityToMapName: Record<string, string> = {
  'nyc': 'New York',
  'dallas': 'Dallas',
};

export function CityProvider({ children }: { children: ReactNode }) {
  const [selectedCity, setSelectedCity] = useState('nyc');

  const getCityDisplayName = (cityId: string): string => {
    return cityDisplayNames[cityId] || cityId;
  };

  return (
    <CityContext.Provider value={{ selectedCity, setSelectedCity, getCityDisplayName }}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  const context = useContext(CityContext);
  if (context === undefined) {
    throw new Error('useCity must be used within a CityProvider');
  }
  return context;
}
