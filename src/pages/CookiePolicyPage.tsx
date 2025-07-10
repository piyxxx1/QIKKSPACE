const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden pt-20">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 text-center">
              Cookie <span className="text-gradient">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your device when you visit our website. 
                  They help us provide you with a better browsing experience by remembering your preferences 
                  and enabling certain functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Cookies</h2>
                <p>
                  We use cookies to enhance your experience on our website, including:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Remembering your preferences and settings</li>
                  <li>Keeping you logged in to your account</li>
                  <li>Analyzing how our website is used to improve performance</li>
                  <li>Providing personalized content and advertisements</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Essential Cookies</h3>
                    <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Performance Cookies</h3>
                    <p>These cookies help us understand how visitors interact with our website.</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">Functional Cookies</h3>
                    <p>These cookies enable enhanced functionality and personalization.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Managing Cookies</h2>
                <p>
                  You can control and manage cookies through your browser settings. However, 
                  disabling certain cookies may limit your ability to use some features of our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about our use of cookies, please contact us at 
                  piyushjha9001@gmail.com or call us at +91 8588091122.
                </p>
              </div>

              <div className="text-sm text-muted-foreground mt-12">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;