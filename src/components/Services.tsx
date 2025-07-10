import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Professional, responsive websites that captivate your audience and drive conversions. Built with the latest technologies and optimized for performance.',
      features: [
        'Custom Responsive Design',
        'SEO Optimization & Analytics',
        'Fast Loading & Performance',
        'Content Management System',
        'E-commerce Integration',
        'Security & SSL Implementation'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/assets/a79cffe2-c5ed-456c-a789-380a5e7ae736.png',
      gradient: 'from-primary to-electric-blue'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences across iOS and Android platforms.',
      features: [
        'Cross-Platform Development',
        'Native Performance',
        'App Store Optimization',
        'Cloud Integration & APIs',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      image: '/assets/27f11a5d-4cec-4cf7-bfeb-5514e558925e.png',
      gradient: 'from-accent to-neon-purple'
    },
    {
      title: 'AI/ML Solutions',
      description: 'Intelligent automation and machine learning solutions that transform your business operations with data-driven insights and smart decision-making.',
      features: [
        'Custom AI Model Development',
        'Data Analytics & Insights',
        'Process Automation',
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI'],
      image: '/assets/2e39b6fe-318c-41fa-ac66-7a8e645d43bd.png',
      gradient: 'from-cyber-pink to-accent'
    }
  ];

  const industries = [
    { name: 'E-commerce', icon: '🛍️', description: 'Online stores and marketplaces' },
    { name: 'Healthcare', icon: '🏥', description: 'Medical apps and platforms' },
    { name: 'Education', icon: '🎓', description: 'Learning management systems' },
    { name: 'Finance', icon: '💰', description: 'Fintech and banking solutions' },
    { name: 'Real Estate', icon: '🏢', description: 'Property management platforms' },
    { name: 'Logistics', icon: '🚚', description: 'Supply chain and delivery systems' }
  ];

  return (
    <section id="services" className="py-20 pt-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to transform your business ideas into reality 
            with cutting-edge technology and innovative design.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card group cursor-pointer h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-16 h-16 mx-auto object-contain"
                  />
                </div>
                <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-lg">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                {/* Features */}
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a href="/contact">
                  <Button className="w-full btn-outline-glow group-hover:btn-electric">
                    Get Quote
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Industries We <span className="text-gradient">Serve</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have experience across various industries, delivering tailored solutions that meet specific business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <Card 
                key={index} 
                className="service-card group text-center p-6 hover:scale-105 transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Analytics & Results Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Data-Driven <span className="text-gradient">Results</span>
              </h3>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't just build applications – we create solutions that deliver measurable results. 
                  Our data-driven approach ensures every project contributes to your business growth.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-card p-4 rounded-lg border border-border">
                    <div className="text-2xl font-bold text-primary mb-1">95%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div className="bg-gradient-card p-4 rounded-lg border border-border">
                    <div className="text-2xl font-bold text-accent mb-1">40%</div>
                    <div className="text-sm text-muted-foreground">Average Traffic Increase</div>
                  </div>
                  <div className="bg-gradient-card p-4 rounded-lg border border-border">
                    <div className="text-2xl font-bold text-cyber-pink mb-1">30%</div>
                    <div className="text-sm text-muted-foreground">Cost Reduction</div>
                  </div>
                  <div className="bg-gradient-card p-4 rounded-lg border border-border">
                    <div className="text-2xl font-bold text-neon-purple mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/assets/ed8b52c8-d810-4a8f-a4e7-960c68913147.png" 
                alt="Analytics and data insights dashboard" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-card p-8 rounded-2xl border border-border max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your <span className="text-gradient">Digital Journey?</span>
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss your project and create something amazing together. 
              Get a free consultation and detailed project proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:piyushjha9001@gmail.com">
                <Button className="btn-electric text-lg px-8 py-4">
                  Free Consultation
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
      </div>
    </section>
  );
};

export default Services;