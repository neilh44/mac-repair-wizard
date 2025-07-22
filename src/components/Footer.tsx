import { Phone, Mail, Globe, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Contact Information */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Dr. Mac - The Apple Tech</h3>
              <a 
                href="tel:530-386-2616" 
                className="inline-flex items-center text-xl font-semibold text-accent hover:text-accent/80 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                530-386-2616
              </a>
            </div>
            
            <p className="text-primary-foreground/90 leading-relaxed max-w-md">
              "Professional and Experienced Apple product technician providing training, service, repair and so much more..."
            </p>
            
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <p className="text-accent font-semibold text-lg">
                Serving Apple customers since 1986
              </p>
              <p className="text-primary-foreground/80 text-sm mt-1">
                Over 38 years of Apple experience
              </p>
            </div>
          </div>

          {/* Column 2: Services & Links */}
          <div className="space-y-6">
            {/* Core Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Core Services</h4>
              <ul className="space-y-2 text-primary-foreground/90">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Mac, iPad, iPhone Training
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Service & Repair on all Macs
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Installation & Setup
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Data Backup Solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Malware Removal
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  Remote IT Support
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="text-primary-foreground/90 hover:text-accent transition-colors">
                    Free Consultation
                  </a>
                </li>
                <li>
                  <a 
                    href="https://sos.splashtop.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-foreground/90 hover:text-accent transition-colors"
                  >
                    Remote Support Portal
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-primary-foreground/90 hover:text-accent transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/80">Connect with us:</span>
              <div className="flex space-x-3">
                <a 
                  href="https://www.facebook.com/DrMacHelp/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent/10 p-2 rounded-lg hover:bg-accent/20 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-accent" />
                </a>
                <a 
                  href="https://drmachelp.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent/10 p-2 rounded-lg hover:bg-accent/20 transition-colors"
                >
                  <Globe className="w-5 h-5 text-accent" />
                </a>
                <a 
                  href="https://sos.splashtop.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent/10 p-2 rounded-lg hover:bg-accent/20 transition-colors"
                >
                  <Mail className="w-5 h-5 text-accent" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-primary/80 border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-2 text-sm text-primary-foreground/70">
            <div className="text-center lg:text-left">
              <p>© 2024 Dr. Mac - The Apple Tech. All rights reserved.</p>
              <p>Mobile service available</p>
            </div>
            <div className="text-center lg:text-right">
              <p className="font-medium">Available by appointment</p>
              <a 
                href="tel:530-386-2616" 
                className="text-accent hover:text-accent/80 transition-colors font-semibold"
              >
                Call 530-386-2616
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;