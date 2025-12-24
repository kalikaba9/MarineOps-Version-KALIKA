
import React, { useState } from 'react';
import { Search, ChevronDown, Plus } from 'lucide-react';
import Navbar from './Navbar';

export default function CatalogueServices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes catégories');

  const services = [
    {
      id: 1,
      image: '/image/1.jpg',
      title: 'Maintenance Générale',
      category: 'Maintenance',
      description: 'Inspection et entretien du navire',
      price: '350€',
      unit: '/ intervention'
    },
    {
      id: 2,
      image: '/image/3.jpg',
      title: 'Eau Potable',
      category: 'Ravitaillement',
      description: 'Eau potable traitée et contrôlée',
      price: '3.5€',
      unit: '/ tonne'
    },
    {
      id: 3,
      image: '/image/2.jpg',
      title: 'Réparation Électrique',
      category: 'Maintenance',
      description: 'Réparation systèmes électriques et électroniques',
      price: '180€',
      unit: '/ heure'
    },
    {
      id: 4,
      image: '/image/4.jpg',
      title: 'Ravitaillement Alimentaire',
      category: 'Ravitaillement',
      description: 'Provisions alimentaires fraîches et sèches',
      price: '250€',
      unit: '/ commande'
    },
    {
      id: 5,
      image: '/image/5.jpg',
      title: 'Carburant Maritime',
      category: 'Ravitaillement',
      description: 'Diesel et essence marine de qualité',
      price: '1.45€',
      unit: '/ litre'
    },
    {
      id: 6,
      image: '/image/6.jpg',
      title: 'Transport Équipage',
      category: 'Transport',
      description: 'Navette port - ville - aéroport',
      price: '45€',
      unit: '/ trajet'
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
            Catalogue de Services
          </h1>
          <p className="text-gray-600 text-lg">
            Ne laissez pas un manque de ravitaillement mettre votre équipage en danger.
          </p>
          <p className="text-gray-600 text-lg">
            Sélectionnez les services dont vous avez besoin pour votre bateau.
          </p>
        </div>
      <div className="max-w-[1100px] mx-auto">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[300px] relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un service..."
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
              <option>Toutes catégories</option>
              <option>Maintenance</option>
              <option>Ravitaillement</option>
              <option>Transport</option>
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
                    Ajouter
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