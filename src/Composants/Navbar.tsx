import { useState } from "react";
import { FaAnchor } from "react-icons/fa";
import { FiShoppingCart, FiClipboard, FiMenu, FiX, FiGlobe } from "react-icons/fi";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  const currentLanguage = i18n.language === 'en' ? 'EN' : 'FR';

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4 px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <FaAnchor className="logoIcon text-3xl" />
          <h1 className="logo">Bly Market</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 bg-gray-100/70 px-8 py-2 rounded-2xl shadow-md">
          <NavLink to="/">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
                {t('nav.home')}
              </li>
            )}
          </NavLink>
          <NavLink to="/apropos">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
                {t('nav.about')}
              </li>
            )}
          </NavLink>
          <NavLink to="/services">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
                {t('nav.services')}
              </li>
            )}
          </NavLink>
          <NavLink to="/contact">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
                {t('nav.contact')}
              </li>
            )}
          </NavLink>
          <NavLink to="/panier">
            {({ isActive }) => (
              <li className={`cursor-pointer px-2 py-1 rounded flex items-center gap-1 ${isActive ? "active" : ""}`}>
                <FiShoppingCart /> {t('nav.cart')}
              </li>
            )}
          </NavLink>
        </ul>
        
        {/* Desktop Right Side - Language + Orders */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FiGlobe className="text-lg" />
              <span className="font-medium">{currentLanguage}</span>
            </button>
            
            {langMenuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                    i18n.language === 'fr' ? 'bg-blue-50 text-blue-600 font-medium' : ''
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                    i18n.language === 'en' ? 'bg-blue-50 text-blue-600 font-medium' : ''
                  }`}
                >
                  English
                </button>
              </div>
            )}
          </div>

          {/* Orders Button */}
          <button 
            className="btnNav flex items-center gap-2 border border-blue-800 px-5 py-2 rounded-xl transition"
            onClick={() => navigate("/commandes")}
          >
            <FiClipboard /> {t('nav.orders')}
          </button>
        </div>

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
                  {t('nav.home')}
                </li>
              )}
            </NavLink>
            <NavLink to="/apropos" className="w-full" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
                  {t('nav.about')}
                </li>
              )}
            </NavLink>
            <NavLink to="/services" className="w-full" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
                  {t('nav.services')}
                </li>
              )}
            </NavLink>
            <NavLink to="/contact" className="w-full" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
                  {t('nav.contact')}
                </li>
              )}
            </NavLink>
            <NavLink to="/panier" className="w-full" onClick={() => setMenuOpen(false)}>
              {({ isActive }) => (
                <li className={`cursor-pointer px-4 py-2 rounded w-full text-center flex items-center justify-center gap-1 ${isActive ? "active" : ""}`}>
                  <FiShoppingCart /> {t('nav.cart')}
                </li>
              )}
            </NavLink>
            
            {/* Mobile Language Selector */}
            <div className="w-full px-4 py-2">
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => {
                    changeLanguage('fr');
                    setMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    i18n.language === 'fr' 
                      ? 'bg-blue-800 text-white border-blue-800' 
                      : 'bg-white text-blue-800 border-blue-800 hover:bg-blue-50'
                  }`}
                >
                  FR
                </button>
                <button
                  onClick={() => {
                    changeLanguage('en');
                    setMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg border transition-colors ${
                    i18n.language === 'en' 
                      ? 'bg-blue-800 text-white border-blue-800' 
                      : 'bg-white text-blue-800 border-blue-800 hover:bg-blue-50'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <button 
              className="flex items-center gap-2 border border-blue-800 text-blue-800 px-5 py-2 rounded-xl hover:bg-blue-800 hover:text-white transition"
              onClick={() => {
                navigate("/commandes");
                setMenuOpen(false);
              }}
            >
              <FiClipboard /> {t('nav.orders')}
            </button>
          </ul>
        )}
      </nav>
    </>
  );
}




// import { useState } from "react";
// import { FaAnchor } from "react-icons/fa";
// import { FiShoppingCart, FiClipboard, FiMenu, FiX } from "react-icons/fi";
// import "./Navbar.css";
// import "./Navbar.css";
// import { NavLink, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm py-4 px-6 md:px-8 flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
//           <FaAnchor className="logoIcon text-3xl" />
//           <h1 className="logo">Bly Market</h1>
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 bg-gray-100/70 px-8 py-2 rounded-2xl shadow-md">
//           <NavLink to="/">
//             {({ isActive }) => (
//               <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
//                 Accueil
//               </li>
//             )}
//           </NavLink>
//           <NavLink to="/apropos">
//             {({ isActive }) => (
//               <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
//                 A propos
//               </li>
//             )}
//           </NavLink>
//           <NavLink to="/services">
//             {({ isActive }) => (
//               <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
//                 Services
//               </li>
//             )}
//           </NavLink>
//           <NavLink to="/contact">
//             {({ isActive }) => (
//               <li className={`cursor-pointer px-2 py-1 rounded ${isActive ? "active" : ""}`}>
//                 Contact
//               </li>
//             )}
//           </NavLink>
//           <NavLink to="/panier">
//             {({ isActive }) => (
//               <li className={`cursor-pointer px-2 py-1 rounded flex items-center gap-1 ${isActive ? "active" : ""}`}>
//                 <FiShoppingCart /> Panier
//               </li>
//             )}
//           </NavLink>
//         </ul>
        
//         {/* Commandes Button */}
//         <button 
//           className="btnNav hidden md:flex items-center gap-2 border border-blue-800 px-5 py-2 rounded-xl transition"
//           onClick={() => navigate("/commandes")}
//         >
//           <FiClipboard /> Commandes
//         </button>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? (
//               <FiX className="text-2xl text-blue-800" />
//             ) : (
//               <FiMenu className="text-2xl text-blue-800" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden">
//             <NavLink to="/" className="w-full" onClick={() => setMenuOpen(false)}>
//               {({ isActive }) => (
//                 <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
//                   Accueil
//                 </li>
//               )}
//             </NavLink>
//             <NavLink to="/apropos" className="w-full" onClick={() => setMenuOpen(false)}>
//               {({ isActive }) => (
//                 <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
//                   A propos
//                 </li>
//               )}
//             </NavLink>
//             <NavLink to="/services" className="w-full" onClick={() => setMenuOpen(false)}>
//               {({ isActive }) => (
//                 <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
//                   Services
//                 </li>
//               )}
//             </NavLink>
//             <NavLink to="/contact" className="w-full" onClick={() => setMenuOpen(false)}>
//               {({ isActive }) => (
//                 <li className={`cursor-pointer px-4 py-2 rounded w-full text-center ${isActive ? "active" : ""}`}>
//                   Contact
//                 </li>
//               )}
//             </NavLink>
//             <NavLink to="/panier" className="w-full" onClick={() => setMenuOpen(false)}>
//               {({ isActive }) => (
//                 <li className={`cursor-pointer px-4 py-2 rounded w-full text-center flex items-center justify-center gap-1 ${isActive ? "active" : ""}`}>
//                   <FiShoppingCart /> Panier
//                 </li>
//               )}
//             </NavLink>
//             <button 
//               className="flex items-center gap-2 border border-blue-800 text-blue-800 px-5 py-2 rounded-xl hover:bg-blue-800 hover:text-white transition"
//               onClick={() => {
//                 navigate("/commandes");
//                 setMenuOpen(false);
//               }}
//             >
//               <FiClipboard /> Commandes
//             </button>
//           </ul>
//         )}
//       </nav>
//     </>
//   );
// }