// lib/whatsapp.ts

export const whatsappMessages = {
  start: "Hi! I want to start my matrimony journey with NAIRmatchu",
  explore: "Hi! I want to explore NAIRmatchu free plan",
  upgrade: "Hi! I want to upgrade to NAIRmatchu Plus",
  contact: "Hi! I have a question about NAIRmatchu",
  plans: "Hi! I want to know more about NAIRmatchu subscription plans",
};

export const getWhatsAppLink = (message?: string): string => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!phoneNumber) {
    throw new Error("NEXT_PUBLIC_WHATSAPP_NUMBER is missing");
  }

  const encodedMessage = encodeURIComponent(
    message || whatsappMessages.start
  );

  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};
