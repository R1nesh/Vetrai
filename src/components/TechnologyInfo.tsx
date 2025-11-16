import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Radio, Zap, Shield, Brain, Camera, Network, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function TechnologyInfo() {
  const technologies = [
    {
      icon: Radio,
      title: '5G Ultra Wideband',
      description: 'Verizon\'s 5G network enables real-time data transmission from thousands of traffic cameras with minimal latency.',
      metrics: ['<10ms latency', 'Up to 4Gbps', '99.9% uptime'],
      color: '#EE0000'
    },
    {
      icon: Network,
      title: 'Mobile Edge Computing',
      description: 'Process traffic data at the network edge, reducing round-trip time and enabling instant AI analysis.',
      metrics: ['Edge processing', '60% faster', 'Local compute'],
      color: '#f97316'
    },
    {
      icon: Camera,
      title: 'Smart Camera Network',
      description: 'Thousands of AI-enabled cameras capture traffic patterns, feeding data directly to edge servers via 5G.',
      metrics: ['10,000+ cameras', 'HD video', '24/7 monitoring'],
      color: '#3b82f6'
    },
    {
      icon: Brain,
      title: 'AI-Powered Analytics',
      description: 'Machine learning models process camera feeds in real-time to predict congestion and optimize traffic flow.',
      metrics: ['Real-time ML', '95% accuracy', 'Predictive AI'],
      color: '#8b5cf6'
    }
  ];

  const ethicalPractices = [
    {
      icon: Shield,
      title: 'Privacy Protection',
      points: [
        'All video data is anonymized at capture',
        'No facial recognition or personal identification',
        'Automatic data deletion after 72 hours',
        'GDPR and CCPA compliant'
      ]
    },
    {
      icon: CheckCircle2,
      title: 'Ethical AI Framework',
      points: [
        'Bias detection and mitigation in all models',
        'Transparent decision-making processes',
        'Regular third-party audits',
        'Human oversight of automated decisions'
      ]
    },
    {
      icon: Clock,
      title: 'Data Governance',
      points: [
        'Strict data retention policies',
        'Encrypted data transmission (end-to-end)',
        'Role-based access control',
        'Regular security assessments'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Technology Overview */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#EE0000]" />
            <CardTitle className="text-white">Technology Stack</CardTitle>
          </div>
          <CardDescription>
            Powered by Verizon's cutting-edge 5G and edge computing infrastructure
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-950 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="p-2 rounded-lg" 
                    style={{ backgroundColor: `${tech.color}20` }}
                  >
                    <tech.icon className="w-5 h-5" style={{ color: tech.color }} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1">{tech.title}</h4>
                    <p className="text-sm text-gray-400 mb-3">{tech.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.metrics.map((metric) => (
                        <Badge 
                          key={metric} 
                          variant="outline" 
                          className="text-xs border-gray-700 text-gray-300"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ethical AI Practices */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#EE0000]" />
            <CardTitle className="text-white">Ethical AI & Privacy</CardTitle>
          </div>
          <CardDescription>
            Our commitment to responsible AI and data protection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ethicalPractices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-950 border border-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <practice.icon className="w-5 h-5 text-[#EE0000]" />
                  <h4 className="font-semibold text-white">{practice.title}</h4>
                </div>
                <ul className="space-y-2">
                  {practice.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-[#EE0000] mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Architecture Diagram */}
      <Card className="bg-gradient-to-br from-gray-900 to-gray-950 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">System Architecture</CardTitle>
          <CardDescription>How data flows through the Vetrai platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 text-center"
              >
                <div className="w-16 h-16 bg-[#EE0000] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">1. Data Capture</h4>
                <p className="text-sm text-gray-400">Traffic cameras capture HD video via 5G network</p>
              </motion.div>

              <div className="hidden md:block text-gray-600">→</div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="flex-1 text-center"
              >
                <div className="w-16 h-16 bg-[#f97316] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">2. Edge Processing</h4>
                <p className="text-sm text-gray-400">MEC nodes process data locally with &lt;10ms latency</p>
              </motion.div>

              <div className="hidden md:block text-gray-600">→</div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 text-center"
              >
                <div className="w-16 h-16 bg-[#8b5cf6] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">3. AI Analysis</h4>
                <p className="text-sm text-gray-400">ML models predict congestion and optimize flow</p>
              </motion.div>

              <div className="hidden md:block text-gray-600">→</div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="flex-1 text-center"
              >
                <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-white mb-2">4. Real-time Insights</h4>
                <p className="text-sm text-gray-400">Instant traffic intelligence delivered to Vetrai</p>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}