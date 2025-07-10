import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const features = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
      icon: '💡'
    },
    {
      title: 'Quality Driven',
      description: 'Every project undergoes rigorous testing and quality assurance.',
      icon: '⚡'
    },
    {
      title: 'Client Focus',
      description: 'Your success is our priority. We work closely with you every step.',
      icon: '🎯'
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality.',
      icon: '🚀'
    }
  ];

  return (
    <section id="about" className="py-20 pt-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* About Hero Section */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-gradient">QIKK SPACE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where Innovation Meets Excellence in Digital Solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="text-lg text-muted-foreground mb-8 leading-relaxed space-y-6">
              <p>
                <strong className="text-foreground">QIKK SPACE</strong> is a forward-thinking digital agency that specializes in creating 
                exceptional web experiences, mobile applications, and AI-powered solutions 
                that drive business growth and digital transformation.
              </p>
              
              <p>
                Founded in 2021 on the principles of innovation and excellence, we combine 
                creative design with advanced technology to deliver solutions that not only 
                meet but exceed expectations. Our commitment to quality and client satisfaction 
                has made us a trusted partner for businesses of all sizes.
              </p>
              
              <p>
                Our team of passionate developers, designers, AI specialists, and project managers 
                work collaboratively to transform your vision into digital reality. We believe 
                in the power of technology to solve real-world problems and create meaningful 
                impact for our clients.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-accent mb-1">100+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-cyber-pink mb-1">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-neon-purple mb-1">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Team Image */}
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src="/assets/8aa888f5-4de6-4af2-8487-5f10e554cfd7.png" 
                alt="QIKK SPACE team collaboration" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient">Approach</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure every project delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="/assets/2e8ba03a-b656-4962-9f39-e3d554d16ad2.png" 
                alt="Development workspace" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Discovery & Planning</h4>
                  <p className="text-muted-foreground">We start by understanding your business goals, target audience, and project requirements to create a comprehensive strategy.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Design & Development</h4>
                  <p className="text-muted-foreground">Our expert team creates intuitive designs and develops robust solutions using the latest technologies and best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyber-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-cyber-pink font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Testing & Launch</h4>
                  <p className="text-muted-foreground">Rigorous testing ensures quality and performance before we launch your solution and provide ongoing support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="service-card group h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-card p-12 rounded-2xl border border-border max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-6">
                Our <span className="text-gradient">Vision</span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                "To empower businesses with innovative digital solutions that drive growth, 
                enhance user experiences, and create lasting impact in the digital landscape. 
                We believe in the power of technology to transform ideas into extraordinary realities."
              </p>
            </div>
            <div className="flex-1">
              <img src="/assets/Ourvision.jpg" alt="Our Vision" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mt-20 text-center">
          <h3 className="text-5xl font-bold mb-10">
            Meet <span className="text-gradient">Our Team</span>
          </h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {/* Nikhil Jha */}
            <div className="bg-gradient-card p-8 rounded-2xl border border-border max-w-xs w-full shadow-neon flex flex-col items-center">
              <img src="/assets/nikhil-dp.jpeg" alt="Nikhil Jha" className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-primary shadow-lg" />
              <h4 className="text-2xl font-bold mb-2 text-primary">Nikhil Jha</h4>
              <div className="text-lg font-medium mb-1 text-foreground">Principal Engineer</div>
              <div className="text-muted-foreground mb-2">10+ years experience in software development</div>
              <a href="https://www.linkedin.com/in/nikhil-jha-799a6b141/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 mt-2 px-4 py-2 rounded-md bg-[#0077b5] text-white font-medium hover:bg-[#005983] transition-colors">
                <i className="fab fa-linkedin"></i>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
            {/* Piyush Jha */}
            <div className="bg-gradient-card p-8 rounded-2xl border border-border max-w-xs w-full shadow-purple flex flex-col items-center">
              <img src="/assets/Piyush-dp.jpeg" alt="Piyush Jha" className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-accent shadow-lg" />
              <h4 className="text-2xl font-bold mb-2 text-accent">Piyush Jha</h4>
              <div className="text-lg font-medium mb-1 text-foreground">AI Engineer</div>
              <div className="text-muted-foreground mb-2">Experience with Data Science and Machine Learning Technologies</div>
              <a href="https://linkedin.com/in/piyuxx1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 mt-2 px-4 py-2 rounded-md bg-[#0077b5] text-white font-medium hover:bg-[#005983] transition-colors">
                <i className="fab fa-linkedin"></i>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;