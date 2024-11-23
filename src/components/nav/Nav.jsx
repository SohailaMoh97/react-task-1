import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const [height, setHeight] = useState(105); 
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY; 

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        
        setHeight(70); 
      } else if (currentScrollY < lastScrollY) {
        
        setHeight(105); 
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll); 

    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className="navbar bg-slate-700 w-full flex justify-between items-center fixed top-0 z-50 shadow-md transition-all duration-300"
      style={{ height: `${height}px` }}
    >
      <div className="flex justify-between w-full mx-20 px-10">
        {/* Logo */}
        <div className="title">
          <NavLink
            to="/home"
            className="uppercase font-bold text-3xl cursor-pointer text-white"
          >
            Start Framework
          </NavLink>
        </div>

        
        <div className="links">
          <ul className="flex gap-6">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'active font-bold text-white'
                    : 'font-bold text-white hover:text-teal-400'
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? 'active font-bold text-white'
                    : 'font-bold text-white hover:text-teal-400'
                }
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'active font-bold text-white'
                    : 'font-bold text-white hover:text-teal-400'
                }
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
