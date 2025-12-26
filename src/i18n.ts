import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Fichiers de traduction
const resources = {
  fr: {
    translation: {
      // Navbar
      "nav.home": "Accueil",
      "nav.about": "A propos",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "nav.cart": "Panier",
      "nav.orders": "Commandes",

      // Hero Section
      "hero.badge": "Plateforme de Services Maritimes",
      "hero.title": "Simplifiez vos opérations",
      "hero.title.maritime": "maritimes avec",
      "hero.subtitle": "Bly Market est une société spécialisée dans l'avitaillement maritime. Nous garantissons les meilleurs produits et services à des prix compétitifs.",
      "hero.cta.explore": "Explorez nos services",
      "hero.cta.learn": "En savoir plus",

      // Features
      "features.title": "Pourquoi choisir Bly Market ?",
      "features.subtitle": "Bly Market est reconnue pour sa fiabilité et sa capacité à répondre aux demandes des clients dans un délais qui défie toute concurrence.",
      "features.hub.title": "Guichet Unique",
      "features.hub.desc": "Tous vos services maritimes accessibles depuis une seule plateforme centralisée.",
      "features.quality.title": "Contrôle Qualité",
      "features.quality.desc": "Prestataires vérifiés et services garantis pour une tranquillité d'esprit totale.",
      "features.speed.title": "Rapidité",
      "features.speed.desc": "Commandez en quelques clics et recevez vos services rapidement au port.",
      "features.transparency.title": "Transparence",
      "features.transparency.desc": "Facturation centralisée et traçabilité totale de toutes vos commandes.",

      // CTA Section
      "cta.title": "Prêt à simplifier vos opérations ?",
      "cta.subtitle": "Rejoignez les équipages qui font confiance à Bly Market pour leurs services maritimes.",
      "cta.button": "Commencer maintenant",

      // Services
      "services.title": "Catalogue de Services",
      "services.subtitle1": "Ne laissez pas un manque de ravitaillement mettre votre équipage en danger.",
      "services.subtitle2": "Sélectionnez les services dont vous avez besoin pour votre bateau.",
      "services.search": "Rechercher un service...",
      "services.allCategories": "Toutes catégories",
      "services.maintenance": "Maintenance",
      "services.supply": "Ravitaillement",
      "services.transport": "Transport",
      "services.add": "Ajouter",

      // Service Items
      "service.generalMaintenance": "Maintenance Générale",
      "service.generalMaintenance.desc": "Inspection et entretien du navire",
      "service.water": "Eau Potable",
      "service.water.desc": "Eau potable traitée et contrôlée",
      "service.electrical": "Réparation Électrique",
      "service.electrical.desc": "Réparation systèmes électriques et électroniques",
      "service.food": "Ravitaillement Alimentaire",
      "service.food.desc": "Provisions alimentaires fraîches et sèches",
      "service.fuel": "Carburant Maritime",
      "service.fuel.desc": "Diesel et essence marine de qualité",
      "service.crew": "Transport Équipage",
      "service.crew.desc": "Navette port - ville - aéroport",

      // Units
      "unit.intervention": "/ intervention",
      "unit.ton": "/ tonne",
      "unit.hour": "/ heure",
      "unit.order": "/ commande",
      "unit.liter": "/ litre",
      "unit.trip": "/ trajet",

      // Cart
      "cart.title": "Mon Panier",
      "cart.subtitle": "Vérifiez votre commande avant validation",
      "cart.empty": "Votre panier est vide",
      "cart.browse": "Parcourir les services",

      // Orders
      "orders.title": "Historique des Commandes",
      "orders.subtitle": "Suivez l'état de vos commandes en temps réel",
      "orders.status.delivered": "Livré",
      "orders.status.preparing": "En préparation",
      "orders.status.pending": "En attente",
      "orders.total": "Total",

      // Contact
      "contact.title": "Contactez-nous",
      "contact.subtitle": "Notre équipe est à votre disposition 24/7 pour répondre à toutes vos questions.",
      "contact.info.title": "Informations de contact",
      "contact.info.subtitle": "Plusieurs moyens de nous joindre",
      "contact.emergency.title": "Support d'urgence",
      "contact.emergency.desc": "Pour toute urgence concernant une livraison en cours, veuillez utiliser notre ligne prioritaire disponible dans votre espace commande.",
      "contact.form.title": "Envoyez-nous un message",
      "contact.form.subtitle": "Remplissez le formulaire ci-dessous",
      "contact.form.subject": "Sujet",
      "contact.form.subject.placeholder": "Sujet de votre demande",
      "contact.form.email": "Email",
      "contact.form.email.placeholder": "votre@email.com",
      "contact.form.message": "Message",
      "contact.form.message.placeholder": "Comment pouvons-nous vous aider ?",
      "contact.form.submit": "Envoyer le message",
      "contact.form.success": "Message envoyé avec succès",

      // About
      "about.title": "À propos de Bly Market",
      "about.subtitle": "Une plateforme innovante dédiée à l'optimisation logistique maritime",
      "about.mission.title": "Notre Mission",
      "about.mission.desc": "Révolutionner les services maritimes en offrant aux équipages une plateforme centralisée, simple et efficace pour commander tous leurs besoins à terre. Nous éliminons les intermédiaires et garantissons qualité et transparence.",
      "about.vision.title": "Notre Vision",
      "about.vision.desc": "Devenir la référence mondiale en matière de services maritimes digitalisés, en connectant équipages et prestataires à travers un écosystème transparent et efficace.",
      "about.values.title": "Nos Valeurs",
      "about.values.reliability": "Fiabilité",
      "about.values.reliability.desc": "Des services vérifiés et un contrôle qualité rigoureux",
      "about.values.efficiency": "Efficacité",
      "about.values.efficiency.desc": "Une plateforme intuitive pour gagner du temps",
      "about.values.transparency": "Transparence",
      "about.values.transparency.desc": "Traçabilité totale et facturation centralisée",
      "about.howItWorks.title": "Comment ça marche ?",
      "about.step1.title": "Parcourez",
      "about.step1.desc": "Explorez notre catalogue de services",
      "about.step2.title": "Commandez",
      "about.step2.desc": "Ajoutez au panier et validez",
      "about.step3.title": "Suivez",
      "about.step3.desc": "Suivi en temps réel de votre commande",
      "about.step4.title": "Recevez",
      "about.step4.desc": "Livraison au port à la date choisie",
    }
  },
  en: {
    translation: {
      // Navbar
      "nav.home": "Home",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.contact": "Contact",
      "nav.cart": "Cart",
      "nav.orders": "Orders",

      // Hero Section
      "hero.badge": "Maritime Services Platform",
      "hero.title": "Simplify your operations",
      "hero.title.maritime": "maritime with",
      "hero.subtitle": "Bly Market is a company specialized in maritime supply. We guarantee the best products and services at competitive prices.",
      "hero.cta.explore": "Explore our services",
      "hero.cta.learn": "Learn more",

      // Features
      "features.title": "Why choose Bly Market?",
      "features.subtitle": "Bly Market is recognized for its reliability and ability to meet customer demands in record time.",
      "features.hub.title": "One-Stop Shop",
      "features.hub.desc": "All your maritime services accessible from a single centralized platform.",
      "features.quality.title": "Quality Control",
      "features.quality.desc": "Verified providers and guaranteed services for total peace of mind.",
      "features.speed.title": "Speed",
      "features.speed.desc": "Order in a few clicks and receive your services quickly at the port.",
      "features.transparency.title": "Transparency",
      "features.transparency.desc": "Centralized billing and full traceability of all your orders.",

      // CTA Section
      "cta.title": "Ready to simplify your operations?",
      "cta.subtitle": "Join the crews who trust Bly Market for their maritime services.",
      "cta.button": "Get started now",

      // Services
      "services.title": "Services Catalog",
      "services.subtitle1": "Don't let a lack of supplies put your crew in danger.",
      "services.subtitle2": "Select the services you need for your boat.",
      "services.search": "Search for a service...",
      "services.allCategories": "All categories",
      "services.maintenance": "Maintenance",
      "services.supply": "Supply",
      "services.transport": "Transport",
      "services.add": "Add",

      // Service Items
      "service.generalMaintenance": "General Maintenance",
      "service.generalMaintenance.desc": "Ship inspection and maintenance",
      "service.water": "Drinking Water",
      "service.water.desc": "Treated and controlled drinking water",
      "service.electrical": "Electrical Repair",
      "service.electrical.desc": "Electrical and electronic systems repair",
      "service.food": "Food Supply",
      "service.food.desc": "Fresh and dry food provisions",
      "service.fuel": "Marine Fuel",
      "service.fuel.desc": "Quality marine diesel and gasoline",
      "service.crew": "Crew Transport",
      "service.crew.desc": "Shuttle port - city - airport",

      // Units
      "unit.intervention": "/ intervention",
      "unit.ton": "/ ton",
      "unit.hour": "/ hour",
      "unit.order": "/ order",
      "unit.liter": "/ liter",
      "unit.trip": "/ trip",

      // Cart
      "cart.title": "My Cart",
      "cart.subtitle": "Check your order before validation",
      "cart.empty": "Your cart is empty",
      "cart.browse": "Browse services",

      // Orders
      "orders.title": "Order History",
      "orders.subtitle": "Track the status of your orders in real time",
      "orders.status.delivered": "Delivered",
      "orders.status.preparing": "In preparation",
      "orders.status.pending": "Pending",
      "orders.total": "Total",

      // Contact
      "contact.title": "Contact us",
      "contact.subtitle": "Our team is available 24/7 to answer all your questions.",
      "contact.info.title": "Contact information",
      "contact.info.subtitle": "Multiple ways to reach us",
      "contact.emergency.title": "Emergency Support",
      "contact.emergency.desc": "For any emergency regarding an ongoing delivery, please use our priority line available in your order area.",
      "contact.form.title": "Send us a message",
      "contact.form.subtitle": "Fill out the form below",
      "contact.form.subject": "Subject",
      "contact.form.subject.placeholder": "Subject of your request",
      "contact.form.email": "Email",
      "contact.form.email.placeholder": "your@email.com",
      "contact.form.message": "Message",
      "contact.form.message.placeholder": "How can we help you?",
      "contact.form.submit": "Send message",
      "contact.form.success": "Message sent successfully",

      // About
      "about.title": "About Bly Market",
      "about.subtitle": "An innovative platform dedicated to maritime logistics optimization",
      "about.mission.title": "Our Mission",
      "about.mission.desc": "Revolutionize maritime services by offering crews a centralized, simple and efficient platform to order all their needs on land. We eliminate intermediaries and guarantee quality and transparency.",
      "about.vision.title": "Our Vision",
      "about.vision.desc": "Become the global reference in digitalized maritime services, connecting crews and providers through a transparent and efficient ecosystem.",
      "about.values.title": "Our Values",
      "about.values.reliability": "Reliability",
      "about.values.reliability.desc": "Verified services and rigorous quality control",
      "about.values.efficiency": "Efficiency",
      "about.values.efficiency.desc": "An intuitive platform to save time",
      "about.values.transparency": "Transparency",
      "about.values.transparency.desc": "Full traceability and centralized billing",
      "about.howItWorks.title": "How does it work?",
      "about.step1.title": "Browse",
      "about.step1.desc": "Explore our services catalog",
      "about.step2.title": "Order",
      "about.step2.desc": "Add to cart and validate",
      "about.step3.title": "Track",
      "about.step3.desc": "Real-time tracking of your order",
      "about.step4.title": "Receive",
      "about.step4.desc": "Delivery to the port on the chosen date",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;