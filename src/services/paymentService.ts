import { config } from '@/config/env';

// Razorpay types
declare global {
  interface Window {
    Razorpay: {
      new (options: Record<string, unknown>): {
        open: () => void;
      };
    };
  }
}

export interface PaymentOptions {
  amount: number;
  currency?: string;
  name?: string;
  description?: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

export interface PaymentResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export class PaymentService {
  private static loadRazorpayScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      // Check if Razorpay is already loaded
      if (window.Razorpay) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('Failed to load Razorpay script'));
      document.head.appendChild(script);
    });
  }

  static async initializePayment(options: PaymentOptions, onSuccess?: (payment: any) => void): Promise<void> {
    try {
      // Load Razorpay script if not already loaded
      await this.loadRazorpayScript();

      const paymentOptions = {
        key: config.razorpay.keyId,
        amount: options.amount * 100, // Convert to paise
        currency: options.currency || config.razorpay.currency,
        name: options.name || config.company.name,
        description: options.description || config.company.description,
        handler: function(response: PaymentResponse) {
          if (config.isDevelopment) {
            console.log('Payment successful:', response);
          }
          // Call the onSuccess callback if provided
          if (onSuccess) {
            onSuccess({
              ...response,
              amount: paymentOptions.amount,
              email: options.prefill?.email,
              contact: options.prefill?.contact,
              date: new Date().toISOString(),
            });
          }
        },
        prefill: {
          name: options.prefill?.name || '',
          email: options.prefill?.email || config.contact.email,
          contact: options.prefill?.contact || config.contact.phone,
        },
        theme: {
          color: options.theme?.color || config.razorpay.themeColor,
        },
        modal: {
          ondismiss: function() {
            if (config.isDevelopment) {
              console.log('Payment modal closed');
            }
          }
        },
        notes: {
          address: 'QIKK SPACE Corporate Office'
        },
      };

      // @ts-ignore
      const rzp = new window.Razorpay(paymentOptions);
      rzp.open();
    } catch (error) {
      console.error('Payment initialization failed:', error);
      if (config.isDevelopment) {
        alert('Failed to initialize payment. Please try again.');
      }
    }
  }

  static async verifyPayment(paymentId: string, orderId: string, signature: string): Promise<boolean> {
    // This would typically be done on your backend
    // For now, we'll return true as a placeholder
    if (config.isDevelopment) {
      console.log('Payment verification:', { paymentId, orderId, signature });
    }
    return true;
  }

  static formatAmount(amount: number): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  }
} 