import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

const ServicesPage = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const services = [
    {
      id: 'website-basic',
      title: 'Basic Website',
      description: 'Professional business website with responsive design and SEO optimization.',
      features: ['5 Pages', 'Responsive Design', 'SEO Optimized', 'Contact Form'],
      price: 10000,
      category: 'Website Development',
      icon: '🌐',
      gradient: 'from-primary to-electric-blue'
    },
    {
      id: 'website-premium',
      title: 'Premium Website',
      description: 'Advanced website with custom animations, CMS, and e-commerce capabilities.',
      features: ['15 Pages', 'Custom Animations', 'CMS Integration', 'E-commerce Ready'],
      price: 25000,
      category: 'Website Development',
      icon: '🌟',
      gradient: 'from-primary to-electric-blue'
    },
    {
      id: 'mobile-basic',
      title: 'Mobile App (Basic)',
      description: 'Cross-platform mobile app with essential features and modern UI.',
      features: ['Cross-Platform', 'Modern UI', 'Push Notifications', 'App Store Ready'],
      price: 18000,
      category: 'Mobile App Development',
      icon: '📱',
      gradient: 'from-accent to-neon-purple'
    },
    {
      id: 'mobile-premium',
      title: 'Mobile App (Premium)',
      description: 'Advanced mobile app with complex features, backend integration, and analytics.',
      features: ['Advanced Features', 'Backend Integration', 'Analytics', 'Offline Support'],
      price: 30000,
      category: 'Mobile App Development',
      icon: '🚀',
      gradient: 'from-accent to-neon-purple'
    },
    {
      id: 'ai-consultation',
      title: 'AI Consultation',
      description: 'Strategic consultation on AI implementation and automation opportunities.',
      features: ['Strategy Session', 'Implementation Plan', 'ROI Analysis', 'Follow-up Support'],
      price: 12000,
      category: 'AI/ML Solutions',
      icon: '🤖',
      gradient: 'from-cyber-pink to-accent'
    },
    {
      id: 'ai-custom',
      title: 'Custom AI Solution',
      description: 'Fully custom AI/ML solution tailored to your specific business needs.',
      features: ['Custom AI Model', 'Data Processing', 'API Integration', 'Training & Support'],
      price: 25000,
      category: 'AI/ML Solutions',
      icon: '🧠',
      gradient: 'from-cyber-pink to-accent'
    }
  ];

  const handleAddToCart = (service: any) => {
    addToCart({
      id: service.id,
      title: service.title,
      price: service.price,
      description: service.description,
      category: service.category
    });
    
    toast({
      title: "Added to Cart!",
      description: `${service.title} has been added to your cart.`,
    });
  };

  const categories = ['All', 'Website Development', 'Mobile App Development', 'AI/ML Solutions'];

  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden pt-20">
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Comprehensive digital solutions to transform your business ideas into reality 
            with cutting-edge technology and innovative design.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="service-card group cursor-pointer h-full flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  {/* Features */}
                  <div className="mb-6 flex-1">
                    <h4 className="font-semibold mb-3 text-foreground">Includes:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      ₹{service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Starting price</div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    onClick={() => handleAddToCart(service)}
                    className="w-full btn-electric group-hover:scale-105 transition-transform"
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-card p-12 rounded-2xl border border-border max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Need a <span className="text-gradient">Custom Solution?</span>
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Every business is unique. Let's discuss your specific requirements 
              and create a tailored solution that perfectly fits your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:piyushjha9001@gmail.com">
                <Button className="btn-electric text-lg px-8 py-4">
                  Schedule Consultation
                </Button>
              </a>
              <a href="/portfolio">
                <Button variant="outline" className="btn-outline-glow text-lg px-8 py-4">
                  View Portfolio
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;