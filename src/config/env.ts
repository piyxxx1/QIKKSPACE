// Environment Configuration
export const config = {
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