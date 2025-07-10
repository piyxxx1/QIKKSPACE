const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden pt-20">
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 text-center">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using QIKK SPACE services, you accept and agree to be bound by 
                  the terms and provision of this agreement. These terms apply to all visitors, 
                  users, and others who access or use the service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Description of Service</h2>
                <p>
                  QIKK SPACE provides digital solutions including web development, mobile app development, 
                  AI/ML solutions, and consulting services. We reserve the right to modify or discontinue 
                  any aspect of our service at any time.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">User Obligations</h2>
                <p>
                  You agree to use our services only for lawful purposes and in accordance with these 
                  Terms of Service. You are responsible for maintaining the confidentiality of your 
                  account information and for all activities that occur under your account.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Payment Terms</h2>
                <p>
                  Payment terms will be specified in individual project agreements. All payments are 
                  processed securely through Razorpay. Refunds are handled on a case-by-case basis 
                  according to our refund policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  QIKK SPACE shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
                <p>
                  For questions regarding these Terms of Service, please contact us at 
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

export default TermsOfServicePage;