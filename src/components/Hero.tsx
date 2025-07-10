import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Transforming Ideas into Digital Reality';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full floating"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyber-pink rounded-full floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-neon-purple rounded-full floating" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="glow-text">QIKK</span>
            <span className="text-foreground"> SPACE</span>
          </h1>

          {/* Typing Animation Subtitle */}
          <div className="text-2xl md:text-4xl font-light mb-8 h-16 flex items-center justify-center">
            <span className="text-gradient">
              {displayedText}
              <span className="animate-blink-caret border-r-2 border-primary ml-1"></span>
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            We create stunning websites, powerful mobile apps, and intelligent AI solutions 
            that drive your business forward in the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={scrollToServices}
              className="btn-electric text-lg px-8 py-4"
            >
              Explore Our Services
            </Button>
            <Button 
              onClick={scrollToContact}
              variant="outline" 
              className="btn-outline-glow text-lg px-8 py-4"
            >
              Start Your Project
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-pink mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-purple mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;