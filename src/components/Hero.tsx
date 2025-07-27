import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-mac-repair.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20 lg:py-32 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-tech-green/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            {/* Premium Trust Badge */}
            <Badge variant="secondary" className="mb-6 glass-card bg-tech-green/90 text-white border-0 hover-scale animate-glow">
              <Award className="h-4 w-4 mr-2 animate-pulse" />
              38+ Years Mac Expertise
            </Badge>

            {/* Premium Main Headline - Mobile Optimized */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up-delayed">
              Mac Experts You Can
              <span className="block text-gradient animate-fade-in-delayed">
                Trust
              </span>
            </h1>

            {/* Subheadline - Mobile Optimized */}
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed">
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

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-delayed">
              <Button 
                size="lg" 
                variant="secondary" 
                asChild 
                className="glass-button bg-tech-green/90 hover:bg-tech-green text-white border-0 hover-lift hover-glow group"
              >
                <Link to="/contact" className="flex items-center justify-center">
                  <span className="group-hover:scale-105 transition-transform duration-300">Get Free Diagnosis</span>
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="glass-button border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-lift group"
              >
                <a href="tel:530-386-2616" className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden sm:inline">Call Now: </span>530-386-2616
                </a>
              </Button>
            </div>

            {/* Premium Emergency Service Notice */}
            <div className="glass-card bg-background/10 text-emergency-red rounded-2xl p-4 backdrop-blur-premium hover-scale animate-pulse-glow">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-3 flex-shrink-0 animate-pulse" />
                <div>
                  <p className="font-semibold">Emergency Service Available</p>
                  <p className="text-sm text-primary-foreground/80">Critical Mac issues? We offer same-day emergency repairs.</p>
                </div>
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
              
              {/* Interactive Floating Stats */}
              <div className="absolute -bottom-6 -left-6 glass-card bg-background/90 animate-bounce-in hover-lift cursor-pointer group" style={{ animationDelay: '0.8s' }}>
                <div className="text-3xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  <span className="tabular-nums">1,500+</span>
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                  Macs Repaired
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-tech-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
              
              <div className="absolute -top-6 -right-6 glass-card bg-tech-green text-white animate-bounce-in hover-scale cursor-pointer group animate-glow" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300">
                  <span className="tabular-nums">4.9</span>★
                </div>
                <div className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Google Rating
                </div>
              </div>
              
              {/* Interactive Trust Counter */}
              <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 glass-card bg-background/90 animate-float" style={{ animationDelay: '1.2s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">
                    <span className="tabular-nums">38+</span>
                  </div>
                  <div className="text-xs text-muted-foreground whitespace-nowrap">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;