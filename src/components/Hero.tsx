import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-mac-repair.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            {/* Trust Badge */}
            <Badge variant="secondary" className="mb-6 bg-tech-green text-white border-0">
              <Award className="h-4 w-4 mr-2" />
              20+ Years Mac Expertise
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Mac Experts You Can
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Trust
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Professional Mac repair, data recovery, and IT support. 
              Same-day service available with our No Fix, No Fee guarantee.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Certified Mac Technicians',
                'Same Day Service Available',
                'No Fix, No Fee Guarantee',
                'Data Recovery Specialists'
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center text-primary-foreground/90"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-tech-green mr-3 flex-shrink-0" />
                  <span className="text-sm md:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="secondary" asChild className="bg-tech-green hover:bg-tech-green/90 text-white border-0">
                <Link to="/contact">Get Free Diagnosis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="tel:(555) 123-4567" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (555) 123-4567
                </a>
              </Button>
            </div>

            {/* Emergency Service Notice */}
            <div className="flex items-center text-emergency-red bg-background/10 rounded-lg p-4 backdrop-blur-sm">
              <Clock className="h-5 w-5 mr-3 flex-shrink-0" />
              <div>
                <p className="font-semibold">Emergency Service Available</p>
                <p className="text-sm text-primary-foreground/80">Critical Mac issues? We offer same-day emergency repairs.</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up lg:animate-scale-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Professional Mac repair workspace with MacBook and repair tools"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-medium animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Macs Repaired</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-tech-green text-white rounded-xl p-4 shadow-medium animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-sm opacity-90">Customer Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;