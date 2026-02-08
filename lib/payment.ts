import { getWhatsAppLink } from './whatsapp';

export const initiatePayment = (planName: string, amount: number) => {
  if (typeof window === 'undefined') return;

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    amount: amount * 100, // Convert to paise
    currency: 'INR',
    name: 'NAIRmatchu',
    description: `${planName} Subscription`,
    image: '/logo.png',
    handler: function (response: any) {
      // Payment successful - redirect to WhatsApp
      const message = `Payment successful! Transaction ID: ${response.razorpay_payment_id}. Please activate my ${planName} subscription.`;
      window.location.href = getWhatsAppLink(message);
    },
    prefill: {
      name: '',
      email: '',
      contact: '',
    },
    theme: {
      color: '#8B1A1A',
    },
    modal: {
      ondismiss: function() {
        console.log('Payment cancelled');
      }
    }
  };

  const razorpay = new (window as any).Razorpay(options);
  razorpay.open();
};