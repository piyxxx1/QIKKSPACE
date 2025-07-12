import React, { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useNavigate } from 'react-router-dom';
import { usePayment } from '@/hooks/usePayment';
import { config } from '@/config/env';
import { testEnvironmentVariables } from '@/utils/envTest';
import CustomQuoteModal from '@/components/CustomQuoteModal';
import { Input } from '@/components/ui/input';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();
  const { processPayment, isProcessing, paymentError, clearError } = usePayment();
  const [isCustomQuoteModalOpen, setIsCustomQuoteModalOpen] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [formTouched, setFormTouched] = useState(false);
  const navigate = useNavigate();

  const isFormValid =
    customerDetails.name.trim() !== '' &&
    /^\S+@\S+\.\S+$/.test(customerDetails.email) &&
    /^\+?\d{10,15}$/.test(customerDetails.phone);

  // Test environment variables on component mount
  React.useEffect(() => {
    testEnvironmentVariables();
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-hero overflow-x-hidden pt-20">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-8xl mb-8">🛒</div>
            <h1 className="text-4xl font-bold mb-6">Your Cart is Empty</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Start exploring our services and add items to your cart to get a custom quote.
            </p>
            <Link to="/services">
              <Button className="btn-electric text-lg px-8 py-4">
                Browse Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero overflow-x-hidden pt-20">
      <div className="container mx-auto px-6 py-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Your <span className="text-gradient">Cart</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Review your selected services and get a custom quote
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id} className="service-card">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-2">{item.description}</p>
                      <div className="text-sm text-accent font-medium mb-4">{item.category}</div>
                      <div className="text-2xl font-bold text-primary">
                        ₹{item.price.toLocaleString()}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-red-500 hover:text-red-600 hover:border-red-500"
                    >
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="service-card sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Customer Details Form */}
                  <div className="mb-6">
                    <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                      <span className="inline-block text-xl">👤</span> Customer Details
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="cartCustomerName">Full Name *</label>
                        <Input
                          id="cartCustomerName"
                          type="text"
                          className="w-full bg-background border-border focus:border-primary transition-colors"
                          placeholder="John Doe"
                          value={customerDetails.name}
                          onChange={e => setCustomerDetails({ ...customerDetails, name: e.target.value })}
                          onBlur={() => setFormTouched(true)}
                          autoComplete="name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="cartCustomerEmail">Email Address *</label>
                        <Input
                          id="cartCustomerEmail"
                          type="email"
                          className="w-full bg-background border-border focus:border-primary transition-colors"
                          placeholder="john@example.com"
                          value={customerDetails.email}
                          onChange={e => setCustomerDetails({ ...customerDetails, email: e.target.value })}
                          onBlur={() => setFormTouched(true)}
                          autoComplete="email"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="cartCustomerPhone">Mobile Number *</label>
                        <Input
                          id="cartCustomerPhone"
                          type="tel"
                          className="w-full bg-background border-border focus:border-primary transition-colors"
                          placeholder="e.g. +919999999999"
                          value={customerDetails.phone}
                          onChange={e => setCustomerDetails({ ...customerDetails, phone: e.target.value })}
                          onBlur={() => setFormTouched(true)}
                          autoComplete="tel"
                          required
                        />
                      </div>
                      {formTouched && !isFormValid && (
                        <div className="text-red-500 text-xs mt-2">Please enter valid name, email, and phone number.</div>
                      )}
                    </div>
                  </div>

                  {/* Items Count */}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Items ({cartItems.length})</span>
                    <span className="font-medium">₹{getTotalPrice().toLocaleString()}</span>
                  </div>

                  {/* Discount */}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Multi-service Discount</span>
                    <span className="font-medium text-green-500">
                      {cartItems.length > 1 ? '-₹500' : '₹0'}
                    </span>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">
                        ₹{(getTotalPrice() - (cartItems.length > 1 ? 500 : 0)).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {cartItems.length > 1 && (
                    <div className="bg-green-500/10 text-green-600 p-3 rounded-lg text-sm">
                      🎉 You saved ₹500 with our multi-service discount!
                    </div>
                  )}

                  {/* Payment Error Display */}
                  {paymentError && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-3 rounded-lg text-sm mb-4">
                      <div className="flex items-center justify-between">
                        <span>Payment Error: {paymentError}</span>
                        <button
                          onClick={clearError}
                          className="text-red-400 hover:text-red-600"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    <Button 
                      type="button"
                      className="w-full btn-electric"
                      onClick={() => {
                        setFormTouched(true);
                        if (!isFormValid) return;
                        const amount = getTotalPrice() - (cartItems.length > 1 ? 500 : 0);
                        processPayment(amount, {
                          description: `Payment for ${cartItems.length} service(s)`,
                          prefill: {
                            name: customerDetails.name,
                            email: customerDetails.email,
                            contact: customerDetails.phone,
                          },
                        }, (payment) => {
                          navigate('/thank-you', { state: { payment } });
                        });
                      }}
                      disabled={isProcessing || !isFormValid}
                    >
                      {isProcessing ? 'Processing Payment...' : 'Pay with Razorpay'}
                    </Button>
                    <Button 
                      className="w-full btn-outline-glow"
                      onClick={() => setIsCustomQuoteModalOpen(true)}
                    >
                      Request Custom Quote
                    </Button>
                    <Link to="/contact" className="block">
                      <Button variant="outline" className="w-full btn-outline-glow">
                        Schedule Consultation
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={clearCart}
                      className="w-full text-red-500 hover:text-red-600 hover:border-red-500"
                    >
                      Clear Cart
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16">
          <Card className="service-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">📞</div>
                  <h4 className="font-semibold mb-2">1. Consultation Call</h4>
                  <p className="text-muted-foreground text-sm">
                    We'll schedule a free consultation to discuss your requirements in detail.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📋</div>
                  <h4 className="font-semibold mb-2">2. Custom Proposal</h4>
                  <p className="text-muted-foreground text-sm">
                    Receive a detailed proposal with timeline, deliverables, and final pricing.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="font-semibold mb-2">3. Project Kickoff</h4>
                  <p className="text-muted-foreground text-sm">
                    Once approved, we begin working on your project with regular updates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Custom Quote Modal */}
      <CustomQuoteModal
        isOpen={isCustomQuoteModalOpen}
        onClose={() => setIsCustomQuoteModalOpen(false)}
        cartItems={cartItems}
        getTotalPrice={getTotalPrice}
        onPaymentSuccess={(payment) => navigate('/thank-you', { state: { payment } })}
      />
    </div>
  );
};

export default CartPage;