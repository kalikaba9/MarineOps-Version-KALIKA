import React from 'react'
import { Ship, Shield, Zap, ArrowRight, TrendingUp } from 'lucide-react';
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function HeroSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Ship,
      title: t('features.hub.title'),
      description: t('features.hub.desc'),
      color: "cyan",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
      borderColor: "#000080"
    },
    {
      icon: Shield,
      title: t('features.quality.title'),
      description: t('features.quality.desc'),
      color: "blue",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "#000080"
    },
    {
      icon: Zap,
      title: t('features.speed.title'),
      description: t('features.speed.desc'),
      color: "indigo",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
      borderColor: "#000080"
    },
    {
      icon: TrendingUp,
      title: t('features.transparency.title'),
      description: t('features.transparency.desc'),
      color: "purple",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "#000080"
    }
  ];

  
  return (
    <>
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background with maritime image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070')",
        }}
      >
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.7) 0%, rgba(0, 0, 80, 0.3) 50%, rgba(0, 0, 60, 0.6) 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-24 max-w-7xl">
        {/* Badge */}
        <div className="mb-8">
          <div 
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-white border border-cyan-400/30"
            style={{ backgroundColor: 'rgba(0, 180, 216, 0.15)' }}
          >
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-sm md:text-base font-light tracking-wide">
              {t('hero.badge')}
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {t('hero.title')}<br />
          {t('hero.title.maritime')} <span className="text-cyan-400">Bly Market</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl font-light leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <NavLink to="/services">
            <button 
            className="btnHero group px-8 py-4  hover:bg-blue-800 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
            >
              <span className="text-lg">{t('hero.cta.explore')}</span>
            </button>
          </NavLink>
            
          <NavLink to="/apropos">
          <button 
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 shadow-lg"
          >
            <span className="text-lg">{t('hero.cta.learn')}</span>
          </button>
          </NavLink>
        </div>
      </div>
    </div>

<div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-3xl tet mb-4">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
               <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ borderTop: `4px solid ${feature.borderColor}` }}
              >
                {/* Icon */}
                <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tete mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>

<div 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{
        background: ' #000080'
      }}
    >
      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold text-white mb-8 leading-tight">
          {t('cta.title')}
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
          {t('cta.subtitle')}
        </p>

        {/* CTA Button */}
        <button 
          className="group inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-gray-50 text-[#000080] font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <span>{t('cta.button')}</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
    </>
  )
}

export default HeroSection




// import React from 'react'
// import { Ship, Shield, Zap,ArrowRight , TrendingUp  } from 'lucide-react';
// import { NavLink, useNavigate } from "react-router-dom";

// function HeroSection() {

// const features = [
//     {
//       icon: Ship,
//       title: "Guichet Unique",
//       description: "Tous vos services maritimes accessibles depuis une seule plateforme centralisée.",
//       color: "cyan",
//       bgColor: "bg-cyan-50",
//       iconColor: "text-cyan-600",
//       borderColor: "#000080"
//     },
//     {
//       icon: Shield,
//       title: "Contrôle Qualité",
//       description: "Prestataires vérifiés et services garantis pour une tranquillité d'esprit totale.",
//       color: "blue",
//       bgColor: "bg-blue-50",
//       iconColor: "text-blue-600",
//       borderColor: "#000080"
//     },
//     {
//       icon: Zap,
//       title: "Rapidité",
//       description: "Commandez en quelques clics et recevez vos services rapidement au port.",
//       color: "indigo",
//       bgColor: "bg-indigo-50",
//       iconColor: "text-indigo-600",
//       borderColor: "#000080"
//     },
//     {
//       icon: TrendingUp,
//       title: "Transparence",
//       description: "Facturation centralisée et traçabilité totale de toutes vos commandes.",
//       color: "purple",
//       bgColor: "bg-purple-50",
//       iconColor: "text-purple-600",
//       borderColor: "#000080"
//     }
//   ];

  
//   return (
//     <>
//     <div className="relative min-h-screen w-full overflow-hidden">
//       {/* Background with maritime image overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070')",
//         }}
//       >
//         {/* Gradient overlay */}
//         <div 
//           className="absolute inset-0"
//           style={{
//             background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.7) 0%, rgba(0, 0, 80, 0.3) 50%, rgba(0, 0, 60, 0.6) 100%)'
//             // background: 'linear-gradient(135deg, rgba(0, 0, 128, 0.8) 0%, rgba(0, 0, 80, 0.7) 50%, rgba(0, 0, 60, 0.6) 100%)'
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-24 max-w-7xl">
//         {/* Badge */}
//         <div className="mb-8">
//           <div 
//             className="inline-flex items-center gap-3 px-5 py-3 rounded-full text-white border border-cyan-400/30"
//             style={{ backgroundColor: 'rgba(0, 180, 216, 0.15)' }}
//           >
//             <Zap className="w-5 h-5 text-cyan-400" />
//             <span className="text-sm md:text-base font-light tracking-wide">
//               Plateforme de Services Maritimes
//             </span>
//           </div>
//         </div>

//         {/* Main Heading */}
//         <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//           Simplifiez vos opérations<br />
//           maritimes avec <span className="text-cyan-400">Bly Market</span>
//           {/* <span className="text-white/50 hover:text-white/80 transition-colors duration-300">
//            MarineOps
//            </span> */}

//         </h1>

//         {/* Subheading */}
//         <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl font-light leading-relaxed">
//           Bly Market est une société spécialisée dans l'avitaillement maritime. Nous garantissons 
//           les meilleurs produits et services à des prix compétitifs.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4">
        
//           <NavLink to="/services">
//             <button 
//             className="btnHero group px-8 py-4  hover:bg-blue-800 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
//             >
//               <span className="text-lg">Explorez nos services</span>
//             </button>
//           </NavLink>
            
           
//           <NavLink to="/apropos">
//           <button 
//             className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-sm border border-white/20 transition-all duration-300 shadow-lg"
//           >
//             <span className="text-lg">En savoir plus</span>
//           </button>
//           </NavLink>
//         </div>
//       </div>
//     </div>

// <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-[1200px] mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-3xl tet mb-4">
//             Pourquoi choisir Bly Market ?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Bly Market est reconnue pour sa fiabilité et sa capacité à 
//             répondre aux demandes des clients dans un délais qui défie toute concurrence.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//                <div
//                 key={index}
//                 className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
//                 style={{ borderTop: `4px solid ${feature.borderColor}` }}
//               >
//                 {/* Icon */}
//                 <div className={`${feature.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
//                   <Icon className={`w-7 h-7 ${feature.iconColor}`} />
//                 </div>

//                 {/* Title */}
//                 <h3 className="text-xl font-bold tete mb-3">
//                   {feature.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>

// <div 
//       className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
//       style={{
//         background: ' #000080'
//       }}
//     >
//       {/* Content Container */}
//       <div className="max-w-4xl mx-auto text-center">
//         {/* Main Heading */}
//         <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold text-white mb-8 leading-tight">
//           Prêt à simplifier vos opérations ?
//         </h2>

//         {/* Subheading */}
//         <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
//           Rejoignez les équipages qui font confiance à MarineOps pour leurs services maritimes.
//         </p>

//         {/* CTA Button */}
//         <button 
//           className="group inline-flex items-center gap-3 px-10 py-5 bg-white hover:bg-gray-50 text-[#000080] font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
//         >
//           <span>Commencer maintenant</span>
//           <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//         </button>
//       </div>

    
//     </div>
//     </>
//   )
// }

// export default HeroSection