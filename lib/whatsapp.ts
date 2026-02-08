export const getWhatsAppLink = (message?: string): string => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918590595405';
  const defaultMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hi, I want to start my matrimony journey with NAIRmatchu";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};

export const whatsappMessages = {
  start: "Hi! I want to start my matrimony journey with NAIRmatchu",
  explore: "Hi! I want to explore NAIRmatchu's free plan",
  upgrade: "Hi! I'm interested in upgrading to NAIRmatchu Plus",
  contact: "Hi! I have a question about NAIRmatchu",
  plans: "Hi! I want to know more about NAIRmatchu subscription plans",
};
