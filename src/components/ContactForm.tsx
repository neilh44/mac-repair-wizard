import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    deviceType: '',
    issueDescription: '',
    urgency: 'normal'
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Request Submitted",
      description: "We'll contact you within 1 hour to schedule your Mac repair.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      deviceType: '',
      issueDescription: '',
      urgency: 'normal'
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Get Your Mac Fixed Today
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to get your Mac back to perfect working condition? Contact us for a free diagnosis 
              and transparent pricing on all repairs.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <Card className="border-l-4 border-l-tech-green">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-tech-green mr-4" />
                    <div>
                      <h3 className="font-semibold text-primary">Call or Text</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                      <p className="text-sm text-tech-green">Emergency line available 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-apple-blue">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-apple-blue mr-4" />
                    <div>
                      <h3 className="font-semibold text-primary">Email Us</h3>
                      <p className="text-muted-foreground">info@drmac.com</p>
                      <p className="text-sm text-apple-blue">Response within 2 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <h3 className="font-semibold text-primary">Visit Our Shop</h3>
                      <p className="text-muted-foreground">123 Tech Street, Mac City, MC 12345</p>
                      <p className="text-sm text-primary">Free parking available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-muted-foreground">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-muted-foreground mr-4" />
                    <div>
                      <h3 className="font-semibold text-primary">Business Hours</h3>
                      <p className="text-muted-foreground">Mon-Fri: 8AM-6PM</p>
                      <p className="text-muted-foreground">Sat: 9AM-4PM</p>
                      <p className="text-sm text-muted-foreground">Sunday by appointment</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Request Service</CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you within 1 hour to schedule your repair.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="deviceType">Mac Model</Label>
                    <Select value={formData.deviceType} onValueChange={(value) => handleInputChange('deviceType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select your Mac model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="macbook-air">MacBook Air</SelectItem>
                        <SelectItem value="macbook-pro">MacBook Pro</SelectItem>
                        <SelectItem value="imac">iMac</SelectItem>
                        <SelectItem value="mac-mini">Mac Mini</SelectItem>
                        <SelectItem value="mac-pro">Mac Pro</SelectItem>
                        <SelectItem value="other">Other/Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="urgency">Service Priority</Label>
                    <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="normal">Normal (2-3 days)</SelectItem>
                        <SelectItem value="urgent">Urgent (Same day)</SelectItem>
                        <SelectItem value="emergency">Emergency (Immediate)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="issueDescription">Describe the Issue *</Label>
                  <Textarea
                    id="issueDescription"
                    value={formData.issueDescription}
                    onChange={(e) => handleInputChange('issueDescription', e.target.value)}
                    placeholder="Please describe what's wrong with your Mac, any error messages, and when the problem started..."
                    required
                    className="mt-1 min-h-[100px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-tech-green hover:bg-tech-green/90">
                  Submit Service Request
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to our privacy policy. 
                  We'll never share your information with third parties.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;