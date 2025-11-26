import React from 'react';
import { CheckCircle, Globe , Shield, Zap, Users } from 'lucide-react';
import Navbar from '../Composants/Navbar';

export default function Apropos() {
const valeurs = [
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Des services vérifiés et un contrôle qualité rigoureux"
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Une plateforme intuitive pour gagner du temps"
    },
    {
      icon: Users,
      title: "Transparence",
      description: "Traçabilité totale et facturation centralisée"
    }
  ];

  return (
    <> 
    <Navbar /> 
    <div className="pt-16 apropos-page">
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1000px] mx-auto">
        {/* Section Header */}  
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-3xl tet mb-4">
            À propos de MarineOps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une plateforme innovante dédiée à l'optimisation logistique maritime
          </p>
        </div>
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Left Column - Mission & Vision */}
          <div className="flex flex-col space-y-8">
            {/* Notre Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex-1 flex flex-col" style={{ borderLeft: '4px solid #000080' }}>
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle className="w-8 h-8" style={{ color: '#000080' }} />
                <h3 className="text-xl font-bold tete">Notre Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Révolutionner les services maritimes en offrant aux équipages une plateforme centralisée, simple et efficace pour commander tous leurs besoins à terre. Nous éliminons les intermédiaires et garantissons qualité et transparence.
              </p>
            </div>
            {/* Notre Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex-1 flex flex-col" style={{ borderLeft: '4px solid #000080' }}>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8" style={{ color: '#000080' }} />
                <h3 className="text-xl font-bold tete">Notre Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Devenir la référence mondiale en matière de services maritimes digitalisés, en connectant équipages et prestataires à travers un écosystème transparent et efficace.
              </p>
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="flex">
            <div className="rounded-2xl overflow-hidden shadow-lg w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070"
                alt="Port maritime"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

     <div className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-[1000px] rounded-3xl p-12" style={{ background: 'linear-gradient(135deg, #1a1a3e 0%, #000080 50%, #2a2a6e 100%)' }}>
        <h1 className="text-center text-4xl md:text-3xl tetValeur mb-20">
          Nos Valeurs
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valeurs.map((valeur, index) => {
            const Icon = valeur.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-18 h-18 rounded-full flex items-center justify-center mb-6 transition-transform hover:scale-110" 
                     style={{ backgroundColor: 'rgba(0, 128, 128, 0.3)' }}>
                  <Icon className="w-10 h-10" style={{ color: '#00CED1' }} strokeWidth={2} />
                </div>
                
                <h2 className="text-white mb-1 text-xl font-bold teteValeur">
                  {valeur.title}
                </h2>
                
                <p className="text-gray-300 text-sm font-size-3">
                  {valeur.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>

    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Titre */}
        <h2 className="text-4xl md:text-3xl tet text-center mb-12">
          Comment ça marche ?
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

          {/* Étape 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-[#000080] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">1</span>
            </div>
            <h3 className="text-xl font-bold tete">Parcourez</h3>
            <p className="text-gray-600">
              Explorez notre catalogue de<br />services
            </p>
          </div>

          {/* Étape 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-[#000080] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">2</span>
            </div>
            <h3 className="text-xl font-bold tete">Commandez</h3>
            <p className="text-gray-600">
              Ajoutez au panier et validez
            </p>
          </div>

          {/* Étape 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-[#000080] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">3</span>
            </div>
            <h3 className="text-xl font-bold tete">Suivez</h3>
            <p className="text-gray-600">
              Suivi en temps réel de votre<br />commande
            </p>
          </div>

          {/* Étape 4 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-[#000080] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">4</span>
            </div>
            <h3 className="text-xl font-bold tete">Recevez</h3>
            <p className="text-gray-600">
              Livraison au port à la date choisie
            </p>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}