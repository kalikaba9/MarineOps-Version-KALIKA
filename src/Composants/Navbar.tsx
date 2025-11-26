import { useState } from "react";
import { FaAnchor } from "react-icons/fa";
import { FiShoppingCart, FiClipboard, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4 px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <FaAnchor className="logoIcon text-3xl" />
          <h1 className="logo">MarineOps</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 bg-gray-100/70 px-8 py-2 rounded-2xl shadow-md">
          <NavLink to="/">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
                Accueil
              </li>
            )}
          </NavLink>
          <NavLink to="/apropos">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
                A propos
              </li>
            )}
          </NavLink>
          <NavLink to="/services">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
                Services
              </li>
            )}
          </NavLink>
          <NavLink to="/contact">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
                Contact
              </li>
            )}
          </NavLink>
          <NavLink to="/panier">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded flex items-center gap-1 ${isActive ? "active" : ""}`}>
                <FiShoppingCart /> Panier
              </li>
            )}
          </NavLink>
        </ul>

        {/* Commandes Button */}
        <button 
          className="btnNav hidden md:flex items-center gap-2 border border-blue-800 px-5 py-2 rounded-xl transition"
          onClick={() => navigate("/commandes")}
        >
          <FiClipboard /> Commandes
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX className="text-2xl text-blue-800" />
            ) : (
              <FiMenu className="text-2xl text-blue-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
            <NavLink to="/" className="w-full" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
                  Accueil
                </li>
              )}
            </NavLink>
            <NavLink to="/apropos" className="w-full" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
                  A propos
                </li>
              )}
            </NavLink>
            <NavLink to="/services" className="w-full" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
                  Services
                </li>
              )}
            </NavLink>
            <NavLink to="/contact" className="w-full" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
                  Contact
                </li>
              )}
            </NavLink>
            <NavLink to="/panier" className="w-full" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <li className={`cursor-pointer px-4 py-2 rounded w-full text-center flex items-center justify-center gap-1 ${isActive ? "active" : ""}`}>
                  <FiShoppingCart /> Panier
                </li>
              )}
            </NavLink>
            <button 
              className="flex items-center gap-2 border border-blue-800 text-blue-800 px-5 py-2 rounded-xl hover:bg-blue-800 hover:text-white transition"
              onClick={() => {
                navigate("/commandes");
                setMenuOpen(false);
              }}
            >
              <FiClipboard /> Commandes
            </button>
          </ul>
        )}
      </nav>
    </>
  );
}