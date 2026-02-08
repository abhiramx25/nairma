export const getWhatsAppLink = (message?: string): string => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!;
  const encodedMessage = encodeURIComponent(
    message || "Hi! I want to start my matrimony journey with NAIRmatchu"
  );

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
