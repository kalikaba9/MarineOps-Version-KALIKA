import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from './Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
    <div className="pt-16">
   <div className="max-w-6xl mx-auto">
  {/* Header */}
  <div className="mb-12 pt-16">
    <h1 className="text-center text-4xl md:text-3xl tet mb-4">
      Contactez-nous
    </h1>
    <p className="text-gray-600 text-lg text-center">
      Notre équipe est à votre disposition 24/7 pour répondre à toutes vos questions.
    </p>
  </div>

  {/* Content Flex */}
  <div className="flex flex-col lg:flex-row gap-8">
    {/* Left Column */}
    <div className="flex-1 flex flex-col gap-8">
      {/* Contact Information */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 flex-1">
        <h2 className="text-xl font-bold tete mb-2">Informations de contact</h2>
        <p className="text-gray-600 mb-8">Plusieurs moyens de nous joindre</p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900">+33 1 23 45 67 89</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900">support@maritimeservices.com</span>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 text-gray-600" />
            <span className="text-gray-900">Port de Marseille, France</span>
          </div>
        </div>
      </div>

      {/* Emergency Support */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 flex-1">
        <h2 className="text-xl font-bold tete mb-4">Support d'urgence</h2>
        <p className="text-gray-600 leading-relaxed">
          Pour toute urgence concernant une livraison en cours, veuillez utiliser notre ligne prioritaire disponible dans votre espace commande.
        </p>
      </div>
    </div>

    {/* Right Column - Contact Form */}
    <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8 flex flex-col">
      <h2 className="text-xl font-bold tete mb-2">Envoyez-nous un message</h2>
      <p className="text-gray-600 mb-8">Remplissez le formulaire ci-dessous</p>

      <div className="space-y-6 flex-1">
        {/* Form Elements */}
        <div>
          <label className="block text-gray-900 font-medium mb-3">Sujet</label>
          <input
            type="text"
            name="subject"
            placeholder="Sujet de votre demande"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-900 font-medium mb-3">Email</label>
          <input
            type="email"
            name="email"
            placeholder="votre@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <label className="block text-gray-900 font-medium mb-3">Message</label>
          <textarea
            name="message"
            placeholder="Comment pouvons-nous vous aider ?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none flex-1"
          ></textarea>
        </div>

        <button className="w-full bg-[#000080] text-white py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          Envoyer le message
        </button>
      </div>
    </div>
  </div>
</div>
 </div>
    </>
  );
}
