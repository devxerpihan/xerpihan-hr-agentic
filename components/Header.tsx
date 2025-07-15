"use client"

import React from 'react'
import { Menu, X } from 'lucide-react'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center space-x-3">
                <img src="/logo-bobby-pin-v2.svg" alt="Hairpin AI Logo" className="h-14 w-auto" />
                <span className="text-2xl font-bold text-gray-800 tracking-wider">Hairpin AI</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Features
            </a>
            <a href="#phases" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Phases
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a href="#features" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Features
              </a>
              <a href="#phases" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Phases
              </a>
              <a href="#about" className="text-gray-600 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <button className="w-full mt-4 bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 