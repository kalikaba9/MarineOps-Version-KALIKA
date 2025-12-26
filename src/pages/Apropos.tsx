import React from 'react';
import { CheckCircle, Globe , Shield, Zap, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../Composants/Navbar';

export default function Apropos() {
  const { t } = useTranslation();

const valeurs = [
    {
      icon: Shield,
      title: t('about.values.reliability'),
      description: t('about.values.reliability.desc')
    },
    {
      icon: Zap,
      title: t('about.values.efficiency'),
      description: t('about.values.efficiency.desc')
    },
    {
      icon: Users,
      title: t('about.values.transparency'),
      description: t('about.values.transparency.desc')
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
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.subtitle')}
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
                <h3 className="text-xl font-bold tete">{t('about.mission.title')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.mission.desc')}
              </p>
            </div>
            {/* Notre Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm flex-1 flex flex-col" style={{ borderLeft: '4px solid #000080' }}>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-8 h-8" style={{ color: '#000080' }} />
                <h3 className="text-xl font-bold tete">{t('about.vision.title')}</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t('about.vision.desc')}
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
          {t('about.values.title')}
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
          {t('about.howItWorks.title')}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">

          {/* Étape 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-[#000080] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">1</span>
            </div>
            <h3 className="text-xl font-bold tete">{t('about.step1.title')}</h3>
            <p className="text-gray-600">
              {t('about.step1.desc')}
            </p>
          </div>

          {/* Étape 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-[#000080] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">2</span>
            </div>
            <h3 className="text-xl font-bold tete">{t('about.step2.title')}</h3>
            <p className="text-gray-600">
              {t('about.step2.desc')}
            </p>
          </div>

          {/* Étape 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-[#000080] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">3</span>
            </div>
            <h3 className="text-xl font-bold tete">{t('about.step3.title')}</h3>
            <p className="text-gray-600">
              {t('about.step3.desc')}
            </p>
          </div>

          {/* Étape 4 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-[#000080] rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-semibold">4</span>
            </div>
            <h3 className="text-xl font-bold tete">{t('about.step4.title')}</h3>
            <p className="text-gray-600">
              {t('about.step4.desc')}
            </p>
          </div>

        </div>

      </div>
    </section>
    </>
  );
}