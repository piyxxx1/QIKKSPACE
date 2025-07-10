const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden pt-20">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 text-center">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  and any other information you choose to provide.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and comply with legal obligations. We do not sell or rent 
                  your personal information to third parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Information Sharing</h2>
                <p>
                  We may share your information in certain limited circumstances, such as with your consent, 
                  to comply with legal obligations, or to protect our rights and the rights of others.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at 
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

export default PrivacyPolicyPage;