import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResponsiveNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef();

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close any open dropdowns when toggling menu
    setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-gradient-to-r from-white via-blue-50 to-cyan-50 shadow-xl sticky top-0 z-50 backdrop-blur-sm border-b border-cyan-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" legacyBehavior>
            <a className="text-gray-800 text-xl md:text-2xl font-bold group" onClick={closeMenu}>
              <div className="flex items-center">
                <Image 
                  src="/images/Afiyan_07122023-02.png" 
                  alt="AFIYAN IT Logo" 
                  width={120} 
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                  priority
                />
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center" ref={dropdownRef}>
            <Link href="/" legacyBehavior>
              <a className="relative px-4 py-2 text-cyan-600 transition-all font-medium group border-b-2 border-cyan-500">
                <span className="relative z-10">Home</span>
              </a>
            </Link>

            {/* Services Dropdown */}
            <div
              className="dropdown relative"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center focus:outline-none"
                onClick={() => handleDropdown('services')}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'services'}
                type="button"
              >
                <span className="relative z-10">Services</span>
                <svg className={`w-4 h-4 ml-1 relative z-10 transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </button>
              <div
                className={`dropdown-content-professional absolute left-0 mt-2 min-w-[260px] bg-white rounded-xl shadow-lg border border-cyan-100 z-50 ${openDropdown === 'services' ? '' : 'hidden'}`}
              >
                <a href="#consulting" className="dropdown-item-professional">
                  <span className="text-emerald-600 mr-3">🎯</span>
                  <div className="font-medium">Strategic Consulting</div>
                </a>
                <a href="#implementation" className="dropdown-item-professional">
                  <span className="text-blue-600 mr-3">⚙️</span>
                  <div className="font-medium">Implementation Services</div>
                </a>
                <a href="#training" className="dropdown-item-professional">
                  <span className="text-amber-600 mr-3">📖</span>
                  <div className="font-medium">Training & Enablement</div>
                </a>
                <a href="#support" className="dropdown-item-professional">
                  <span className="text-red-600 mr-3">🛠️</span>
                  <div className="font-medium">Managed Services</div>
                </a>
              </div>
            </div>

            {/* Products Dropdown */}
            <div
              className="dropdown relative"
              onMouseEnter={() => setOpenDropdown('products')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 transition-all font-medium group flex items-center focus:outline-none"
                onClick={() => handleDropdown('products')}
                aria-haspopup="true"
                aria-expanded={openDropdown === 'products'}
                type="button"
              >
                <span className="relative z-10">Products</span>
                <svg className={`w-4 h-4 ml-1 relative z-10 transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-0"></div>
              </button>
              <div className={`dropdown-content-professional absolute left-0 mt-2 min-w-[220px] bg-white rounded-xl shadow-lg border border-cyan-100 z-50 ${openDropdown === 'products' ? '' : 'hidden'}`}>
                <Link href="/data-governance" legacyBehavior>
                  <a className="dropdown-item-professional flex items-center">
                    <span className="mr-3" style={{width: 28, height: 28}}>
                      <Image src="/images/DataMind.png" alt="Data Mind" width={28} height={28} className="object-contain" />
                    </span>
                    <div className="font-medium">Data Mind</div>
                  </a>
                </Link>
              </div>
            </div>

            <a href="#contact" className="relative px-4 py-2 text-white bg-cyan-600 hover:bg-cyan-700 transition-all font-medium rounded-full shadow-md flex items-center">
              <span className="relative z-10">Contact Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 bg-transparent border-none cursor-pointer focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-out my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-2 py-4 bg-white rounded-lg shadow-lg border border-cyan-100 mt-2">
            <Link href="/" legacyBehavior>
              <a className="block px-4 py-3 text-cyan-600 font-medium border-l-4 border-cyan-500 bg-cyan-50" onClick={closeMenu}>
                Home
              </a>
            </Link>

            {/* Mobile Services */}
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:text-cyan-600 transition-all font-medium focus:outline-none"
                onClick={() => handleDropdown('services-mobile')}
                aria-expanded={openDropdown === 'services-mobile'}
              >
                <span>Services</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'services-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === 'services-mobile' ? 'max-h-64' : 'max-h-0'}`}>
                <div className="bg-gray-50 px-6 py-2 space-y-2">
                  <a href="#consulting" className="block py-2 text-gray-600 hover:text-cyan-600 transition-colors" onClick={closeMenu}>
                    🎯 Strategic Consulting
                  </a>
                  <a href="#implementation" className="block py-2 text-gray-600 hover:text-cyan-600 transition-colors" onClick={closeMenu}>
                    ⚙️ Implementation Services
                  </a>
                  <a href="#training" className="block py-2 text-gray-600 hover:text-cyan-600 transition-colors" onClick={closeMenu}>
                    📖 Training & Enablement
                  </a>
                  <a href="#support" className="block py-2 text-gray-600 hover:text-cyan-600 transition-colors" onClick={closeMenu}>
                    🛠️ Managed Services
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Products */}
            <div className="border-b border-gray-100">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:text-cyan-600 transition-all font-medium focus:outline-none"
                onClick={() => handleDropdown('products-mobile')}
                aria-expanded={openDropdown === 'products-mobile'}
              >
                <span>Products</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${openDropdown === 'products-mobile' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openDropdown === 'products-mobile' ? 'max-h-32' : 'max-h-0'}`}>
                <div className="bg-gray-50 px-6 py-2">
                  <Link href="/data-governance" legacyBehavior>
                    <a className="flex items-center py-2 text-gray-600 hover:text-cyan-600 transition-colors" onClick={closeMenu}>
                      <Image src="/images/DataMind.png" alt="Data Mind" width={20} height={20} className="object-contain mr-3" />
                      Data Mind
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <a href="#contact" className="block mx-4 mt-2 px-4 py-3 text-white bg-cyan-600 hover:bg-cyan-700 transition-all font-medium rounded-full text-center" onClick={closeMenu}>
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}