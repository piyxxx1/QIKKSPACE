import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration
    const serviceID = 'service_bpftjd7';
    const templateID = 'template_rluv2bn';
    const userID = 't5NSUDaKsaKPLR-fW';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      service: formData.service,
      message: formData.message,
      to_email: 'piyushjha9001@gmail.com'
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, userID);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '', service: '' });
      
    } catch (error) {
      console.error('EmailJS error:', error);
      
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly at piyushjha9001@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'piyushjha9001@gmail.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      value: '+91 8588091122',
      icon: '📞'
    },
    {
      title: 'Location',
      value: '14 Barakhamba Road, 110001',
      icon: '📍'
    },
    {
      title: 'Response Time',
      value: 'Within 24 hours',
      icon: '⏰'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Get in touch with our team for a free consultation 
            and let's discuss how we can help transform your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-background border-border focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-background border-border focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Company (Optional)</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full bg-background border-border focus:border-primary transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-background border border-border rounded-md focus:border-primary transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="ai">AI/ML Solutions</option>
                      <option value="all">All Services</option>
                      <option value="consultation">Consultation Only</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full bg-background border-border focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full btn-electric text-lg py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div>
            
            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="service-card text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{info.icon}</div>
                    <div className="font-semibold text-foreground mb-1 text-sm sm:text-base">{info.title}</div>
                    <div className="text-muted-foreground text-xs sm:text-sm break-words leading-relaxed hyphens-auto">
                      {info.value}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Why Choose Us */}
            <Card className="service-card">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Why Choose QIKK SPACE?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">Free Consultation</div>
                      <div className="text-muted-foreground text-sm">
                        Get expert advice and project planning at no cost
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">Transparent Pricing</div>
                      <div className="text-muted-foreground text-sm">
                        Clear, upfront pricing with no hidden costs
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyber-pink rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">Quick Turnaround</div>
                      <div className="text-muted-foreground text-sm">
                        Fast delivery without compromising quality
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-neon-purple rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-medium">24/7 Support</div>
                      <div className="text-muted-foreground text-sm">
                        Ongoing support even after project completion
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;