export type Language = 'fr' | 'en';

export interface TranslationKeys {
  // Navbar
  home: string;
  about: string;
  services: string;
  contact: string;
  cart: string;
  orders: string;
  
  // Page Contact
  contactUs: string;
  contactSubtitle: string;
  contactInfo: string;
  contactInfoSubtitle: string;
  emergencySupport: string;
  emergencySupportText: string;
  sendMessage: string;
  fillForm: string;
  subject: string;
  subjectPlaceholder: string;
  email: string;
  emailPlaceholder: string;
  message: string;
  messagePlaceholder: string;
  sendButton: string;
  sending: string;
  successMessage: string;
  errorMessage: string;
  requiredFields: string;
}

export const translations: Record<Language, TranslationKeys> = {
  fr: {
    // Navbar
    home: "Accueil",
    about: "A propos",
    services: "Services",
    contact: "Contact",
    cart: "Panier",
    orders: "Commandes",
    
    // Page Contact
    contactUs: "Contactez-nous",
    contactSubtitle: "Notre équipe est à votre disposition 24/7 pour répondre à toutes vos questions.",
    contactInfo: "Informations de contact",
    contactInfoSubtitle: "Plusieurs moyens de nous joindre",
    emergencySupport: "Support d'urgence",
    emergencySupportText: "Pour toute urgence concernant une livraison en cours, veuillez utiliser notre ligne prioritaire disponible dans votre espace commande.",
    sendMessage: "Envoyez-nous un message",
    fillForm: "Remplissez le formulaire ci-dessous",
    subject: "Sujet",
    subjectPlaceholder: "Sujet de votre demande",
    email: "Email",
    emailPlaceholder: "votre@email.com",
    message: "Message",
    messagePlaceholder: "Comment pouvons-nous vous aider ?",
    sendButton: "Envoyer le message",
    sending: "Envoi en cours...",
    successMessage: "Message envoyé avec succès !",
    errorMessage: "Erreur lors de l'envoi. Veuillez réessayer.",
    requiredFields: "Veuillez remplir tous les champs."
  },
  en: {
    // Navbar
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    cart: "Cart",
    orders: "Orders",
    
    // Page Contact
    contactUs: "Contact Us",
    contactSubtitle: "Our team is available 24/7 to answer all your questions.",
    contactInfo: "Contact Information",
    contactInfoSubtitle: "Multiple ways to reach us",
    emergencySupport: "Emergency Support",
    emergencySupportText: "For any emergency regarding an ongoing delivery, please use our priority line available in your order space.",
    sendMessage: "Send us a message",
    fillForm: "Fill out the form below",
    subject: "Subject",
    subjectPlaceholder: "Subject of your request",
    email: "Email",
    emailPlaceholder: "your@email.com",
    message: "Message",
    messagePlaceholder: "How can we help you?",
    sendButton: "Send message",
    sending: "Sending...",
    successMessage: "Message sent successfully!",
    errorMessage: "Error sending message. Please try again.",
    requiredFields: "Please fill in all fields."
  }
};