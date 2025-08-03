import { Link } from 'react-router-dom';
import { 
  Laptop, 
  HardDrive, 
  Shield, 
  Users, 
  Wrench, 
  Clock,
  ArrowRight,
  CheckCircle,
  Monitor,
  Wifi,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: 'MacBook Repair',
      description: 'Professional MacBook repair with certified Apple parts and industry-leading warranty coverage.',
      features: ['Screen Replacement', 'Keyboard Repair', 'Battery Service', 'Logic Board Repair'],
      pricing: 'From $89',
      urgent: false
    },
    {
      icon: Monitor,
      title: 'iMac & Mac Pro Service',
      description: 'Complete desktop Mac repair with same-day service available for critical business systems.',
      features: ['Display Repair', 'Hard Drive Upgrade', 'RAM Installation', 'Performance Tuning'],
      pricing: 'From $129',
      urgent: true
    },
    {
      icon: HardDrive,
      title: 'Emergency Data Recovery',
      description: 'Critical data recovery with 95% success rate. Emergency service available 24/7 for business clients.',
      features: ['SSD Recovery', 'HDD Recovery', 'RAID Recovery', 'File Restoration'],
      pricing: 'From $199',
      urgent: true
    },
    {
      icon: Wifi,
      title: 'Network Setup & Security',
      description: 'Enterprise-grade network setup with advanced security protocols and performance optimization.',
      features: ['Wi-Fi Setup', 'Network Security', 'Router Configuration', 'Speed Optimization'],
      pricing: 'From $149',
      urgent: false
    },
    {
      icon: Shield,
      title: 'Virus & Security Cleanup',
      description: 'Complete system security audit with advanced malware removal and protection implementation.',
      features: ['Malware Removal', 'System Cleanup', 'Security Audit', 'Protection Setup'],
      pricing: 'From $99',
      urgent: false
    },
    {
      icon: Smartphone,
      title: 'iPhone & iPad Repair',
      description: 'Authorized mobile device repair with genuine Apple parts and comprehensive warranty coverage.',
      features: ['Screen Repair', 'Battery Replacement', 'Water Damage', 'Port Cleaning'],
      pricing: 'From $79',
      urgent: false
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-apple-silver">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Apple-Style Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <Badge variant="outline" className="mb-6 border-apple-blue text-apple-blue">
            Professional Mac Services
          </Badge>
          <h2 className="text-section-title mb-8 text-apple-gray">
            Expert Mac Repair & IT Services
          </h2>
          <p className="text-body text-muted-foreground max-w-4xl mx-auto">
            From emergency repairs to complete system overhauls, our Apple-certified technicians provide 
            comprehensive Mac repair and IT support services with industry-leading 90-day warranties.
          </p>
        </div>

        {/* Apple-Style Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-strong hover-lift hover-glow group cursor-pointer animate-scale-in border border-white/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon with Apple-style treatment */}
              <div className="mb-8">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-apple-blue to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-medium">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  {service.urgent && (
                    <Badge className="absolute -top-2 -right-2 bg-apple-orange text-white text-xs">
                      Emergency
                    </Badge>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-apple-gray group-hover:text-apple-blue transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-body">
                  {service.description}
                </p>
              </div>

              {/* Features List with Apple-style checkmarks */}
              <div className="mb-8">
                <h4 className="text-sm font-medium text-apple-gray mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-apple-blue mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & CTA with Apple-style design */}
              <div className="mt-auto pt-6 border-t border-muted">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-apple-blue">{service.pricing}</span>
                  <Badge variant="secondary" className="text-xs bg-apple-silver text-apple-gray">
                    {service.urgent ? 'Same Day' : '24-48 Hours'}
                  </Badge>
                </div>
                <Button className="w-full bg-apple-blue hover:bg-apple-blue/90 text-white rounded-xl text-cta group-hover:shadow-glow transition-all duration-300">
                  Get Free Quote
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Apple-Style CTA Section */}
        <div className="text-center mt-20 animate-fade-in">
          <div className="bg-gradient-hero text-white max-w-5xl mx-auto rounded-3xl p-12 shadow-strong">
            <h3 className="text-3xl font-bold mb-6">Need Emergency Mac Repair?</h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Critical Mac issue affecting your work or business? We offer same-day emergency repair services 
              with certified Apple technicians and priority scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-apple-gray hover:bg-apple-silver text-cta rounded-xl px-8 py-4" asChild>
                <Link to="/contact">Schedule Emergency Repair</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-cta rounded-xl px-8 py-4" asChild>
                <a href="tel:(555) 123-4567">Call Emergency Line</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;