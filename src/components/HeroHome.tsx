import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
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
        <div className="animate-fade-in max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-tight">
            <span className="glow-text">QIKK</span>
            <span className="text-foreground"> SPACE</span>
          </h1>

          {/* Subtitle */}
          <div className="text-3xl md:text-4xl font-light mb-12">
            <span className="text-gradient">
              Transforming Ideas into Digital Reality
            </span>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We create stunning websites, powerful mobile apps, and intelligent AI solutions 
            that drive your business forward in the digital age.
          </p>
          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link to="/services">
              <Button className="btn-electric text-lg px-10 py-4 text-white font-semibold">
                Explore Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="btn-outline-glow text-lg px-10 py-4 font-semibold">
                Start Your Project
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">100+</div>
              <div className="text-muted-foreground text-lg">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3">50+</div>
              <div className="text-muted-foreground text-lg">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyber-pink mb-3">24/7</div>
              <div className="text-muted-foreground text-lg">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-neon-purple mb-3">3+</div>
              <div className="text-muted-foreground text-lg">Years Experience</div>
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