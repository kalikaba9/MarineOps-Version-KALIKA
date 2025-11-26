import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Navbar from '../Composants/Navbar';
import { Link } from 'react-router-dom';

export default function MonPanier() {
  return (
    <>
    <Navbar/>
    <div className="pt-16">
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-3xl tet mb-2">Mon Panier</h1>
          <p className="text-gray-600">Vérifiez votre commande avant validation</p>
        </div>

        {/* Empty Cart */}
        <div className="bg-white rounded-lg shadow-sm p-12">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Cart Icon */}
            <div className="mb-6">
              <ShoppingCart className="w-24 h-24 text-gray-300" strokeWidth={1.5} />
            </div>

            {/* Empty Message */}
            <h2 className="text-xl font-medium text-gray-900 mb-2">
              Votre panier est vide
            </h2>

            {/* Browse Button */}
            <Link to="/services">
            <button className="mt-6 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
              Parcourir les services
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}