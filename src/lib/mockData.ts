// Mock data for the traffic intelligence platform

export const cities = [
  { id: 'nyc', name: 'New York City', lat: 40.7128, lng: -74.0060 },
  { id: 'la', name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
  { id: 'chicago', name: 'Chicago', lat: 41.8781, lng: -87.6298 },
  { id: 'houston', name: 'Houston', lat: 29.7604, lng: -95.3698 },
  { id: 'phoenix', name: 'Phoenix', lat: 33.4484, lng: -112.0740 },
  { id: 'philadelphia', name: 'Philadelphia', lat: 39.9526, lng: -75.1652 },
  { id: 'san-antonio', name: 'San Antonio', lat: 29.4241, lng: -98.4936 },
  { id: 'san-diego', name: 'San Diego', lat: 32.7157, lng: -117.1611 },
  { id: 'dallas', name: 'Dallas', lat: 32.7767, lng: -96.7970 },
  { id: 'austin', name: 'Austin', lat: 30.2672, lng: -97.7431 },
];

export const trafficHotspots = {
  'nyc': [
    { id: 1, road: 'FDR Drive (East Side)', severity: 95, avgDelay: '45 min', peakHours: '7-10 AM, 4-7 PM' },
    { id: 2, road: 'Brooklyn-Queens Expressway', severity: 92, avgDelay: '38 min', peakHours: '7-10 AM, 5-8 PM' },
    { id: 3, road: 'Cross Bronx Expressway', severity: 90, avgDelay: '42 min', peakHours: '6-9 AM, 4-7 PM' },
    { id: 4, road: 'West Side Highway', severity: 85, avgDelay: '32 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 5, road: 'Long Island Expressway', severity: 88, avgDelay: '35 min', peakHours: '7-10 AM, 4-8 PM' },
  ],
  'la': [
    { id: 1, road: 'I-405 (San Diego Freeway)', severity: 98, avgDelay: '52 min', peakHours: '6-10 AM, 3-7 PM' },
    { id: 2, road: 'I-10 (Santa Monica Freeway)', severity: 94, avgDelay: '48 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 3, road: 'US-101 (Hollywood Freeway)', severity: 91, avgDelay: '40 min', peakHours: '6-10 AM, 3-8 PM' },
    { id: 4, road: 'I-5 (Santa Ana Freeway)', severity: 87, avgDelay: '36 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 5, road: 'I-110 (Harbor Freeway)', severity: 84, avgDelay: '30 min', peakHours: '7-9 AM, 5-7 PM' },
  ],
  'chicago': [
    { id: 1, road: 'I-290 (Eisenhower Expressway)', severity: 93, avgDelay: '44 min', peakHours: '6-9 AM, 4-7 PM' },
    { id: 2, road: 'I-90/94 (Kennedy Expressway)', severity: 89, avgDelay: '38 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 3, road: 'I-55 (Stevenson Expressway)', severity: 86, avgDelay: '34 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 4, road: 'Lake Shore Drive', severity: 82, avgDelay: '28 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 5, road: 'I-94 (Dan Ryan Expressway)', severity: 85, avgDelay: '32 min', peakHours: '6-9 AM, 4-7 PM' },
  ],
  'houston': [
    { id: 1, road: 'I-10 (Katy Freeway)', severity: 94, avgDelay: '40 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 2, road: 'I-45 (Gulf Freeway)', severity: 88, avgDelay: '35 min', peakHours: '7-10 AM, 4-7 PM' },
    { id: 3, road: 'US-59 (Southwest Freeway)', severity: 86, avgDelay: '32 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 4, road: 'I-610 (Loop)', severity: 83, avgDelay: '28 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 5, road: 'Beltway 8', severity: 78, avgDelay: '25 min', peakHours: '7-9 AM, 4-7 PM' },
  ],
  'phoenix': [
    { id: 1, road: 'I-10 (Papago Freeway)', severity: 82, avgDelay: '28 min', peakHours: '7-9 AM, 4-6 PM' },
    { id: 2, road: 'I-17 (Black Canyon Freeway)', severity: 78, avgDelay: '24 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 3, road: 'Loop 101', severity: 74, avgDelay: '22 min', peakHours: '7-9 AM, 4-6 PM' },
    { id: 4, road: 'US-60 (Superstition Freeway)', severity: 76, avgDelay: '23 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 5, road: 'Loop 202', severity: 71, avgDelay: '20 min', peakHours: '7-9 AM, 4-6 PM' },
  ],
  'philadelphia': [
    { id: 1, road: 'I-76 (Schuylkill Expressway)', severity: 90, avgDelay: '38 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 2, road: 'I-95', severity: 85, avgDelay: '32 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 3, road: 'I-676 (Vine Street Expressway)', severity: 81, avgDelay: '28 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 4, road: 'US-1 (Roosevelt Boulevard)', severity: 79, avgDelay: '26 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 5, road: 'I-476 (Blue Route)', severity: 75, avgDelay: '24 min', peakHours: '7-9 AM, 5-7 PM' },
  ],
  'san-antonio': [
    { id: 1, road: 'I-35', severity: 80, avgDelay: '26 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 2, road: 'I-10', severity: 76, avgDelay: '24 min', peakHours: '7-9 AM, 4-6 PM' },
    { id: 3, road: 'Loop 410', severity: 73, avgDelay: '22 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 4, road: 'US-281', severity: 70, avgDelay: '20 min', peakHours: '7-9 AM, 4-6 PM' },
    { id: 5, road: 'Loop 1604', severity: 68, avgDelay: '18 min', peakHours: '7-9 AM, 5-7 PM' },
  ],
  'san-diego': [
    { id: 1, road: 'I-5', severity: 84, avgDelay: '30 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 2, road: 'I-8', severity: 78, avgDelay: '26 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 3, road: 'I-15', severity: 81, avgDelay: '28 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 4, road: 'SR-163', severity: 75, avgDelay: '24 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 5, road: 'I-805', severity: 77, avgDelay: '25 min', peakHours: '7-9 AM, 4-7 PM' },
  ],
  'dallas': [
    { id: 1, road: 'I-635 (LBJ Freeway)', severity: 92, avgDelay: '40 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 2, road: 'I-35E', severity: 88, avgDelay: '35 min', peakHours: '7-10 AM, 4-7 PM' },
    { id: 3, road: 'US-75 (Central Expressway)', severity: 86, avgDelay: '32 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 4, road: 'I-30', severity: 83, avgDelay: '28 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 5, road: 'I-20', severity: 79, avgDelay: '26 min', peakHours: '7-9 AM, 5-7 PM' },
  ],
  'austin': [
    { id: 1, road: 'I-35', severity: 91, avgDelay: '38 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 2, road: 'Loop 1 (MoPac)', severity: 85, avgDelay: '32 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 3, road: 'US-183', severity: 80, avgDelay: '28 min', peakHours: '7-9 AM, 4-7 PM' },
    { id: 4, road: 'TX-71', severity: 75, avgDelay: '24 min', peakHours: '7-9 AM, 5-7 PM' },
    { id: 5, road: 'Loop 360', severity: 72, avgDelay: '22 min', peakHours: '7-9 AM, 4-6 PM' },
  ],
};

export const improvements = {
  'nyc': [
    { id: 1, title: 'Implement adaptive traffic signal timing on FDR Drive', priority: 'Critical', impact: 'High', estimatedReduction: '25%' },
    { id: 2, title: 'Add HOV lanes to Brooklyn-Queens Expressway', priority: 'High', impact: 'High', estimatedReduction: '18%' },
    { id: 3, title: 'Optimize merge lane configurations at Cross Bronx', priority: 'Critical', impact: 'Medium', estimatedReduction: '15%' },
    { id: 4, title: 'Deploy real-time ramp metering system', priority: 'Medium', impact: 'Medium', estimatedReduction: '12%' },
    { id: 5, title: 'Enhance public transit connections to reduce car dependency', priority: 'High', impact: 'High', estimatedReduction: '20%' },
  ],
  'la': [
    { id: 1, title: 'Expand I-405 carpool lanes through Sepulveda Pass', priority: 'Critical', impact: 'High', estimatedReduction: '30%' },
    { id: 2, title: 'Implement AI-driven signal coordination on I-10 corridor', priority: 'Critical', impact: 'High', estimatedReduction: '22%' },
    { id: 3, title: 'Add express toll lanes to US-101', priority: 'High', impact: 'Medium', estimatedReduction: '16%' },
    { id: 4, title: 'Optimize on-ramp spacing and acceleration lanes', priority: 'Medium', impact: 'Medium', estimatedReduction: '14%' },
    { id: 5, title: 'Increase Metro service frequency during peak hours', priority: 'High', impact: 'High', estimatedReduction: '18%' },
  ],
  'chicago': [
    { id: 1, title: 'Redesign I-290 interchange configurations', priority: 'Critical', impact: 'High', estimatedReduction: '28%' },
    { id: 2, title: 'Deploy variable speed limits on Kennedy Expressway', priority: 'High', impact: 'Medium', estimatedReduction: '16%' },
    { id: 3, title: 'Add reversible express lanes to I-55', priority: 'High', impact: 'High', estimatedReduction: '20%' },
    { id: 4, title: 'Improve incident response times with mobile units', priority: 'Medium', impact: 'Medium', estimatedReduction: '10%' },
    { id: 5, title: 'Expand CTA Red Line to reduce Loop congestion', priority: 'Critical', impact: 'High', estimatedReduction: '24%' },
  ],
  'houston': [
    { id: 1, title: 'Expand I-10 managed lanes throughout metro area', priority: 'Critical', impact: 'High', estimatedReduction: '28%' },
    { id: 2, title: 'Implement synchronized traffic signals on major corridors', priority: 'High', impact: 'High', estimatedReduction: '20%' },
    { id: 3, title: 'Add dedicated bus lanes on I-45', priority: 'Medium', impact: 'Medium', estimatedReduction: '14%' },
    { id: 4, title: 'Improve I-610 loop interchange efficiency', priority: 'High', impact: 'Medium', estimatedReduction: '16%' },
    { id: 5, title: 'Deploy smart ramp metering on all major freeways', priority: 'Medium', impact: 'High', estimatedReduction: '18%' },
  ],
  'phoenix': [
    { id: 1, title: 'Add flex lanes to I-10 for peak hour management', priority: 'High', impact: 'High', estimatedReduction: '22%' },
    { id: 2, title: 'Expand light rail to Scottsdale and Tempe', priority: 'Critical', impact: 'High', estimatedReduction: '24%' },
    { id: 3, title: 'Optimize signal timing on Loop 101 access roads', priority: 'Medium', impact: 'Medium', estimatedReduction: '12%' },
    { id: 4, title: 'Implement intelligent transportation system citywide', priority: 'High', impact: 'High', estimatedReduction: '18%' },
    { id: 5, title: 'Add park-and-ride facilities near major interchanges', priority: 'Medium', impact: 'Medium', estimatedReduction: '14%' },
  ],
  'philadelphia': [
    { id: 1, title: 'Redesign I-76 bottleneck near King of Prussia', priority: 'Critical', impact: 'High', estimatedReduction: '26%' },
    { id: 2, title: 'Expand SEPTA regional rail service frequency', priority: 'High', impact: 'High', estimatedReduction: '22%' },
    { id: 3, title: 'Add reversible lanes on I-676', priority: 'Medium', impact: 'Medium', estimatedReduction: '15%' },
    { id: 4, title: 'Implement adaptive signal control on Roosevelt Boulevard', priority: 'High', impact: 'Medium', estimatedReduction: '17%' },
    { id: 5, title: 'Improve I-95/I-476 interchange configuration', priority: 'Critical', impact: 'High', estimatedReduction: '20%' },
  ],
  'san-antonio': [
    { id: 1, title: 'Expand I-35 through downtown with managed lanes', priority: 'Critical', impact: 'High', estimatedReduction: '25%' },
    { id: 2, title: 'Implement smart traffic management on Loop 410', priority: 'High', impact: 'Medium', estimatedReduction: '18%' },
    { id: 3, title: 'Add express lanes to US-281', priority: 'Medium', impact: 'Medium', estimatedReduction: '15%' },
    { id: 4, title: 'Improve I-10/Loop 1604 interchange', priority: 'High', impact: 'Medium', estimatedReduction: '14%' },
    { id: 5, title: 'Deploy coordinated signal systems on major arterials', priority: 'Medium', impact: 'High', estimatedReduction: '16%' },
  ],
  'san-diego': [
    { id: 1, title: 'Add managed lanes to I-5 North County corridor', priority: 'Critical', impact: 'High', estimatedReduction: '24%' },
    { id: 2, title: 'Extend trolley service to major employment centers', priority: 'High', impact: 'High', estimatedReduction: '20%' },
    { id: 3, title: 'Implement ramp metering on I-8 and I-15', priority: 'Medium', impact: 'Medium', estimatedReduction: '16%' },
    { id: 4, title: 'Optimize SR-163 merge lane configurations', priority: 'High', impact: 'Medium', estimatedReduction: '14%' },
    { id: 5, title: 'Add intelligent traffic management on I-805', priority: 'Medium', impact: 'High', estimatedReduction: '18%' },
  ],
  'dallas': [
    { id: 1, title: 'Expand LBJ Freeway managed lanes system', priority: 'Critical', impact: 'High', estimatedReduction: '28%' },
    { id: 2, title: 'Implement AI traffic control on Central Expressway', priority: 'Critical', impact: 'High', estimatedReduction: '24%' },
    { id: 3, title: 'Add reversible lanes to I-30 corridor', priority: 'High', impact: 'Medium', estimatedReduction: '17%' },
    { id: 4, title: 'Expand DART light rail to Fort Worth', priority: 'High', impact: 'High', estimatedReduction: '22%' },
    { id: 5, title: 'Optimize I-35E/I-30 interchange', priority: 'Medium', impact: 'Medium', estimatedReduction: '15%' },
  ],
  'austin': [
    { id: 1, title: 'Double-deck I-35 through downtown Austin', priority: 'Critical', impact: 'High', estimatedReduction: '32%' },
    { id: 2, title: 'Add dedicated transit lanes on MoPac', priority: 'Critical', impact: 'High', estimatedReduction: '26%' },
    { id: 3, title: 'Implement adaptive traffic control on US-183', priority: 'High', impact: 'Medium', estimatedReduction: '18%' },
    { id: 4, title: 'Expand CapMetro rail network', priority: 'High', impact: 'High', estimatedReduction: '24%' },
    { id: 5, title: 'Add express lanes to TX-71', priority: 'Medium', impact: 'Medium', estimatedReduction: '16%' },
  ],
};

export const publicSentiment = {
  'nyc': [
    { id: 1, complaint: 'Excessive delays during rush hour, especially on FDR Drive', frequency: 2847, sentiment: 'negative', sources: 'Twitter, Reddit, NextDoor' },
    { id: 2, complaint: 'Poor road conditions and potholes causing additional slowdowns', frequency: 1923, sentiment: 'negative', sources: 'Reddit, Facebook, Local Forums' },
    { id: 3, complaint: 'Lack of alternative routes during construction projects', frequency: 1654, sentiment: 'negative', sources: 'Twitter, NextDoor' },
    { id: 4, complaint: 'Inefficient traffic light timing causing unnecessary stops', frequency: 1432, sentiment: 'negative', sources: 'Reddit, Twitter' },
    { id: 5, complaint: 'Aggressive driving and lane changes making traffic worse', frequency: 1289, sentiment: 'negative', sources: 'Twitter, Facebook' },
  ],
  'la': [
    { id: 1, complaint: 'I-405 is a parking lot during any time of day', frequency: 3521, sentiment: 'negative', sources: 'Twitter, Reddit, Yelp' },
    { id: 2, complaint: 'Lack of reliable public transportation alternatives', frequency: 2934, sentiment: 'negative', sources: 'Reddit, Facebook, Twitter' },
    { id: 3, complaint: 'Construction zones are poorly managed and never-ending', frequency: 2156, sentiment: 'negative', sources: 'Twitter, NextDoor, Local News' },
    { id: 4, complaint: 'High cost of toll roads with minimal time savings', frequency: 1876, sentiment: 'negative', sources: 'Reddit, Facebook' },
    { id: 5, complaint: 'Poor visibility and signage causing last-minute lane changes', frequency: 1543, sentiment: 'negative', sources: 'Twitter, Reddit' },
  ],
  'chicago': [
    { id: 1, complaint: 'Winter weather makes already bad traffic unbearable', frequency: 2654, sentiment: 'negative', sources: 'Twitter, Reddit, Facebook' },
    { id: 2, complaint: 'The Eisenhower is constantly jammed with no improvements', frequency: 2341, sentiment: 'negative', sources: 'Reddit, Twitter, NextDoor' },
    { id: 3, complaint: 'Road construction during summer creates massive delays', frequency: 1987, sentiment: 'negative', sources: 'Twitter, Facebook, Local Forums' },
    { id: 4, complaint: 'Parking difficulties add to overall traffic congestion', frequency: 1765, sentiment: 'negative', sources: 'Reddit, Yelp, Twitter' },
    { id: 5, complaint: 'Inconsistent speed limits and enforcement', frequency: 1432, sentiment: 'negative', sources: 'Twitter, Reddit' },
  ],
  'houston': [
    { id: 1, complaint: 'I-10 Katy Freeway is unbearable during any commute time', frequency: 2987, sentiment: 'negative', sources: 'Twitter, Reddit, Facebook' },
    { id: 2, complaint: 'Flooding from heavy rain makes traffic even worse', frequency: 2456, sentiment: 'negative', sources: 'Local News, Reddit, Twitter' },
    { id: 3, complaint: 'Not enough public transportation options', frequency: 1876, sentiment: 'negative', sources: 'Reddit, Facebook' },
    { id: 4, complaint: 'Aggressive lane switching causes more slowdowns', frequency: 1654, sentiment: 'negative', sources: 'Twitter, NextDoor' },
    { id: 5, complaint: 'Highway construction never seems to end', frequency: 1543, sentiment: 'negative', sources: 'Twitter, Reddit' },
  ],
  'phoenix': [
    { id: 1, complaint: 'Summer heat and AC failures make sitting in traffic dangerous', frequency: 1987, sentiment: 'negative', sources: 'Twitter, Facebook, Reddit' },
    { id: 2, complaint: 'I-10 congestion during snowbird season is terrible', frequency: 1765, sentiment: 'negative', sources: 'Reddit, Local Forums' },
    { id: 3, complaint: 'Need more light rail expansion to reduce car traffic', frequency: 1654, sentiment: 'negative', sources: 'Twitter, Reddit' },
    { id: 4, complaint: 'Loop 101 construction causes major delays', frequency: 1432, sentiment: 'negative', sources: 'NextDoor, Twitter' },
    { id: 5, complaint: 'Rush hour timing conflicts with school schedules', frequency: 1234, sentiment: 'negative', sources: 'Facebook, Reddit' },
  ],
  'philadelphia': [
    { id: 1, complaint: 'Schuylkill Expressway is always a nightmare', frequency: 2543, sentiment: 'negative', sources: 'Twitter, Reddit, Facebook' },
    { id: 2, complaint: 'Potholes everywhere making commute even slower', frequency: 2134, sentiment: 'negative', sources: 'Reddit, Local News, Twitter' },
    { id: 3, complaint: 'Bridge closures with no viable alternative routes', frequency: 1876, sentiment: 'negative', sources: 'Twitter, NextDoor' },
    { id: 4, complaint: 'Aggressive drivers on I-95 causing accidents', frequency: 1654, sentiment: 'negative', sources: 'Reddit, Twitter' },
    { id: 5, complaint: 'SEPTA reliability issues force more people to drive', frequency: 1432, sentiment: 'negative', sources: 'Twitter, Facebook, Reddit' },
  ],
  'san-antonio': [
    { id: 1, complaint: 'I-35 construction has been going on forever', frequency: 2234, sentiment: 'negative', sources: 'Twitter, Reddit, Facebook' },
    { id: 2, complaint: 'Loop 410 merges are poorly designed', frequency: 1876, sentiment: 'negative', sources: 'Reddit, NextDoor' },
    { id: 3, complaint: 'Not enough public transit options for commuters', frequency: 1654, sentiment: 'negative', sources: 'Twitter, Facebook' },
    { id: 4, complaint: 'Traffic lights not synchronized causing constant stops', frequency: 1432, sentiment: 'negative', sources: 'Reddit, Twitter' },
    { id: 5, complaint: 'Highway exits too close together causing confusion', frequency: 1234, sentiment: 'negative', sources: 'NextDoor, Twitter' },
  ],
  'san-diego': [
    { id: 1, complaint: 'I-5 North is a parking lot every morning', frequency: 2456, sentiment: 'negative', sources: 'Twitter, Reddit, Facebook' },
    { id: 2, complaint: 'Beach traffic on weekends creates citywide gridlock', frequency: 2134, sentiment: 'negative', sources: 'Reddit, Twitter, NextDoor' },
    { id: 3, complaint: 'Trolley system needs expansion to more areas', frequency: 1876, sentiment: 'negative', sources: 'Twitter, Facebook' },
    { id: 4, complaint: 'I-8 and I-15 interchange is always congested', frequency: 1654, sentiment: 'negative', sources: 'Reddit, Twitter' },
    { id: 5, complaint: 'Border traffic causes major delays on southern routes', frequency: 1543, sentiment: 'negative', sources: 'Local News, Reddit' },
  ],
  'dallas': [
    { id: 1, complaint: 'LBJ Freeway tolls are expensive with constant traffic', frequency: 2876, sentiment: 'negative', sources: 'Twitter, Reddit, Facebook' },
    { id: 2, complaint: 'Central Expressway congestion never improves', frequency: 2456, sentiment: 'negative', sources: 'Reddit, Twitter, NextDoor' },
    { id: 3, complaint: 'DFW sprawl makes commutes incredibly long', frequency: 2134, sentiment: 'negative', sources: 'Twitter, Facebook' },
    { id: 4, complaint: 'Construction zones everywhere with minimal progress', frequency: 1876, sentiment: 'negative', sources: 'Reddit, Twitter' },
    { id: 5, complaint: 'Need better public transit to reduce highway traffic', frequency: 1654, sentiment: 'negative', sources: 'Twitter, Facebook, Reddit' },
  ],
  'austin': [
    { id: 1, complaint: 'I-35 is the worst highway in America', frequency: 3234, sentiment: 'negative', sources: 'Twitter, Reddit, Local News' },
    { id: 2, complaint: 'MoPac tolls are too expensive for daily commuters', frequency: 2876, sentiment: 'negative', sources: 'Reddit, Facebook, Twitter' },
    { id: 3, complaint: 'City growth has completely overwhelmed infrastructure', frequency: 2543, sentiment: 'negative', sources: 'Twitter, Reddit, NextDoor' },
    { id: 4, complaint: 'Lack of public transit forces everyone to drive', frequency: 2234, sentiment: 'negative', sources: 'Reddit, Twitter, Facebook' },
    { id: 5, complaint: 'Traffic getting worse every year with no solutions', frequency: 1987, sentiment: 'negative', sources: 'Twitter, Local Forums' },
  ],
};

export const trafficCameras = [
  { id: 1, lat: 40.7580, lng: -73.9855, status: 'active' },
  { id: 2, lat: 40.7489, lng: -73.9680, status: 'active' },
  { id: 3, lat: 40.7128, lng: -74.0060, status: 'active' },
  { id: 4, lat: 40.7614, lng: -73.9776, status: 'active' },
  { id: 5, lat: 40.7831, lng: -73.9712, status: 'active' },
  { id: 6, lat: 40.7282, lng: -73.7949, status: 'maintenance' },
  { id: 7, lat: 40.6782, lng: -73.9442, status: 'active' },
  { id: 8, lat: 40.7891, lng: -73.9347, status: 'active' },
];

export const monthlyTrafficData = [
  { month: 'Jan', avgSpeed: 28, incidents: 342, volume: 1250000 },
  { month: 'Feb', avgSpeed: 30, incidents: 298, volume: 1180000 },
  { month: 'Mar', avgSpeed: 26, incidents: 378, volume: 1320000 },
  { month: 'Apr', avgSpeed: 24, incidents: 421, volume: 1450000 },
  { month: 'May', avgSpeed: 22, incidents: 456, volume: 1520000 },
  { month: 'Jun', avgSpeed: 21, incidents: 489, volume: 1580000 },
  { month: 'Jul', avgSpeed: 23, incidents: 467, volume: 1490000 },
  { month: 'Aug', avgSpeed: 24, incidents: 445, volume: 1480000 },
  { month: 'Sep', avgSpeed: 25, incidents: 412, volume: 1420000 },
  { month: 'Oct', avgSpeed: 27, incidents: 389, volume: 1390000 },
  { month: 'Nov', avgSpeed: 26, incidents: 401, volume: 1410000 },
  { month: 'Dec', avgSpeed: 29, incidents: 356, volume: 1290000 },
];

export const hourlyTrafficData = Array.from({ length: 24 }, (_, i) => ({
  hour: `${i}:00`,
  current: Math.floor(Math.random() * 40) + 20 + (i >= 7 && i <= 9 ? 20 : 0) + (i >= 16 && i <= 18 ? 25 : 0),
  predicted: Math.floor(Math.random() * 40) + 20 + (i >= 7 && i <= 9 ? 18 : 0) + (i >= 16 && i <= 18 ? 22 : 0),
}));

export const severityColors = {
  low: '#22c55e',
  medium: '#eab308',
  high: '#f97316',
  critical: '#EE0000',
};

export const roadNetworkData = [
  { road: 'Highway 1', segments: 45, avgSpeed: 42, severity: 'medium' },
  { road: 'Highway 2', segments: 38, avgSpeed: 35, severity: 'high' },
  { road: 'Highway 3', segments: 52, avgSpeed: 28, severity: 'critical' },
  { road: 'Main St Corridor', segments: 28, avgSpeed: 22, severity: 'critical' },
  { road: 'Downtown Loop', segments: 34, avgSpeed: 18, severity: 'critical' },
];