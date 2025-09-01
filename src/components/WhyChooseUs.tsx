import { Shield, Clock, Award, Users, CheckCircle, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Certified Technicians",
      description: "Apple-certified professionals with extensive MacBook repair experience"
    },
    {
      icon: Clock,
      title: "Quick Turnaround",
      description: "Most repairs completed within 24-48 hours, emergency same-day service available"
    },
    {
      icon: Award,
      title: "90-Day Warranty",
      description: "All repairs backed by our comprehensive 90-day warranty guarantee"
    },
    {
      icon: Users,
      title: "Trusted by 1000+",
      description: "Over 1,000 satisfied customers trust us with their MacBook repairs"
    },
    {
      icon: CheckCircle,
      title: "Quality Parts",
      description: "We use only genuine Apple parts and high-quality compatible components"
    },
    {
      icon: Star,
      title: "5-Star Service",
      description: "Consistently rated 5 stars for professional service and customer satisfaction"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Choose Dr.Mac?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over 38 years of Apple experience, we're the trusted choice for MacBook repairs
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-hero rounded-2xl p-8 lg:p-12 text-primary-foreground">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Get Your MacBook Fixed?
            </h3>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Join thousands of satisfied customers who trust Dr.Mac with their Apple devices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Get Free Diagnosis
              </a>
              <a 
                href="tel:530-386-2616"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white border border-white/20 font-medium rounded-lg hover:bg-white/20 transition-colors"
              >
                Call Now: 530-386-2616
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;