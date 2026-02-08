export const getWhatsAppLink = (message?: string): string => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210';
  const defaultMessage = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || "Hi, I'm interested in NAIRmatchu matrimony services";
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
