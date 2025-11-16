# Vetrai - Traffic Intelligence Platform

A full-featured traffic intelligence web application powered by Verizon's technology stack, featuring real-time traffic monitoring, AI-powered analysis, and comprehensive data visualization.

## Features

- **Real-Time Traffic Monitoring**: Live traffic maps with TomTom integration for NYC and Dallas
- **AI-Powered Analysis**: Comprehensive traffic predictions and intervention recommendations
- **Annual Data Reports**: Historical traffic trends with interactive visualizations
- **Multi-City Support**: Switch between NYC, Dallas, Los Angeles, and Chicago
- **5G & MEC Integration**: Leveraging Verizon's 5G network and Mobile Edge Computing for low-latency processing
- **Responsive Design**: Fully responsive interface optimized for desktop and mobile

## Technology Stack

- **React** with TypeScript
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Motion/Framer Motion** for animations
- **TomTom Traffic API** for real-time traffic data
- **Verizon Design System** (Red #EE0000 and Black color palette)

## Local Development

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/Vetrai.git
   cd Vetrai
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and navigate to `http://localhost:5173`

## Configuration

### TomTom API Key

To enable real-time traffic maps:

1. Get a free API key from [TomTom Developer Portal](https://developer.tomtom.com/user/register)
2. Click the Settings icon in the top right corner of the application
3. Enter your API key in the "TomTom Maps API Key" field
4. Click "Save Settings"

The API key is stored locally in your browser and never sent to any server.

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to Main Branch**:
   \`\`\`bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   \`\`\`

3. **Automatic Deployment**:
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at: `https://yourusername.github.io/Vetrai/`

### Manual Deployment

If you prefer manual deployment:

\`\`\`bash
# Build the project
npm run build

# Deploy to GitHub Pages using gh-pages (install if needed)
npm install -g gh-pages
gh-pages -d dist
\`\`\`

## Project Structure

\`\`\`
Vetrai/
├── components/           # React components
│   ├── ui/              # Shadcn UI components
│   ├── HomeTab.tsx      # Home dashboard
│   ├── LiveDataTab.tsx  # Real-time traffic view
│   ├── AnnualDataReportTab.tsx  # Historical data
│   └── AIAnalysisTab.tsx        # AI insights
├── lib/                 # Utilities and data
│   ├── cityContext.tsx  # City selection context
│   ├── mockData.ts      # Mock data for demos
│   └── roadData.ts      # Road network data
├── styles/              # Global styles
└── App.tsx              # Main application component
\`\`\`

## Features Overview

### Home Tab
- City selection and overview
- Traffic hotspots identification
- AI-powered recommendations
- Public sentiment analysis

### Live Data Tab
- Real-time traffic map with vehicle animations
- Live statistics (speed, incidents, congestion)
- 72-hour traffic projections
- TomTom or fallback map integration

### Annual Data Report Tab
- Interactive traffic heatmaps
- Monthly trend analysis
- Incident tracking
- Camera location mapping

### AI Analysis Tab
- Predictive traffic modeling
- Intervention recommendations
- Comprehensive metrics and insights
- Ethical AI practices information

## Built With Verizon Technology

This application showcases how Verizon's 5G network and Mobile Edge Computing (MEC) can be leveraged for:

- **Ultra-Low Latency**: Real-time traffic processing with <10ms latency
- **Edge AI**: On-device processing for faster insights
- **Network Slicing**: Dedicated bandwidth for critical traffic data
- **IoT Integration**: Seamless connection with traffic cameras and sensors

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Powered By

- Verizon 5G Network
- Verizon Mobile Edge Computing
- TomTom Traffic API

---

**Note**: This is a demonstration application. All traffic data is simulated for demonstration purposes. For production use, integrate with real traffic data sources and APIs.
