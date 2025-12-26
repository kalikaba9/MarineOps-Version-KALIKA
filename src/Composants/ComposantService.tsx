
import React, { useState } from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react';
import Navbar from './Navbar';
import { useTranslation } from 'react-i18next';

export default function CatalogueServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes catégories');
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      image: '/image/1.jpg',
      title: t('service.generalMaintenance'),
      category: t('services.maintenance'),
      description: t('service.generalMaintenance.desc'),
      price: '350€',
      unit: t('unit.intervention')
    },
    {
      id: 2,
      image: '/image/3.jpg',
      title: t('service.water'),
      category: t('services.supply'),
      description: t('service.water.desc'),
      price: '3.5€',
      unit: t('unit.ton')
    },
    {
      id: 3,
      image: '/image/2.jpg',
      title: t('service.electrical'),
      category: t('services.maintenance'),
      description: t('service.electrical.desc'),
      price: '180€',
      unit: t('unit.hour')
    },
    {
      id: 4,
      image: '/image/4.jpg',
      title: t('service.food'),
      category: t('services.supply'),
      description: t('service.food.desc'),
      price: '250€',
      unit: t('unit.order')
    },
    {
      id: 5,
      image: '/image/5.jpg',
      title: t('service.fuel'),
      category: t('services.supply'),
      description: t('service.fuel.desc'),
      price: '1.45€',
      unit: t('unit.liter')
    },
    {
      id: 6,
      image: '/image/6.jpg',
      title: t('service.crew'),
      category: t('services.transport'),
      description: t('service.crew.desc'),
      price: '45€',
      unit: t('unit.trip')
    }
  ];

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar />
    <div className='pt-16'>
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            {t('services.title')}
          </h1>
          <p className="text-gray-600 text-lg">
            {t('services.subtitle1')}
          </p>
          <p className="text-gray-600 text-lg">
            {t('services.subtitle2')}
          </p>
        </div>
      <div className="max-w-[1100px] mx-auto">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t('services.search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-0 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#000080]"
            />
          </div>
          <div className="relative min-w-[200px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full appearance-none px-4 py-3 bg-white border border-[#000080] rounded-xl text-[#000080] focus:outline-none focus:ring-2 focus:ring-[#000080] cursor-pointer"
            >
              <option>{t('services.allCategories')}</option>
              <option>{t('services.maintenance')}</option>
              <option>{t('services.supply')}</option>
              <option>{t('services.transport')}</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-4">
                  {service.category}
                </span>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold" style={{ color: '#0ea5e9' }}>
                      {service.price}
                    </span>
                    <span className="text-gray-500 text-sm ml-1">
                      {service.unit}
                    </span>
                  </div>
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
                    style={{ backgroundColor: '#000080' }}
                  >
                    <Plus className="w-5 h-5" />
                    {t('services.add')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}