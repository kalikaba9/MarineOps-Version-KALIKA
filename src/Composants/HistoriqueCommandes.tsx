import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function HistoriqueCommandes() {
  const commandes = [
    {
      id: 'ORD-001',
      date: '15/11/2025',
      lieu: 'Marseille',
      statut: 'Livré',
      statutStyle: 'bg-white border border-[#000080] text-gray-900',
      items: [
        { nom: 'Ravitaillement Alimentaire', quantite: 1 },
        { nom: 'Transport Équipage', quantite: 2 }
      ],
      total: '545€'
    },
    {
      id: 'ORD-002',
      date: '17/11/2025',
      lieu: 'Nice',
      statut: 'En préparation',
      statutStyle: 'bg-[#000080] text-white',
      items: [
        { nom: 'Maintenance Générale', quantite: 1 }
      ],
      total: '350€'
    },
    {
      id: 'ORD-003',
      date: '18/11/2025',
      lieu: 'Marseille',
      statut: 'En attente',
      statutStyle: 'bg-white border border-[#000080] text-gray-900',
      items: [
        { nom: 'Carburant Maritime', quantite: 500 }
      ],
      total: '725€'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-3xl tet mb-2">Historique des Commandes</h1>
          <p className="text-gray-600">Suivez l'état de vos commandes en temps réel</p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {commandes.map((commande) => (
            <div 
              key={commande.id} 
              className="bg-white rounded-lg shadow-sm border-l-4 p-6"
              style={{ borderLeftColor: '#000080' }}
            >
              {/* Order Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{commande.id}</h2>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{commande.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{commande.lieu}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-4 py-2 rounded-full text-sm  ${commande.statutStyle}`}>
                  {commande.statut}
                </span>
              </div>

              {/* Order Items */}
              <div className="mb-4 space-y-2">
                {commande.items.map((item, index) => (
                  <div key={index} className="text-gray-700">
                    {item.nom} <span className="text-gray-500">x{item.quantite}</span>
                  </div>
                ))}
              </div>

              {/* Order Total */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-lg font-bold" style={{ color: '#000080' }}>{commande.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}