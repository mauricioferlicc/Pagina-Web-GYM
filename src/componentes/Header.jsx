import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);

  const navItems = useMemo(() => [
    { path: '/', label: 'Inicio' },
    { path: '/sobrenosotros', label: 'Sobre Nosotros' },
    { path: '/planes', label: 'Planes' },
    { path: '/contact', label: 'Contacto' },
    { path: '/tienda', label: 'Tienda' }
  ], []);

  const handleLogoClick = useCallback((e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo(0, 0);
        window.location.reload();
      }, 100);
    }
  }, [location.pathname, navigate]);

  const handleMouseEnter = useCallback((index) => setHoveredItem(index), []);
  const handleMouseLeave = useCallback(() => setHoveredItem(null), []);
  
  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);
  
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Scroll al inicio cuando cambia la ruta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const currentIndex = navItems.findIndex(item => item.path === location.pathname);
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex);
    }
  }, [location.pathname, navItems]);

  useEffect(() => {
    const updateIndicatorPosition = () => {
      if (!navRef.current) return;
      
      const navElement = navRef.current.querySelector(`[data-nav-index="${activeIndex}"]`);
      if (navElement) {
        const navRect = navElement.getBoundingClientRect();
        const containerRect = navRef.current.getBoundingClientRect();
        
        setIndicatorStyle({
          left: navRect.left - containerRect.left,
          width: navRect.width
        });
      }
    };

    const rafId = requestAnimationFrame(updateIndicatorPosition);
    
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateIndicatorPosition);
    });
    
    if (navRef.current) {
      resizeObserver.observe(navRef.current);
    }

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [activeIndex]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-lg">
      <nav className="flex justify-between items-center px-4 py-3 max-w-7xl mx-auto md:px-6 md:py-4" aria-label="Navegación principal">
        <Link 
          to="/" 
          className="flex items-center gap-4 group"
          onClick={handleLogoClick}
          aria-label="Ir al inicio"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <img 
              src="/logo.jpg" 
              alt="Gym Logo" 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <span 
            className="font-black text-black"
            style={{ 
              fontFamily: 'system-ui, -apple-system, sans-serif', 
              fontSize: '20px',
              letterSpacing: '0.5px'
            }}
          >
            GIMNASIO
          </span>
        </Link>

        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative w-10 h-10 flex items-center justify-center"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <div className="w-6 h-5 flex flex-col justify-center items-center relative">
            <span 
              className={`absolute w-full h-1 bg-gray-900 rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}
            />
            <span 
              className={`absolute w-full h-1 bg-gray-900 rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`absolute w-full h-1 bg-gray-900 rounded-full transition-all duration-300 ease-in-out ${
                menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}
            />
          </div>
        </button>

        <ul ref={navRef} className="hidden md:flex space-x-2 relative" role="menubar">
          <div 
            className="absolute top-0 h-full pointer-events-none transition-all duration-700 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
              transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl" />
              
              <div 
                className="absolute inset-0 rounded-full glass-shine"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0) 60%)'
                }}
              />
              
              <div 
                className="absolute inset-0 rounded-full opacity-50 liquid-wave"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                }}
              />
              
              <div 
                className="absolute inset-0 rounded-full glow-pulse"
                style={{
                  boxShadow: 'inset 0 1px 3px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.3)'
                }}
              />
            </div>
          </div>

          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            const isHovered = hoveredItem === index;

            return (
              <li key={item.path} className="relative" role="none">
                <Link
                  to={item.path}
                  role="menuitem"
                  data-nav-index={index}
                  aria-current={isActive ? 'page' : undefined}
                  className={`
                    relative px-5 py-2.5 rounded-full
                    transition-all duration-300 ease-out block
                    ${isActive 
                      ? 'text-white' 
                      : 'text-gray-700 hover:text-gray-900'
                    }
                  `}
                  style={{ 
                    fontFamily: 'system-ui, -apple-system, sans-serif', 
                    fontSize: '19px',
                    fontWeight: '700',
                    letterSpacing: '0.3px'
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {!isActive && isHovered && (
                    <span 
                      className="absolute inset-0 rounded-full bg-gray-100 hover-expand" 
                      aria-hidden="true"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div 
          className={`
            fixed left-0 right-0 bg-white shadow-2xl border-t border-gray-200 md:hidden
            overflow-hidden z-40 transform origin-top
            ${menuOpen ? 'animate-menu-open' : 'animate-menu-close pointer-events-none'}
          `}
          style={{
            top: '73px',
            maxHeight: 'calc(100vh - 73px)',
            display: menuOpen ? 'block' : 'none'
          }}
        >
          <ul className="flex flex-col py-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 73px)' }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path}>
                  <Link 
                    to={item.path}
                    onClick={closeMenu}
                    className={`
                      text-lg font-bold px-6 py-4 block transition-all
                      ${isActive
                        ? 'text-white bg-gradient-to-r from-gray-800 to-black shadow-md border-l-4 border-gray-900' 
                        : 'text-gray-800 hover:bg-gray-50 active:bg-gray-100 border-l-4 border-transparent hover:border-gray-300'
                      }
                    `}
                    style={{ 
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontSize: '20px'
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      <style>{`
        @keyframes glassShine {
          0%, 100% { 
            transform: translateX(-10%) rotate(-5deg);
            opacity: 0.4;
          }
          50% { 
            transform: translateX(10%) rotate(5deg);
            opacity: 0.7;
          }
        }
        
        @keyframes liquidWave {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
          }
          33% { 
            transform: translate(5%, -5%) scale(1.1);
            opacity: 0.7;
          }
          66% { 
            transform: translate(-5%, 5%) scale(0.95);
            opacity: 0.6;
          }
        }
        
        @keyframes glowPulse {
          0%, 100% { 
            box-shadow: 
              inset 0 1px 3px rgba(255,255,255,0.3), 
              inset 0 -1px 2px rgba(0,0,0,0.3),
              0 0 15px rgba(0,0,0,0.3);
          }
          50% { 
            box-shadow: 
              inset 0 1px 4px rgba(255,255,255,0.4), 
              inset 0 -1px 3px rgba(0,0,0,0.4),
              0 0 25px rgba(0,0,0,0.4);
          }
        }
        
        @keyframes hoverExpand {
          0% { 
            transform: scale(0.85); 
            opacity: 0; 
          }
          100% { 
            transform: scale(1); 
            opacity: 1; 
          }
        }

        @keyframes menuOpen {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes menuClose {
          0% {
            transform: scaleY(1);
            opacity: 1;
          }
          100% {
            transform: scaleY(0);
            opacity: 0;
          }
        }
        
        .glass-shine {
          animation: glassShine 3s ease-in-out infinite;
        }
        
        .liquid-wave {
          animation: liquidWave 4s ease-in-out infinite;
        }
        
        .glow-pulse {
          animation: glowPulse 2s ease-in-out infinite;
        }
        
        .hover-expand {
          animation: hoverExpand 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-menu-open {
          animation: menuOpen 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-menu-close {
          animation: menuClose 0.3s ease-in forwards;
          pointer-events: none;
        }

        .glass-shine, .liquid-wave, .glow-pulse {
          will-change: transform, opacity;
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </header>
  );
}

export default Header;