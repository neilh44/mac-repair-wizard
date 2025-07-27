import { Link } from 'react-router-dom';
import { 
  Laptop, 
  HardDrive, 
  Shield, 
  Users, 
  Wrench, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: 'Mac Repair & Diagnostics',
      description: 'Complete hardware and software repair for all Mac models. From screen replacements to logic board repairs.',
      features: ['Hardware Diagnostics', 'Screen Replacement', 'Keyboard Repair', 'Logic Board Repair'],
      emergency: true
    },
    {
      icon: HardDrive,
      title: 'Data Recovery & Transfer',
      description: 'Professional data recovery services with high success rates. Secure data transfer and backup solutions.',
      features: ['Hard Drive Recovery', 'SSD Data Recovery', 'Data Migration', 'Backup Solutions'],
      emergency: true
    },
    {
      icon: Shield,
      title: 'Virus Removal & Security',
      description: 'Complete malware removal and security optimization. Protect your Mac from future threats.',
      features: ['Malware Removal', 'Security Audits', 'System Optimization', 'Antivirus Setup'],
      emergency: false
    },
    {
      icon: Users,
      title: 'Business IT Support',
      description: 'Comprehensive Mac IT support for businesses. Network setup, maintenance, and ongoing support.',
      features: ['Network Setup', 'Remote Support', 'System Maintenance', 'IT Consulting'],
      emergency: false
    },
    {
      icon: Wrench,
      title: 'Preventive Maintenance',
      description: 'Regular maintenance to keep your Mac running smoothly. Prevent issues before they occur.',
      features: ['System Cleaning', 'Software Updates', 'Performance Optimization', 'Health Checks'],
      emergency: false
    },
    {
      icon: Clock,
      title: 'Emergency Services',
      description: 'Same-day emergency repair services for critical Mac issues. Available for urgent business needs.',
      features: ['Same Day Service', '24/7 Emergency', 'On-Site Repair', 'Priority Support'],
      emergency: true
    }
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Complete Mac Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From quick fixes to complex repairs, we provide comprehensive Mac services 
            with transparent pricing and guaranteed satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group glass-card hover-lift hover-glow border-0 bg-gradient-card backdrop-blur-premium animate-slide-up overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-tech-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating orb effect */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-accent/20 to-tech-green/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-float" />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-tech-green/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <IconComponent className="h-7 w-7 text-accent group-hover:text-tech-green transition-colors duration-300" />
                    </div>
                    {service.emergency && (
                      <span className="bg-emergency-red text-white text-xs px-3 py-1.5 rounded-full font-medium animate-pulse-glow shadow-lg">
                        Emergency Available
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground group-hover:text-foreground/70 transition-all duration-300"
                        style={{ 
                          animationDelay: `${(index * 0.1) + (featureIndex * 0.05)}s`,
                          animation: 'fadeIn 0.6s ease-out both'
                        }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-tech-green to-accent rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full glass-button border-accent/20 hover:border-accent/40 hover:bg-accent/10 group-hover:scale-105 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10 group-hover:text-accent transition-colors duration-300 flex items-center">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-tech-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground animate-scale-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Immediate Mac Repair?
          </h3>
          <p className="text-lg mb-6 text-primary-foreground/90">
            Get a free diagnosis and same-day service for urgent repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="bg-tech-green hover:bg-tech-green/90 text-white border-0">
              <Link to="/contact">Schedule Repair</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:(555) 123-4567">Call Emergency Line</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;