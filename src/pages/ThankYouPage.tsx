import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ThankYouPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Payment details can be passed via location.state
  const payment = location.state?.payment;

  // If no payment details, redirect to home after a short delay
  React.useEffect(() => {
    if (!payment) {
      const timer = setTimeout(() => navigate('/', { replace: true }), 3000);
      return () => clearTimeout(timer);
    }
  }, [payment, navigate]);

  if (!payment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <div className="text-lg font-semibold">Redirecting...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero px-4">
      <Card className="max-w-lg w-full mx-auto bg-background border border-border rounded-xl shadow p-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary mb-2">Thank You!</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-5xl mb-2">🎉</div>
            <div className="text-lg font-semibold mb-1">Your payment was successful.</div>
            <div className="text-muted-foreground mb-4">We appreciate your business!</div>
          </div>
          <div className="bg-background border border-border p-4 rounded-lg mb-4 text-foreground">
            <div className="mb-2"><span className="font-medium">Payment ID:</span> {payment.razorpay_payment_id}</div>
            <div className="mb-2"><span className="font-medium">Order ID:</span> {payment.razorpay_order_id}</div>
            <div className="mb-2"><span className="font-medium">Amount:</span> ₹{(payment.amount / 100).toLocaleString()}</div>
            <div className="mb-2"><span className="font-medium">Date:</span> {new Date(payment.date).toLocaleString()}</div>
            {payment.email && <div className="mb-2"><span className="font-medium">Email:</span> {payment.email}</div>}
            {payment.contact && <div className="mb-2"><span className="font-medium">Contact:</span> {payment.contact}</div>}
          </div>
          <Button className="w-full btn-electric mt-2" onClick={() => navigate('/')}>Back to Home</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYouPage; 