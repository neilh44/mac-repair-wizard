import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Clock, Award, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-mac-repair.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-24 lg:py-32 overflow-hidden">
      {/* Apple-Style Background Effects */}
      <div className="absolute inset-0 bg-mesh opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-apple-blue/20 via-transparent to-purple-500/20"></div>
      
      {/* Floating Background Elements - Apple Style */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-apple-blue/15 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Emergency Service Banner */}
      <div className="absolute top-0 left-0 right-0 bg-apple-orange text-white py-2 z-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium flex items-center justify-center">
            <Zap className="h-4 w-4 mr-2 animate-pulse" />
            Emergency Mac Repair Available - Same Day Service - Call Now!
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            {/* Apple-Style Trust Badge */}
            <Badge variant="secondary" className="mb-8 glass-card bg-apple-blue/90 text-white border-0 hover-scale animate-glow">
              <Award className="h-4 w-4 mr-2 animate-pulse" />
              Authorized Apple Service Provider - 38+ Years
            </Badge>

            {/* Apple-Inspired Hero Headline */}
            <h1 className="text-hero mb-8 animate-slide-up-delayed">
              Your Mac.
              <span className="block text-gradient animate-fade-in-delayed">
                Expertly Fixed.
              </span>
            </h1>

            {/* Modern Subheadline */}
            <p className="text-body text-white/90 mb-8 max-w-lg">
              Professional Mac repair with certified Apple technicians. 
              Same-day service, lifetime warranty, and our industry-leading No Fix, No Fee guarantee.
            </p>

            {/* Apple-Style Value Propositions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {[
                { text: 'Certified Apple Technicians', icon: Shield },
                { text: 'Same Day Service Available', icon: Clock },
                { text: 'No Fix, No Fee Guarantee', icon: CheckCircle },
                { text: '90-Day Warranty Included', icon: Award }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center text-white/95 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <benefit.icon className="h-5 w-5 text-apple-blue mr-3 flex-shrink-0" />
                  <span className="text-base font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Apple-Style CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-delayed">
              <Button 
                size="lg" 
                asChild 
                className="bg-apple-blue hover:bg-apple-blue/90 text-white border-0 hover-lift hover-glow group text-cta rounded-xl px-8 py-4 shadow-strong"
              >
                <Link to="/contact" className="flex items-center justify-center">
                  <span className="group-hover:scale-105 transition-transform duration-300">Get Mac Repair Quote</span>
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="glass-button border-white/30 text-white hover:bg-white/10 hover-lift group text-cta rounded-xl px-8 py-4"
              >
                <a href="tel:530-386-2616" className="flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="hidden sm:inline">Call Now: </span>530-386-2616
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="glass-card bg-white/10 text-white rounded-xl p-6 backdrop-blur-premium hover-scale">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-apple-blue">1,500+</div>
                  <div className="text-sm text-white/80">Macs Repaired</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-apple-blue">4.9★</div>
                  <div className="text-sm text-white/80">Google Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-apple-blue">38+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Apple-Style Product Showcase */}
          <div className="relative animate-slide-up lg:animate-scale-in">
            <div className="relative z-10">
              {/* Main Hero Image with Apple-style treatment */}
              <div className="relative rounded-3xl overflow-hidden shadow-strong bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20">
                <img
                  src={heroImage}
                  alt="Professional Mac repair workspace with MacBook and repair tools"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Process Timeline Visualization */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="glass-card bg-white/95 text-apple-gray p-4 rounded-2xl shadow-strong">
                  <div className="flex items-center justify-between text-sm font-medium">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-apple-blue rounded-full mr-2"></div>
                      <span>Diagnose</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-apple-orange rounded-full mr-2"></div>
                      <span>Quote</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-tech-green rounded-full mr-2"></div>
                      <span>Repair</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-apple-blue rounded-full mr-2"></div>
                      <span>Return</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground text-center">
                    Average repair time: 2.5 hours
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