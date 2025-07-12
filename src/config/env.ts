// Environment Configuration
export const config = {
  // Environment
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,

  // Razorpay Configuration
  razorpay: {
    keyId: import.meta.env.VITE_RAZORPAY_KEY_ID || '',
    keySecret: import.meta.env.VITE_RAZORPAY_KEY_SECRET || '',
    currency: import.meta.env.VITE_CURRENCY || 'INR',
    themeColor: import.meta.env.VITE_PAYMENT_THEME_COLOR || '#3B82F6',
  },

  // Contact Information
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || '',
    phone: import.meta.env.VITE_CONTACT_PHONE || '',
  },

  // Company Information
  company: {
    name: import.meta.env.VITE_COMPANY_NAME || 'QIKK SPACE',
    description: import.meta.env.VITE_COMPANY_DESCRIPTION || 'Service Payment',
  },

  // EmailJS Configuration
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
};

// Validation function for required environment variables
export const validateEnvironment = () => {
  const requiredVars = [
    'VITE_RAZORPAY_KEY_ID',
    'VITE_CONTACT_EMAIL',
    'VITE_CONTACT_PHONE',
  ];

  const missingVars = requiredVars.filter(
    (varName) => !import.meta.env[varName]
  );

  if (missingVars.length > 0 && import.meta.env.PROD) {
    console.warn(
      `Missing required environment variables: ${missingVars.join(', ')}`
    );
  }

  return missingVars.length === 0;
};