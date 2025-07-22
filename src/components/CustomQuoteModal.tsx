import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePayment } from '@/hooks/usePayment';
import { config } from '@/config/env';

interface CartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
}

interface CustomQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  getTotalPrice: () => number;
  onPaymentSuccess?: (payment: any) => void;
}

const CustomQuoteModal: React.FC<CustomQuoteModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  getTotalPrice,
  onPaymentSuccess,
}) => {
  const [customAmount, setCustomAmount] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationError, setValidationError] = useState('');
  const { processPayment, isProcessing, paymentError, clearError } = usePayment();
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [formTouched, setFormTouched] = useState(false);

  const suggestedAmount = getTotalPrice() - (cartItems.length > 1 ? 500 : 0);

  const isFormValid =
    customerDetails.name.trim() !== '' &&
    /^\S+@\S+\.\S+$/.test(customerDetails.email) &&
    /^\+?\d{10,15}$/.test(customerDetails.phone) &&
    customerDetails.address.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormTouched(true);
    if (!isFormValid) return;
    if (!customAmount || parseFloat(customAmount) <= 0) {
      setValidationError('Please enter a valid amount');
      return;
    }
    setIsSubmitting(true);
    try {
      const amount = parseFloat(customAmount);
      await processPayment(amount, {
        description: `Custom Quote: ${description || 'Custom service request'}`,
        prefill: {
          name: customerDetails.name,
          email: customerDetails.email,
          contact: customerDetails.phone,
        },
        notes: {
          address: customerDetails.address,
          description: description || 'Custom service request',
        },
      }, (payment) => {
        if (onPaymentSuccess) onPaymentSuccess(payment);
      });
      onClose();
    } catch (error) {
      console.error('Custom quote payment failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAmountChange = (value: string) => {
    // Only allow numbers and decimal point
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(value) || value === '') {
      setCustomAmount(value);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md service-card max-h-[90vh] overflow-y-auto p-2 sm:p-0">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Request Custom Quote
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Customer Details Form */}
            <div className="mb-6">
              <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                <span className="inline-block text-xl">👤</span> Customer Details
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="quoteCustomerName">Full Name *</label>
                  <Input
                    id="quoteCustomerName"
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
                  <label className="block text-sm font-medium mb-2" htmlFor="quoteCustomerEmail">Email Address *</label>
                  <Input
                    id="quoteCustomerEmail"
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
                  <label className="block text-sm font-medium mb-2" htmlFor="quoteCustomerPhone">Mobile Number *</label>
                  <Input
                    id="quoteCustomerPhone"
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
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="quoteCustomerAddress">Delivery Address *</label>
                  <Textarea
                    id="quoteCustomerAddress"
                    className="w-full bg-background border-border focus:border-primary transition-colors"
                    placeholder="Enter your complete delivery address"
                    value={customerDetails.address}
                    onChange={e => setCustomerDetails({ ...customerDetails, address: e.target.value })}
                    onBlur={() => setFormTouched(true)}
                    rows={3}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    This address will be used for service delivery and payment verification
                  </p>
                </div>
                {formTouched && !isFormValid && (
                  <div className="text-red-500 text-xs mt-2">Please enter valid name, email, phone number, and address.</div>
                )}
              </div>
            </div>

            {/* Suggested Amount */}
            <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
              <Label className="text-sm font-medium text-blue-700 dark:text-blue-300">
                Suggested Amount (with discount)
              </Label>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ₹{suggestedAmount.toLocaleString()}
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                Based on your {cartItems.length} selected service{cartItems.length > 1 ? 's' : ''}
              </p>
            </div>

            {/* Custom Amount Input */}
            <div className="space-y-2">
              <Label htmlFor="customAmount" className="text-sm font-medium">
                Custom Amount (₹)
              </Label>
              <Input
                id="customAmount"
                type="text"
                value={customAmount}
                onChange={(e) => handleAmountChange(e.target.value)}
                placeholder="Enter your custom amount"
                className="text-lg font-semibold"
                required
              />
              <p className="text-xs text-muted-foreground">
                Enter the amount you'd like to pay for custom services
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium">
                Project Description (Optional)
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your project requirements..."
                rows={3}
              />
            </div>

            {/* Validation Error Display */}
            {validationError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-3 rounded-lg text-sm">
                <div className="flex items-center justify-between">
                  <span>{validationError}</span>
                  <button
                    onClick={() => setValidationError('')}
                    className="text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              </div>
            )}

            {/* Payment Error Display */}
            {paymentError && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-3 rounded-lg text-sm">
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
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isProcessing || isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 btn-electric"
                disabled={isProcessing || isSubmitting || !customAmount || !isFormValid}
              >
                {isProcessing || isSubmitting ? 'Processing...' : 'Pay with Razorpay'}
              </Button>
            </div>

            {/* Info */}
            <div className="text-xs text-muted-foreground text-center pt-2">
              <p>• Payment will be processed securely via Razorpay</p>
              <p>• We'll contact you within 24 hours to discuss your requirements</p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CustomQuoteModal; 