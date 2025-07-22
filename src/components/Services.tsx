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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    {service.emergency && (
                      <span className="bg-emergency-red text-white text-xs px-2 py-1 rounded-full font-medium">
                        Emergency Available
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-tech-green rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
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