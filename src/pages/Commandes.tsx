import React from 'react'
import HistoriqueCommandes from '../Composants/HistoriqueCommandes'
import Navbar from '../Composants/Navbar'

function Commandes() {
  return (
    <>
    <Navbar />
    <div className="pt-16">
        <HistoriqueCommandes />
    </div>
    </>
  )
}

export default Commandes