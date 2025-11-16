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
    { id: 1, location: 'FDR Drive (East Side)', road: 'FDR Drive (East Side)', severity: 95, avgDelay: '45 min', peakTime: '7-10 AM, 4-7 PM', peakHours: '7-10 AM, 4-7 PM', description: 'Heavy congestion due to high commuter volume and limited alternative routes' },
    { id: 2, location: 'Brooklyn-Queens Expressway', road: 'Brooklyn-Queens Expressway', severity: 92, avgDelay: '38 min', peakTime: '7-10 AM, 5-8 PM', peakHours: '7-10 AM, 5-8 PM', description: 'Chronic bottleneck at interchange points with frequent lane merging issues' },
    { id: 3, location: 'Cross Bronx Expressway', road: 'Cross Bronx Expressway', severity: 90, avgDelay: '42 min', peakTime: '6-9 AM, 4-7 PM', peakHours: '6-9 AM, 4-7 PM', description: 'Major east-west corridor with persistent slowdowns and accident-prone areas' },
    { id: 4, location: 'West Side Highway', road: 'West Side Highway', severity: 85, avgDelay: '32 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Tourist traffic and construction zones create unpredictable delays' },
    { id: 5, location: 'Long Island Expressway', road: 'Long Island Expressway', severity: 88, avgDelay: '35 min', peakTime: '7-10 AM, 4-8 PM', peakHours: '7-10 AM, 4-8 PM', description: 'Extended rush hour periods with heavy suburban commuter traffic' },
  ],
  'la': [
    { id: 1, location: 'I-405 (San Diego Freeway)', road: 'I-405 (San Diego Freeway)', severity: 98, avgDelay: '52 min', peakTime: '6-10 AM, 3-7 PM', peakHours: '6-10 AM, 3-7 PM', description: 'One of the most congested corridors in the nation with near-constant delays' },
    { id: 2, location: 'I-10 (Santa Monica Freeway)', road: 'I-10 (Santa Monica Freeway)', severity: 94, avgDelay: '48 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Critical east-west route overwhelmed by commuter and freight traffic' },
    { id: 3, location: 'US-101 (Hollywood Freeway)', road: 'US-101 (Hollywood Freeway)', severity: 91, avgDelay: '40 min', peakTime: '6-10 AM, 3-8 PM', peakHours: '6-10 AM, 3-8 PM', description: 'Entertainment industry traffic compounds with regular commuters during peak hours' },
    { id: 4, location: 'I-5 (Santa Ana Freeway)', road: 'I-5 (Santa Ana Freeway)', severity: 87, avgDelay: '36 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Major north-south artery with significant truck traffic and interchange bottlenecks' },
    { id: 5, location: 'I-110 (Harbor Freeway)', road: 'I-110 (Harbor Freeway)', severity: 84, avgDelay: '30 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Port-related commercial traffic creates unique congestion patterns' },
  ],
  'chicago': [
    { id: 1, location: 'I-290 (Eisenhower Expressway)', road: 'I-290 (Eisenhower Expressway)', severity: 93, avgDelay: '44 min', peakTime: '6-9 AM, 4-7 PM', peakHours: '6-9 AM, 4-7 PM', description: 'Notorious bottleneck serving western suburbs with inadequate capacity' },
    { id: 2, location: 'I-90/94 (Kennedy Expressway)', road: 'I-90/94 (Kennedy Expressway)', severity: 89, avgDelay: '38 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Major airport corridor with constant heavy traffic and frequent incidents' },
    { id: 3, location: 'I-55 (Stevenson Expressway)', road: 'I-55 (Stevenson Expressway)', severity: 86, avgDelay: '34 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Critical southwest commuter route with persistent merge-related slowdowns' },
    { id: 4, location: 'Lake Shore Drive', road: 'Lake Shore Drive', severity: 82, avgDelay: '28 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Scenic route with traffic signals creating stop-and-go conditions' },
    { id: 5, location: 'I-94 (Dan Ryan Expressway)', road: 'I-94 (Dan Ryan Expressway)', severity: 85, avgDelay: '32 min', peakTime: '6-9 AM, 4-7 PM', peakHours: '6-9 AM, 4-7 PM', description: 'High-volume south side corridor with chronic congestion issues' },
  ],
  'houston': [
    { id: 1, location: 'I-10 (Katy Freeway)', road: 'I-10 (Katy Freeway)', severity: 94, avgDelay: '40 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'One of the widest freeways in the world still plagued by severe congestion' },
    { id: 2, location: 'I-45 (Gulf Freeway)', road: 'I-45 (Gulf Freeway)', severity: 88, avgDelay: '35 min', peakTime: '7-10 AM, 4-7 PM', peakHours: '7-10 AM, 4-7 PM', description: 'Major south corridor with industrial and commuter traffic conflicts' },
    { id: 3, location: 'US-59 (Southwest Freeway)', road: 'US-59 (Southwest Freeway)', severity: 86, avgDelay: '32 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Rapid suburban growth has overwhelmed existing infrastructure' },
    { id: 4, location: 'I-610 (Loop)', road: 'I-610 (Loop)', severity: 83, avgDelay: '28 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Inner loop with complex interchange bottlenecks and weaving issues' },
    { id: 5, location: 'Beltway 8', road: 'Beltway 8', severity: 78, avgDelay: '25 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Outer loop experiencing increasing congestion as city expands' },
  ],
  'phoenix': [
    { id: 1, location: 'I-10 (Papago Freeway)', road: 'I-10 (Papago Freeway)', severity: 82, avgDelay: '28 min', peakTime: '7-9 AM, 4-6 PM', peakHours: '7-9 AM, 4-6 PM', description: 'Downtown corridor with lane reductions and heavy commercial traffic' },
    { id: 2, location: 'I-17 (Black Canyon Freeway)', road: 'I-17 (Black Canyon Freeway)', severity: 78, avgDelay: '24 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Northern suburbs commuter route with seasonal snowbird traffic' },
    { id: 3, location: 'Loop 101', road: 'Loop 101', severity: 74, avgDelay: '22 min', peakTime: '7-9 AM, 4-6 PM', peakHours: '7-9 AM, 4-6 PM', description: 'Circumferential route seeing increased development-driven congestion' },
    { id: 4, location: 'US-60 (Superstition Freeway)', road: 'US-60 (Superstition Freeway)', severity: 76, avgDelay: '23 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'East Valley connection with growing commuter demand' },
    { id: 5, location: 'Loop 202', road: 'Loop 202', severity: 71, avgDelay: '20 min', peakTime: '7-9 AM, 4-6 PM', peakHours: '7-9 AM, 4-6 PM', description: 'Southern arc with airport and commercial traffic creating delays' },
  ],
  'philadelphia': [
    { id: 1, location: 'I-76 (Schuylkill Expressway)', road: 'I-76 (Schuylkill Expressway)', severity: 90, avgDelay: '38 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Infamous "Surekill Expressway" with chronic congestion and poor design' },
    { id: 2, location: 'I-95', road: 'I-95', severity: 85, avgDelay: '32 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Major north-south artery with heavy truck traffic and aging infrastructure' },
    { id: 3, location: 'I-676 (Vine Street Expressway)', road: 'I-676 (Vine Street Expressway)', severity: 81, avgDelay: '28 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Urban tunnel section with limited capacity and no shoulders' },
    { id: 4, location: 'US-1 (Roosevelt Boulevard)', road: 'US-1 (Roosevelt Boulevard)', severity: 79, avgDelay: '26 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Dangerous high-speed boulevard with traffic light conflicts' },
    { id: 5, location: 'I-476 (Blue Route)', road: 'I-476 (Blue Route)', severity: 75, avgDelay: '24 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Suburban bypass experiencing increasing commuter volumes' },
  ],
  'san-antonio': [
    { id: 1, location: 'I-35', road: 'I-35', severity: 80, avgDelay: '26 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Major corridor undergoing long-term expansion with ongoing construction impacts' },
    { id: 2, location: 'I-10', road: 'I-10', severity: 76, avgDelay: '24 min', peakTime: '7-9 AM, 4-6 PM', peakHours: '7-9 AM, 4-6 PM', description: 'East-west route with commercial truck traffic creating slowdowns' },
    { id: 3, location: 'Loop 410', road: 'Loop 410', severity: 73, avgDelay: '22 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Inner loop with interchange bottlenecks at major crossings' },
    { id: 4, location: 'US-281', road: 'US-281', severity: 70, avgDelay: '20 min', peakTime: '7-9 AM, 4-6 PM', peakHours: '7-9 AM, 4-6 PM', description: 'North-south artery with rapid suburban development' },
    { id: 5, location: 'Loop 1604', road: 'Loop 1604', severity: 68, avgDelay: '18 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Outer loop seeing increased traffic as city expands outward' },
  ],
  'san-diego': [
    { id: 1, location: 'I-5', road: 'I-5', severity: 84, avgDelay: '30 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Coastal corridor with beach traffic compounding commuter congestion' },
    { id: 2, location: 'I-8', road: 'I-8', severity: 78, avgDelay: '26 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'East-west connection with steep grades and merge issues' },
    { id: 3, location: 'I-15', road: 'I-15', severity: 81, avgDelay: '28 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Inland route to Temecula with long-distance commuters' },
    { id: 4, location: 'SR-163', road: 'SR-163', severity: 75, avgDelay: '24 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Scenic connector through Balboa Park with capacity constraints' },
    { id: 5, location: 'I-805', road: 'I-805', severity: 77, avgDelay: '25 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Parallel route to I-5 with its own congestion challenges' },
  ],
  'dallas': [
    { id: 1, location: 'I-635 (LBJ Freeway)', road: 'I-635 (LBJ Freeway)', severity: 92, avgDelay: '40 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Complex managed lanes system still experiencing heavy congestion' },
    { id: 2, location: 'I-35E', road: 'I-35E', severity: 88, avgDelay: '35 min', peakTime: '7-10 AM, 4-7 PM', peakHours: '7-10 AM, 4-7 PM', description: 'Major north-south corridor with persistent bottlenecks and weaving' },
    { id: 3, location: 'US-75 (Central Expressway)', road: 'US-75 (Central Expressway)', severity: 86, avgDelay: '32 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'High-density corridor through affluent areas with heavy peak volumes' },
    { id: 4, location: 'I-30', road: 'I-30', severity: 83, avgDelay: '28 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Dallas-Fort Worth connector with bi-directional peak congestion' },
    { id: 5, location: 'I-20', road: 'I-20', severity: 79, avgDelay: '26 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Southern arc with growing suburban commuter traffic' },
  ],
  'austin': [
    { id: 1, location: 'I-35', road: 'I-35', severity: 91, avgDelay: '38 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Notorious bottleneck through downtown with multi-year expansion project' },
    { id: 2, location: 'Loop 1 (MoPac)', road: 'Loop 1 (MoPac)', severity: 85, avgDelay: '32 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Express lanes added but still facing severe congestion pressures' },
    { id: 3, location: 'US-183', road: 'US-183', severity: 80, avgDelay: '28 min', peakTime: '7-9 AM, 4-7 PM', peakHours: '7-9 AM, 4-7 PM', description: 'Rapid growth area with inadequate infrastructure capacity' },
    { id: 4, location: 'TX-71', road: 'TX-71', severity: 75, avgDelay: '24 min', peakTime: '7-9 AM, 5-7 PM', peakHours: '7-9 AM, 5-7 PM', description: 'Airport connector with increasing development traffic' },
    { id: 5, location: 'Loop 360', road: 'Loop 360', severity: 72, avgDelay: '22 min', peakTime: '7-9 AM, 4-6 PM', peakHours: '7-9 AM, 4-6 PM', description: 'Western corridor seeing explosive residential growth' },
  ],
};

export const improvements = {
  'nyc': [
    { id: 1, title: 'Implement adaptive traffic signal timing on FDR Drive', priority: 'Critical', impact: '-25% congestion', estimatedReduction: '25%', cost: '$8.5M', timeline: '6-9 months', description: 'AI-powered signal coordination to optimize traffic flow during peak hours' },
    { id: 2, title: 'Add HOV lanes to Brooklyn-Queens Expressway', priority: 'High', impact: '-18% congestion', estimatedReduction: '18%', cost: '$45M', timeline: '18-24 months', description: 'Dedicated high-occupancy vehicle lanes to encourage carpooling and reduce single-occupant vehicles' },
    { id: 3, title: 'Optimize merge lane configurations at Cross Bronx', priority: 'Critical', impact: '-15% congestion', estimatedReduction: '15%', cost: '$12M', timeline: '8-12 months', description: 'Redesign merge points to reduce bottlenecks and improve traffic flow' },
    { id: 4, title: 'Deploy real-time ramp metering system', priority: 'Medium', impact: '-12% congestion', estimatedReduction: '12%', cost: '$6.2M', timeline: '4-6 months', description: 'Intelligent ramp meters to control highway entry and maintain optimal flow' },
    { id: 5, title: 'Enhance public transit connections to reduce car dependency', priority: 'High', impact: '-20% congestion', estimatedReduction: '20%', cost: '$125M', timeline: '24-36 months', description: 'Expand subway and bus rapid transit to provide viable alternatives to driving' },
  ],
  'la': [
    { id: 1, title: 'Expand I-405 carpool lanes through Sepulveda Pass', priority: 'Critical', impact: '-30% congestion', estimatedReduction: '30%', cost: '$85M', timeline: '24-30 months', description: 'Additional HOV lanes through the most congested section of I-405' },
    { id: 2, title: 'Implement AI-driven signal coordination on I-10 corridor', priority: 'Critical', impact: '-22% congestion', estimatedReduction: '22%', cost: '$15M', timeline: '8-12 months', description: 'Machine learning traffic signal optimization across the Santa Monica Freeway corridor' },
    { id: 3, title: 'Add express toll lanes to US-101', priority: 'High', impact: '-16% congestion', estimatedReduction: '16%', cost: '$120M', timeline: '30-36 months', description: 'Dynamically-priced express lanes to provide congestion-free alternative' },
    { id: 4, title: 'Optimize on-ramp spacing and acceleration lanes', priority: 'Medium', impact: '-14% congestion', estimatedReduction: '14%', cost: '$25M', timeline: '12-15 months', description: 'Reconfigure ramp merge zones to reduce bottleneck formation' },
    { id: 5, title: 'Increase Metro service frequency during peak hours', priority: 'High', impact: '-18% congestion', estimatedReduction: '18%', cost: '$95M', timeline: '18-24 months', description: 'Add trains and expand service hours to reduce highway demand' },
  ],
  'chicago': [
    { id: 1, title: 'Redesign I-290 interchange configurations', priority: 'Critical', impact: '-28% congestion', estimatedReduction: '28%', cost: '$75M', timeline: '24-30 months', description: 'Complete reconstruction of major bottleneck interchanges on the Eisenhower' },
    { id: 2, title: 'Deploy variable speed limits on Kennedy Expressway', priority: 'High', impact: '-16% congestion', estimatedReduction: '16%', cost: '$12M', timeline: '6-9 months', description: 'Dynamic speed limit signs that adjust based on real-time traffic conditions' },
    { id: 3, title: 'Add reversible express lanes to I-55', priority: 'High', impact: '-20% congestion', estimatedReduction: '20%', cost: '$55M', timeline: '18-24 months', description: 'Directional lanes that switch based on commute patterns' },
    { id: 4, title: 'Improve incident response times with mobile units', priority: 'Medium', impact: '-10% congestion', estimatedReduction: '10%', cost: '$8M', timeline: '3-6 months', description: 'Deploy rapid response teams to clear accidents and breakdowns faster' },
    { id: 5, title: 'Expand CTA Red Line to reduce Loop congestion', priority: 'Critical', impact: '-24% congestion', estimatedReduction: '24%', cost: '$180M', timeline: '36-48 months', description: 'Extend rail service to underserved areas to reduce downtown traffic' },
  ],
  'houston': [
    { id: 1, title: 'Expand I-10 managed lanes throughout metro area', priority: 'Critical', impact: '-28% congestion', estimatedReduction: '28%', cost: '$250M', timeline: '36-42 months', description: 'Comprehensive managed lane network along the Katy Freeway corridor' },
    { id: 2, title: 'Implement synchronized traffic signals on major corridors', priority: 'High', impact: '-20% congestion', estimatedReduction: '20%', cost: '$18M', timeline: '10-12 months', description: 'Coordinate signals across major arterials to create green wave progression' },
    { id: 3, title: 'Add dedicated bus lanes on I-45', priority: 'Medium', impact: '-14% congestion', estimatedReduction: '14%', cost: '$40M', timeline: '15-18 months', description: 'Bus rapid transit lanes to encourage public transportation use' },
    { id: 4, title: 'Improve I-610 loop interchange efficiency', priority: 'High', impact: '-16% congestion', estimatedReduction: '16%', cost: '$65M', timeline: '20-24 months', description: 'Reconfigure complex interchanges to reduce weaving and merging conflicts' },
    { id: 5, title: 'Deploy smart ramp metering on all major freeways', priority: 'Medium', impact: '-18% congestion', estimatedReduction: '18%', cost: '$14M', timeline: '8-10 months', description: 'AI-controlled ramp signals to optimize highway entry flow' },
  ],
  'phoenix': [
    { id: 1, title: 'Add flex lanes to I-10 for peak hour management', priority: 'High', impact: '-22% congestion', estimatedReduction: '22%', cost: '$45M', timeline: '18-22 months', description: 'Convertible lanes that adjust direction based on traffic demand' },
    { id: 2, title: 'Expand light rail to Scottsdale and Tempe', priority: 'Critical', impact: '-24% congestion', estimatedReduction: '24%', cost: '$210M', timeline: '42-48 months', description: 'Major rail expansion to connect growing employment centers' },
    { id: 3, title: 'Optimize signal timing on Loop 101 access roads', priority: 'Medium', impact: '-12% congestion', estimatedReduction: '12%', cost: '$7M', timeline: '5-7 months', description: 'Fine-tune signal coordination on surface streets feeding the Loop' },
    { id: 4, title: 'Implement intelligent transportation system citywide', priority: 'High', impact: '-18% congestion', estimatedReduction: '18%', cost: '$35M', timeline: '15-20 months', description: 'Comprehensive ITS with traffic monitoring and adaptive control' },
    { id: 5, title: 'Add park-and-ride facilities near major interchanges', priority: 'Medium', impact: '-14% congestion', estimatedReduction: '14%', cost: '$22M', timeline: '12-16 months', description: 'Strategic parking facilities to encourage transit use and carpooling' },
  ],
  'philadelphia': [
    { id: 1, title: 'Redesign I-76 bottleneck near King of Prussia', priority: 'Critical', impact: '-26% congestion', estimatedReduction: '26%', cost: '$95M', timeline: '28-32 months', description: 'Major reconstruction to address the most notorious chokepoint on the Schuylkill' },
    { id: 2, title: 'Expand SEPTA regional rail service frequency', priority: 'High', impact: '-22% congestion', estimatedReduction: '22%', cost: '$85M', timeline: '20-24 months', description: 'Increase train frequency and expand coverage to reduce highway demand' },
    { id: 3, title: 'Add reversible lanes on I-676', priority: 'Medium', impact: '-15% congestion', estimatedReduction: '15%', cost: '$35M', timeline: '14-18 months', description: 'Directional capacity management through the Vine Street Expressway tunnel' },
    { id: 4, title: 'Implement adaptive signal control on Roosevelt Boulevard', priority: 'High', impact: '-17% congestion', estimatedReduction: '17%', cost: '$11M', timeline: '7-10 months', description: 'AI-powered signal timing to improve safety and flow on the Boulevard' },
    { id: 5, title: 'Improve I-95/I-476 interchange configuration', priority: 'Critical', impact: '-20% congestion', estimatedReduction: '20%', cost: '$68M', timeline: '22-26 months', description: 'Redesign complex interchange to reduce accidents and congestion' },
  ],
  'san-antonio': [
    { id: 1, title: 'Expand I-35 through downtown with managed lanes', priority: 'Critical', impact: '-25% congestion', estimatedReduction: '25%', cost: '$175M', timeline: '36-42 months', description: 'Major expansion project with express lanes through the urban core' },
    { id: 2, title: 'Implement smart traffic management on Loop 410', priority: 'High', impact: '-18% congestion', estimatedReduction: '18%', cost: '$16M', timeline: '9-12 months', description: 'Intelligent traffic system with adaptive ramp metering and incident detection' },
    { id: 3, title: 'Add express lanes to US-281', priority: 'Medium', impact: '-15% congestion', estimatedReduction: '15%', cost: '$55M', timeline: '20-24 months', description: 'Toll-managed express lanes for congestion relief' },
    { id: 4, title: 'Improve I-10/Loop 1604 interchange', priority: 'High', impact: '-14% congestion', estimatedReduction: '14%', cost: '$42M', timeline: '16-20 months', description: 'Reconfigure major interchange to improve traffic flow' },
    { id: 5, title: 'Deploy coordinated signal systems on major arterials', priority: 'Medium', impact: '-16% congestion', estimatedReduction: '16%', cost: '$13M', timeline: '8-11 months', description: 'Synchronized signals across key corridors for smooth progression' },
  ],
  'san-diego': [
    { id: 1, title: 'Add managed lanes to I-5 North County corridor', priority: 'Critical', impact: '-24% congestion', estimatedReduction: '24%', cost: '$140M', timeline: '30-36 months', description: 'Express lanes from downtown to Oceanside' },
    { id: 2, title: 'Extend trolley service to major employment centers', priority: 'High', impact: '-20% congestion', estimatedReduction: '20%', cost: '$165M', timeline: '38-44 months', description: 'Light rail expansion to reduce car dependency' },
    { id: 3, title: 'Implement ramp metering on I-8 and I-15', priority: 'Medium', impact: '-16% congestion', estimatedReduction: '16%', cost: '$9M', timeline: '6-8 months', description: 'Intelligent ramp signals to optimize freeway flow' },
    { id: 4, title: 'Optimize SR-163 merge lane configurations', priority: 'High', impact: '-14% congestion', estimatedReduction: '14%', cost: '$28M', timeline: '12-15 months', description: 'Improve merge zones to reduce bottlenecks' },
    { id: 5, title: 'Add intelligent traffic management on I-805', priority: 'Medium', impact: '-18% congestion', estimatedReduction: '18%', cost: '$19M', timeline: '10-13 months', description: 'Comprehensive ITS deployment with real-time monitoring' },
  ],
  'dallas': [
    { id: 1, title: 'Expand LBJ Freeway managed lanes system', priority: 'Critical', impact: '-28% congestion', estimatedReduction: '28%', cost: '$195M', timeline: '32-38 months', description: 'Extend the successful managed lanes network throughout I-635' },
    { id: 2, title: 'Implement AI traffic control on Central Expressway', priority: 'Critical', impact: '-24% congestion', estimatedReduction: '24%', cost: '$21M', timeline: '11-14 months', description: 'Machine learning system to optimize traffic flow on US-75' },
    { id: 3, title: 'Add reversible lanes to I-30 corridor', priority: 'High', impact: '-17% congestion', estimatedReduction: '17%', cost: '$62M', timeline: '21-26 months', description: 'Directional lanes between Dallas and Fort Worth' },
    { id: 4, title: 'Expand DART light rail to Fort Worth', priority: 'High', impact: '-22% congestion', estimatedReduction: '22%', cost: '$280M', timeline: '48-54 months', description: 'Major rail connection between the two cities' },
    { id: 5, title: 'Optimize I-35E/I-30 interchange', priority: 'Medium', impact: '-15% congestion', estimatedReduction: '15%', cost: '$48M', timeline: '17-21 months', description: 'Reconfigure downtown interchange to reduce bottlenecks' },
  ],
  'austin': [
    { id: 1, title: 'Double-deck I-35 through downtown Austin', priority: 'Critical', impact: '-32% congestion', estimatedReduction: '32%', cost: '$7.5B', timeline: '84-96 months', description: 'Massive infrastructure project to add capacity and bury portions underground' },
    { id: 2, title: 'Add dedicated transit lanes on MoPac', priority: 'Critical', impact: '-26% congestion', estimatedReduction: '26%', cost: '$185M', timeline: '28-34 months', description: 'Bus rapid transit lanes with station infrastructure' },
    { id: 3, title: 'Implement adaptive traffic control on US-183', priority: 'High', impact: '-18% congestion', estimatedReduction: '18%', cost: '$14M', timeline: '9-12 months', description: 'AI-powered signal coordination along the corridor' },
    { id: 4, title: 'Expand CapMetro rail network', priority: 'High', impact: '-24% congestion', estimatedReduction: '24%', cost: '$220M', timeline: '40-46 months', description: 'Light rail expansion to rapidly growing areas' },
    { id: 5, title: 'Add express lanes to TX-71', priority: 'Medium', impact: '-16% congestion', estimatedReduction: '16%', cost: '$75M', timeline: '22-27 months', description: 'Managed lanes to airport and southeast areas' },
  ],
};

export const publicSentiment = {
  'nyc': [
    { id: 1, category: 'Rush Hour Delays', percentage: 89, sentiment: 'negative', trend: '↑ Increasing 12% vs last quarter' },
    { id: 2, category: 'Road Conditions', percentage: 76, sentiment: 'negative', trend: '↑ Worsening due to winter damage' },
    { id: 3, category: 'Public Transit', percentage: 64, sentiment: 'neutral', trend: '→ Stable, needs expansion' },
    { id: 4, category: 'Construction Impact', percentage: 82, sentiment: 'negative', trend: '↑ Multiple major projects ongoing' },
    { id: 5, category: 'Overall Satisfaction', percentage: 28, sentiment: 'negative', trend: '↓ Down 8% from last year' },
  ],
  'la': [
    { id: 1, category: 'Freeway Congestion', percentage: 94, sentiment: 'negative', trend: '↑ Worst in nation, increasing' },
    { id: 2, category: 'Public Transit', percentage: 72, sentiment: 'negative', trend: '→ Improving but insufficient' },
    { id: 3, category: 'Construction Zones', percentage: 85, sentiment: 'negative', trend: '↑ Multiple major projects active' },
    { id: 4, category: 'Toll Road Value', percentage: 68, sentiment: 'neutral', trend: '→ Mixed opinions on effectiveness' },
    { id: 5, category: 'Overall Satisfaction', percentage: 22, sentiment: 'negative', trend: '↓ Among lowest nationwide' },
  ],
  'chicago': [
    { id: 1, category: 'Winter Traffic', percentage: 91, sentiment: 'negative', trend: '↑ Severe weather impacts growing' },
    { id: 2, category: 'Expressway Quality', percentage: 87, sentiment: 'negative', trend: '→ Chronic congestion persists' },
    { id: 3, category: 'Construction Impact', percentage: 79, sentiment: 'negative', trend: '↑ Summer work season active' },
    { id: 4, category: 'Parking Availability', percentage: 74, sentiment: 'neutral', trend: '→ Consistently challenging' },
    { id: 5, category: 'Overall Satisfaction', percentage: 32, sentiment: 'neutral', trend: '→ Stable but low' },
  ],
  'houston': [
    { id: 1, category: 'Highway Congestion', percentage: 90, sentiment: 'negative', trend: '↑ Growth outpacing infrastructure' },
    { id: 2, category: 'Weather Impact', percentage: 83, sentiment: 'negative', trend: '↑ Flooding events increasing' },
    { id: 3, category: 'Transit Options', percentage: 77, sentiment: 'negative', trend: '→ Limited public transit' },
    { id: 4, category: 'Driver Behavior', percentage: 71, sentiment: 'negative', trend: '↑ Aggressive driving common' },
    { id: 5, category: 'Overall Satisfaction', percentage: 29, sentiment: 'negative', trend: '↓ Declining satisfaction' },
  ],
  'phoenix': [
    { id: 1, category: 'Heat Safety', percentage: 81, sentiment: 'negative', trend: '↑ AC failures in traffic dangerous' },
    { id: 2, category: 'Seasonal Traffic', percentage: 73, sentiment: 'neutral', trend: '→ Snowbird impact predictable' },
    { id: 3, category: 'Transit Expansion', percentage: 68, sentiment: 'neutral', trend: '↑ Light rail growing slowly' },
    { id: 4, category: 'Construction Delays', percentage: 65, sentiment: 'neutral', trend: '→ Ongoing development' },
    { id: 5, category: 'Overall Satisfaction', percentage: 42, sentiment: 'neutral', trend: '→ Moderate compared to peers' },
  ],
  'philadelphia': [
    { id: 1, category: 'Schuylkill Traffic', percentage: 92, sentiment: 'negative', trend: '↑ Infamous congestion worsening' },
    { id: 2, category: 'Road Quality', percentage: 86, sentiment: 'negative', trend: '↑ Pothole crisis ongoing' },
    { id: 3, category: 'Infrastructure Age', percentage: 79, sentiment: 'negative', trend: '→ Bridge closures frequent' },
    { id: 4, category: 'Driver Safety', percentage: 75, sentiment: 'negative', trend: '↑ Accident rates concerning' },
    { id: 5, category: 'Overall Satisfaction', percentage: 26, sentiment: 'negative', trend: '↓ Low and declining' },
  ],
  'san-antonio': [
    { id: 1, category: 'I-35 Project', percentage: 84, sentiment: 'negative', trend: '→ Long-term construction fatigue' },
    { id: 2, category: 'Interchange Design', percentage: 72, sentiment: 'neutral', trend: '→ Complex merges problematic' },
    { id: 3, category: 'Transit Options', percentage: 69, sentiment: 'neutral', trend: '↑ Slowly improving' },
    { id: 4, category: 'Signal Timing', percentage: 66, sentiment: 'neutral', trend: '→ Needs optimization' },
    { id: 5, category: 'Overall Satisfaction', percentage: 38, sentiment: 'neutral', trend: '→ Moderate satisfaction' },
  ],
  'san-diego': [
    { id: 1, category: 'I-5 Commute', percentage: 88, sentiment: 'negative', trend: '↑ North County traffic worsening' },
    { id: 2, category: 'Beach Traffic', percentage: 82, sentiment: 'negative', trend: '→ Weekend gridlock expected' },
    { id: 3, category: 'Trolley Service', percentage: 58, sentiment: 'positive', trend: '↑ Expansion helping' },
    { id: 4, category: 'Interchange Capacity', percentage: 74, sentiment: 'neutral', trend: '→ Bottlenecks persist' },
    { id: 5, category: 'Overall Satisfaction', percentage: 44, sentiment: 'neutral', trend: '→ Mixed but stable' },
  ],
  'dallas': [
    { id: 1, category: 'Toll Road Costs', percentage: 87, sentiment: 'negative', trend: '↑ Expense concerns growing' },
    { id: 2, category: 'Central Expressway', percentage: 85, sentiment: 'negative', trend: '→ Persistent congestion' },
    { id: 3, category: 'Urban Sprawl', percentage: 80, sentiment: 'negative', trend: '↑ Long commutes increasing' },
    { id: 4, category: 'Construction Impact', percentage: 76, sentiment: 'negative', trend: '→ Ongoing work zones' },
    { id: 5, category: 'Overall Satisfaction', percentage: 31, sentiment: 'negative', trend: '↓ Below average satisfaction' },
  ],
  'austin': [
    { id: 1, category: 'I-35 Corridor', percentage: 96, sentiment: 'negative', trend: '↑ Nation\'s worst urban highway' },
    { id: 2, category: 'Toll Lane Costs', percentage: 89, sentiment: 'negative', trend: '↑ Pricing frustration high' },
    { id: 3, category: 'Growth Impact', percentage: 93, sentiment: 'negative', trend: '↑ Infrastructure can\'t keep pace' },
    { id: 4, category: 'Transit Inadequacy', percentage: 86, sentiment: 'negative', trend: '→ Car dependency forced' },
    { id: 5, category: 'Overall Satisfaction', percentage: 18, sentiment: 'negative', trend: '↓ Lowest among major cities' },
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