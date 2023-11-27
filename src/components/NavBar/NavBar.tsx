'use client'
import React, { useState } from 'react';
import Image from 'next/image';


import navicon from '@/assets/navicon.png';
import logo from '@/assets/logo.png';

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            <Image src={logo} alt={''} width={80} height={80} />
            </div>
          </div>
          <div className="hidden md:block text-white">
            <div className="ml-10 flex items-baseline space-x-4">
              <ul className="flex mx-8">
                <li className="hover:bg-white hover:text-black rounded-lg p-2 ">
                  <a href="#home">Home</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#aboutUs">Sobre Nós</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#service">Serviços</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#legi">Legislação</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#clients">Clientes</a>
                </li>
                <li className="hover:bg-white hover:text-black rounded-lg p-2">
                  <a href="#contact">Contato</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleMobileMenu}>
              <Image src={navicon} alt="menu" width={20} height={10} />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full">
          <ul className="bg-primary text-white p-6 space-y-4 text-center font-bold ">
            <li onClick={closeMobileMenu}>
              <a href="#home">Home</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#aboutUs">Sobre Nós</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#service">Serviços</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#legi">Legislação</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#clients">Clientes</a>
            </li>
            <li onClick={closeMobileMenu}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
