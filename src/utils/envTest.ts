// Environment Variables Test Utility
export const testEnvironmentVariables = () => {
  // Only run in development
  if (!import.meta.env.DEV) {
    return true;
  }

  console.log('🔍 Testing Environment Variables...');
  
  const envVars = {
    'VITE_RAZORPAY_KEY_ID': import.meta.env.VITE_RAZORPAY_KEY_ID,
    'VITE_RAZORPAY_KEY_SECRET': import.meta.env.VITE_RAZORPAY_KEY_SECRET,
    'VITE_CONTACT_EMAIL': import.meta.env.VITE_CONTACT_EMAIL,
    'VITE_CONTACT_PHONE': import.meta.env.VITE_CONTACT_PHONE,
    'VITE_COMPANY_NAME': import.meta.env.VITE_COMPANY_NAME,
    'VITE_CURRENCY': import.meta.env.VITE_CURRENCY,
  };

  console.log('📋 Environment Variables Status:');
  Object.entries(envVars).forEach(([key, value]) => {
    const status = value ? '✅' : '❌';
    console.log(`${status} ${key}: ${value || 'NOT SET'}`);
  });

  // Check if Razorpay key is properly set
  const hasRazorpayKey = !!import.meta.env.VITE_RAZORPAY_KEY_ID;
  console.log(`\n🎯 Razorpay Key Status: ${hasRazorpayKey ? '✅ READY' : '❌ MISSING'}`);
  
  return hasRazorpayKey;
}; 