import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: 'Memesta Services',
      category: 'Website Development',
      image: '/assets/memesta.png',
      description: 'Complete website redesign with modern UI/UX and improved performance.',
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      client: 'Memesta Services Pvt. Ltd.',
      year: '2024'
    },
    {
      id: 2,
      title: 'Aurameter',
      category: 'Mobile App Development',
      image: '/assets/Aurameter.png',
      description: 'Aurameter is a mobile app that is completely made for GenZ.',
      technologies: ['React Native', 'Firebase', 'AWS'],
      client: 'Aurameter',
      year: '2024'
    },
    {
      id: 3,
      title: 'Herbal Cleaning',
      category: 'Website Development',
      image: '/assets/HerbalCleaning.png',
      description: 'build a cleaning website form the scratch.',
      technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
      client: 'Herbal Cleaning',
      year: '2023'
    },
  ];

  const categories = ['All', 'Website Development', 'Mobile App Development', 'AI/ML Solutions'];

  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden pt-20">
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Explore our latest projects and see how we've helped businesses transform 
            their digital presence with innovative solutions.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-lg bg-gradient-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className="service-card group cursor-pointer h-full overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Icon */}
                <div className="aspect-video bg-gradient-card flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                  {project.image.startsWith('/') ? (
                    <img src={project.image} alt={project.title} className="h-full w-auto max-h-64 object-contain" />
                  ) : (
                    project.image
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-accent font-medium">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Client */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-foreground">Client: </span>
                    <span className="text-sm text-muted-foreground">{project.client}</span>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-foreground mb-2">Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Project Button */}
                  {project.title === 'Memesta Services' ? (
                    <a href="https://memestaservices.in/" target="_blank" rel="noopener noreferrer" className="w-full mt-4 btn-outline-glow py-2 text-sm group-hover:btn-electric transition-all block text-center">
                      View Project Details
                    </a>
                  ) : project.title === 'Aurameter' ? (
                    <a href="https://play.google.com/store/apps/details?id=com.aurameter&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="w-full mt-4 btn-outline-glow py-2 text-sm group-hover:btn-electric transition-all block text-center">
                      View Project Details
                    </a>
                  ) : project.title === 'Herbal Cleaning' ? (
                    <a href="https://www.herbalcleaning.com/" target="_blank" rel="noopener noreferrer" className="w-full mt-4 btn-outline-glow py-2 text-sm group-hover:btn-electric transition-all block text-center">
                      View Project Details
                    </a>
                  ) : (
                    <button className="w-full mt-4 btn-outline-glow py-2 text-sm group-hover:btn-electric transition-all" disabled>
                      View Project Details
                    </button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyber-pink mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-purple mb-2">3+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-card p-12 rounded-2xl border border-border max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your <span className="text-gradient">Next Project?</span>
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's create something amazing together. Get in touch to discuss your project 
              and see how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact">
                <button className="btn-electric text-lg px-8 py-4">
                  Start Your Project
                </button>
              </a>
              <a href="tel:+918588091122">
                <button className="btn-outline-glow text-lg px-8 py-4">
                  Schedule Call
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;