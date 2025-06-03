import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-wider">
            AMBIDEX
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
            About Us
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
            Services
          </Link>
          <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors duration-200">
            Case Studies
          </Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
            Pricing
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
            Blog
          </Link>
        </div>

        {/* WhatsApp Button */}
        <div className="flex items-center">
          <Button size="icon" className="bg-lime-400 hover:bg-lime-500 text-black rounded-full w-12 h-12" asChild>
            <Link href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-6 w-6" />
              <span className="sr-only">Contact us on WhatsApp</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button (for future mobile implementation) */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}