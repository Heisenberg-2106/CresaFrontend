"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-secondary-900 text-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary-500 rounded-full p-2">
              <Image
                src="/Logo1.png"
                alt="CRESA Logo"
                width={40}
                height={40}
                className = "rounded-full object-cover"
              />
            </div>
            <span className="text-xl font-bold">CRESA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-primary-400 transition-colors">
              Home
            </Link>
            <Link href="/teams" className="hover:text-primary-400 transition-colors">
              Our Teams
            </Link>
            <Link href="/events" className="hover:text-primary-400 transition-colors">
              Events
            </Link>
            <Link href="/achievements" className="hover:text-primary-400 transition-colors">
              Achievements
            </Link>
            <Link href="/contact" className="hover:text-primary-400 transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-primary-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/teams"
              className="block py-2 hover:text-primary-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Teams
            </Link>
            <Link
              href="/events"
              className="block py-2 hover:text-primary-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/achievements"
              className="block py-2 hover:text-primary-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-primary-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}

