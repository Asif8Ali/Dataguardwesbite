import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ResponsiveNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [navMode, setNavMode] = useState('desktop');
  const dropdownRef = useRef();
  const navRef = useRef();
  const contentRef = useRef();

  // NDTV-style responsive detection with smart mobile switching
  useEffect(() => {
    const checkNavigationMode = () => {
      if (navRef.current && contentRef.current) {
        const navWidth = navRef.current.offsetWidth;
        const contentWidth = contentRef.current.scrollWidth;
        const hasOverflow = contentWidth > navWidth + 30; // Tighter buffer like NDTV

        let newMode = 'desktop';
        if (navWidth < 480) { // Mobile-first approach like NDTV
          newMode = 'mobile-compact';
        } else if (navWidth < 768 || hasOverflow) { // Earlier mobile switch
          newMode = 'mobile';
        } else if (navWidth < 1200) { // Larger tablet range
          newMode = 'tablet';
        }

        if (newMode !== navMode) {
          setNavMode(newMode);
          if (newMode !== 'desktop') {
            setIsMenuOpen(false);
            setOpenDropdown(null);
          }
        }
      }
    };

    const initialCheck = () => setTimeout(checkNavigationMode, 50);
    initialCheck();

    const resizeObserver = new ResizeObserver(checkNavigationMode);
    const currentNavRef = navRef.current;
    if (currentNavRef) {
      resizeObserver.observe(currentNavRef);
    }

    const handleResize = () => setTimeout(checkNavigationMode, 10);
    window.addEventListener('resize', handleResize);

    return () => {
      if (resizeObserver && currentNavRef) {
        resizeObserver.unobserve(currentNavRef);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [navMode]);

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
    <>
      {/* Professional Dropdown Styles */}
      <style jsx>{`
        .dropdown-content-professional {
          display: block;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
        }
        .dropdown-content-professional:not(.hidden) {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-item-professional {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          text-decoration: none;
          color: #374151;
          transition: all 0.3s ease;
          border-radius: 8px;
          margin: 4px;
          cursor: pointer;
          white-space: nowrap;
        }
        .dropdown-item-professional:hover {
          background: linear-gradient(135deg, #e0f2fe 0%, #f0f9ff 100%);
          color: #0891b2;
          transform: translateX(4px);
        }
        .dropdown-item-professional img {
          display: inline-block !important;
          vertical-align: middle;
        }
      `}</style>
      
      <nav ref={navRef} className="bg-gradient-to-r from-white via-blue-50 to-cyan-50 shadow-xl sticky top-0 z-50 backdrop-blur-sm border-b border-cyan-100">
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

          {/* Desktop Navigation - Hidden when in mobile mode */}
          <div ref={contentRef} className={`${navMode === 'mobile' || navMode === 'mobile-compact' ? 'hidden' : 'flex'} space-x-6 items-center`}>
            <div ref={dropdownRef} className="flex space-x-6 items-center">
              <Link href="/" legacyBehavior>
                <a className="relative px-4 py-2 text-cyan-600 transition-all font-medium group border-b-2 border-cyan-500">
                  <span className="relative z-10">Home</span>
                </a>
              </Link>

            {/* Services Dropdown */}
            <div className="dropdown relative">
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
                <Link href="/#offerings" legacyBehavior>
                  <a className="dropdown-item-professional flex items-center" onClick={() => setOpenDropdown(null)}>
                    <span className="text-emerald-600 mr-3">🎯</span>
                    <span className="font-medium">Strategic Consulting</span>
                  </a>
                </Link>
                <Link href="/#offerings" legacyBehavior>
                  <a className="dropdown-item-professional flex items-center" onClick={() => setOpenDropdown(null)}>
                    <span className="text-blue-600 mr-3">⚙️</span>
                    <span className="font-medium">Implementation Services</span>
                  </a>
                </Link>
                <Link href="/#offerings" legacyBehavior>
                  <a className="dropdown-item-professional flex items-center" onClick={() => setOpenDropdown(null)}>
                    <span className="text-amber-600 mr-3">📖</span>
                    <span className="font-medium">Training & Enablement</span>
                  </a>
                </Link>
                <Link href="/#offerings" legacyBehavior>
                  <a className="dropdown-item-professional flex items-center" onClick={() => setOpenDropdown(null)}>
                    <span className="text-red-600 mr-3">🛠️</span>
                    <span className="font-medium">Managed Services</span>
                  </a>
                </Link>
              </div>
            </div>

            {/* Products Dropdown */}
            <div className="dropdown relative">
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
                  <a className="dropdown-item-professional flex items-center whitespace-nowrap" onClick={() => setOpenDropdown(null)}>
                    <Image src="/images/DataMind.png" alt="Data Mind" width={16} height={16} className="object-contain mr-2 flex-shrink-0 inline-block" />
                    <span className="font-medium inline-block">Data Mind</span>
                  </a>
                </Link>
              </div>
            </div>
            
            <Link href="/#contact" legacyBehavior>
              <a className="relative px-4 py-2 text-white bg-cyan-600 hover:bg-cyan-700 transition-all font-medium rounded-full shadow-md flex items-center">
                <span className="relative z-10">Contact Us</span>
              </a>
            </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button - Show when in mobile mode */}
          <button
            className={`${navMode === 'mobile' || navMode === 'mobile-compact' ? 'flex' : 'hidden'} flex-col justify-center items-center w-8 h-8 bg-transparent border-none cursor-pointer focus:outline-none`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-out my-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu - Show when in mobile mode and menu is open */}
        <div className={`${navMode === 'mobile' || navMode === 'mobile-compact' ? 'block' : 'hidden'} transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
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
                  <Link href="/#offerings">
                    <span className="block py-2 text-gray-600 hover:text-cyan-600 transition-colors cursor-pointer" onClick={closeMenu}>
                      🎯 Strategic Consulting
                    </span>
                  </Link>
                  <Link href="/#offerings">
                    <span className="block py-2 text-gray-600 hover:text-cyan-600 transition-colors cursor-pointer" onClick={closeMenu}>
                      ⚙️ Implementation Services
                    </span>
                  </Link>
                  <Link href="/#offerings">
                    <span className="block py-2 text-gray-600 hover:text-cyan-600 transition-colors cursor-pointer" onClick={closeMenu}>
                      📖 Training & Enablement
                    </span>
                  </Link>
                  <Link href="/#offerings">
                    <span className="block py-2 text-gray-600 hover:text-cyan-600 transition-colors cursor-pointer" onClick={closeMenu}>
                      🛠️ Managed Services
                    </span>
                  </Link>
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
                    <a className="flex items-center py-2 text-gray-600 hover:text-cyan-600 transition-colors whitespace-nowrap" onClick={closeMenu}>
                      <Image src="/images/DataMind.png" alt="Data Mind" width={16} height={16} className="object-contain mr-2 flex-shrink-0 inline-block" />
                      <span className="inline-block">Data Mind</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/#contact" legacyBehavior>
              <a className="block mx-4 mt-2 px-4 py-3 text-white bg-cyan-600 hover:bg-cyan-700 transition-all font-medium rounded-full text-center" onClick={closeMenu}>
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}