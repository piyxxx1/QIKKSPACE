import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } = useCart();

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
                <div className="space-y-4">
                  
                  {/* Items Count */}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Items ({cartItems.length})</span>
                    <span className="font-medium">₹{getTotalPrice().toLocaleString()}</span>
                  </div>

                  {/* Discount */}
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Multi-service Discount</span>
                    <span className="font-medium text-green-500">
                      {cartItems.length > 1 ? '-₹41,599' : '₹0'}
                    </span>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-primary">
                        ₹{(getTotalPrice() - (cartItems.length > 1 ? 41599 : 0)).toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {cartItems.length > 1 && (
                    <div className="bg-green-500/10 text-green-600 p-3 rounded-lg text-sm">
                      🎉 You saved ₹41,599 with our multi-service discount!
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3 pt-4">
                    <Button 
                      className="w-full btn-electric"
                      onClick={() => {
                        const amount = getTotalPrice() - (cartItems.length > 1 ? 41599 : 0);
                        const options = {
                          key: 'rzp_test_1234567890', // Replace with your Razorpay key
                          amount: amount * 100, // Amount in paise
                          currency: 'INR',
                          name: 'QIKK SPACE',
                          description: 'Service Payment',
                          handler: function(response: any) {
                            alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
                          },
                          prefill: {
                            name: '',
                            email: 'piyushjha9001@gmail.com',
                            contact: '+918588091122'
                          },
                          theme: {
                            color: '#3B82F6'
                          }
                        };
                        // @ts-ignore
                        const rzp = new window.Razorpay(options);
                        rzp.open();
                      }}
                    >
                      Pay with Razorpay
                    </Button>
                    <Button className="w-full btn-outline-glow">
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
                </div>
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
    </div>
  );
};

export default CartPage;