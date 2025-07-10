import { useState } from 'react';
import { PaymentService, PaymentOptions } from '@/services/paymentService';
import { config } from '@/config/env';

export const usePayment = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const processPayment = async (amount: number, options?: Partial<PaymentOptions>) => {
    setIsProcessing(true);
    setPaymentError(null);

    try {
      await PaymentService.initializePayment({
        amount,
        ...options,
      });
    } catch (error) {
      console.error('Payment processing failed:', error);
      setPaymentError(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const clearError = () => {
    setPaymentError(null);
  };

  return {
    processPayment,
    isProcessing,
    paymentError,
    clearError,
  };
}; 