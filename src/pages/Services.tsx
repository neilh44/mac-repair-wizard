import Header from '@/components/Header';
import { 
  Laptop, 
  HardDrive, 
  Shield, 
  Users, 
  Wrench, 
  Clock,
  CheckCircle,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ServicesPage = () => {
  const services = [
    {
      icon: Laptop,
      title: 'Mac Repair & Diagnostics',
      description: 'Complete hardware and software repair for all Mac models including MacBook Air, MacBook Pro, iMac, Mac Mini, and Mac Pro.',
      features: [
        'Logic board repair and replacement',
        'Screen and display replacement',
        'Keyboard and trackpad repair',
        'Battery replacement service',
        'Port and connector repair',
        'Liquid damage restoration'
      ],
      pricing: 'Starting at $89',
      emergency: true,
      turnaround: '2-3 days'
    },
    {
      icon: HardDrive,
      title: 'Data Recovery & Transfer',
      description: 'Professional data recovery services with industry-leading success rates for all types of storage failures.',
      features: [
        'Hard drive data recovery',
        'SSD data recovery',
        'RAID array recovery',
        'Data migration services',
        'Backup solution setup',
        'Cloud storage configuration'
      ],
      pricing: 'Starting at $149',
      emergency: true,
      turnaround: '1-2 days'
    },
    {
      icon: Shield,
      title: 'Virus Removal & Security',
      description: 'Complete malware removal and security optimization to protect your Mac from current and future threats.',
      features: [
        'Malware and virus removal',
        'Adware and spyware cleanup',
        'System security audits',
        'Antivirus software installation',
        'Firewall configuration',
        'Privacy protection setup'
      ],
      pricing: 'Starting at $99',
      emergency: false,
      turnaround: 'Same day'
    },
    {
      icon: Users,
      title: 'Business IT Support',
      description: 'Comprehensive Mac IT support for businesses of all sizes. Network setup, maintenance, and ongoing support.',
      features: [
        'Network setup and configuration',
        'Remote support services',
        'System administration',
        'IT consulting and planning',
        'Employee training',
        'Backup and disaster recovery'
      ],
      pricing: 'Custom quotes',
      emergency: false,
      turnaround: 'Varies'
    },
    {
      icon: Wrench,
      title: 'Preventive Maintenance',
      description: 'Regular maintenance services to keep your Mac running at peak performance and prevent future issues.',
      features: [
        'System cleaning and optimization',
        'Software updates and patches',
        'Performance diagnostics',
        'Hardware health checks',
        'Memory and storage optimization',
        'Thermal management'
      ],
      pricing: 'Starting at $69',
      emergency: false,
      turnaround: '2-4 hours'
    },
    {
      icon: Clock,
      title: 'Emergency Services',
      description: 'Same-day emergency repair services for critical Mac issues. Available for urgent business and personal needs.',
      features: [
        'Same-day service guarantee',
        '24/7 emergency hotline',
        'On-site repair available',
        'Priority queue placement',
        'Temporary loaner devices',
        'Express diagnostic service'
      ],
      pricing: 'Rush fee applies',
      emergency: true,
      turnaround: 'Same day'
    }
  ];

  const guarantees = [
    'No Fix, No Fee Guarantee',
    'All Parts Warranty Included',
    'Free Diagnostic Service',
    'Certified Mac Technicians',
    'Same Day Service Available',
    'Secure Data Handling'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4 bg-tech-green text-white border-0">
            Complete Mac Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Mac Repair Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            From quick fixes to complex repairs, we provide comprehensive Mac services 
            with transparent pricing and guaranteed satisfaction.
          </p>
          <Button size="lg" variant="secondary" className="bg-tech-green hover:bg-tech-green/90 text-white border-0">
            <Phone className="h-5 w-5 mr-2" />
            Call for Free Diagnosis
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-medium transition-all duration-300 bg-gradient-card border-0"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      {service.emergency && (
                        <Badge variant="destructive" className="bg-emergency-red">
                          Emergency
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-tech-green">{service.pricing}</span>
                      <span className="text-muted-foreground">⏱️ {service.turnaround}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-tech-green mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Service Guarantees</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index}
                className="flex items-center justify-center bg-background rounded-lg p-6 shadow-soft"
              >
                <CheckCircle className="h-6 w-6 text-tech-green mr-3" />
                <span className="font-medium text-primary">{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your Mac?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get started with a free diagnosis and transparent pricing on all repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-tech-green hover:bg-tech-green/90 text-white border-0">
              Schedule Service
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="h-5 w-5 mr-2" />
              (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;