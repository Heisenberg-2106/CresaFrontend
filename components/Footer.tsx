import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white py-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">CRESA</h3>
            <p className="mb-4">Computer Regional Engineering Student Association</p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} CRESA. All rights reserved.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/teams" className="hover:text-primary-400 transition-colors">
                  Our Teams
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="hover:text-primary-400 transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary-400">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-secondary-800 hover:bg-primary-500 text-white p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-secondary-800 hover:bg-primary-500 text-white p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-secondary-800 hover:bg-primary-500 text-white p-2 rounded-full transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-secondary-800 hover:bg-primary-500 text-white p-2 rounded-full transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

