import Header from '@/components/Header';
import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  const stats = [
    { icon: Award, value: '20+', label: 'Years Experience' },
    { icon: Users, value: '5000+', label: 'Macs Repaired' },
    { icon: Clock, value: '< 24hrs', label: 'Average Turnaround' },
    { icon: Shield, value: '99.8%', label: 'Success Rate' }
  ];

  const certifications = [
    'Apple Certified Mac Technician (ACMT)',
    'CompTIA A+ Certified',
    'Data Recovery Specialist Certification',
    'Business IT Support Certified',
    'Cybersecurity Fundamentals'
  ];

  const values = [
    {
      title: 'Transparency',
      description: 'No hidden fees, clear pricing, and honest assessments of your Mac\'s condition.'
    },
    {
      title: 'Expertise',
      description: 'Certified technicians with decades of combined Mac repair experience.'
    },
    {
      title: 'Speed',
      description: 'Fast turnaround times without compromising on quality or attention to detail.'
    },
    {
      title: 'Trust',
      description: 'Secure handling of your data and devices with complete confidentiality.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Small Business Owner',
      content: 'Dr.Mac saved my business when my MacBook died during a crucial presentation week. They had it fixed the same day!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Graphic Designer',
      content: 'I thought my iMac was beyond repair after a liquid spill. Dr.Mac not only fixed it but recovered all my design files.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Marketing Manager',
      content: 'Professional, fast, and honest. They explained everything clearly and the pricing was very reasonable.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 bg-tech-green text-white border-0">
              About Dr.Mac
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mac Experts You Can Trust
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              For over two decades, we've been the go-to Mac repair specialists, 
              providing reliable, professional service to individuals and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center bg-gradient-card border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Dr.Mac was founded in 2003 with a simple mission: provide honest, expert Mac repair 
                  services that customers can trust. What started as a small repair shop has grown into 
                  the region's most trusted Mac service center.
                </p>
                <p>
                  Our founder, a former Apple technician, saw the need for specialized Mac repair services 
                  that went beyond the typical computer repair shop. We invested in proper training, 
                  genuine parts, and the right tools to service Macs properly.
                </p>
                <p>
                  Today, we serve thousands of satisfied customers, from individual Mac users to large 
                  businesses running entirely on Mac systems. Our commitment to quality and customer 
                  service remains unchanged.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Why Choose Dr.Mac?</h3>
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-tech-green mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Certified & Qualified
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our technicians maintain the highest industry certifications to ensure 
              your Mac receives expert care.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-tech-green mx-auto mb-3" />
                  <p className="font-medium text-primary">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from real customers who trust Dr.Mac.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-medium">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the Dr.Mac Difference
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join thousands of satisfied customers who trust us with their Mac repairs.
          </p>
          <Button size="lg" variant="secondary" className="bg-tech-green hover:bg-tech-green/90 text-white border-0">
            Get Your Free Diagnosis
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;