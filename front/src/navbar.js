import logo from './Vector.png'
import wtsp from './wtsap.png'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-black max-w-screen-xl mx-auto my-5 rounded-full">
    <div className="mx-auto flex  p-5 justify-between">
      <img src={logo} alt="Logo" className=''/>
      <ul className="flex space-x-6 text-white justify-between">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className='bg-lime-300 rounded-lg size-8'> </button>
    </div>
  </nav>

    // <nav className="bg-black  text-white  py-4 rounded-3xl">
    //   <div className="max-w-7xl mx-auto flex items-center justify-between">
    //     {/* Logo */}
    //     <div className="flex items-center">
    //       <Link href="/" className="text-xl font-bold tracking-wider">
    //         AMBIDEX
    //       </Link>
    //     </div>

    //     {/* Navigation Links */}
    //     <div className="hidden md:flex items-center space-x-8">
    //       <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
    //         About Us
    //       </Link>
    //       <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
    //         Services
    //       </Link>
    //       <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors duration-200">
    //         Case Studies
    //       </Link>
    //       <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors duration-200">
    //         Pricing
    //       </Link>
    //       <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-200">
    //         Blog
    //       </Link>
    //     </div>

    //     {/* WhatsApp Button */}
    //     {/* <div className="flex items-center">
    //       <Button size="icon" className="bg-lime-400 hover:bg-lime-500 text-black rounded-full w-12 h-12" asChild>
    //         <Link href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
    //           <MessageCircle className="h-6 w-6" />
    //           <span className="sr-only">Contact us on WhatsApp</span>
    //         </Link>
    //       </Button>
    //     </div> */}

    //     {/* Mobile Menu Button (for future mobile implementation) */}
    //     {/* <div className="md:hidden">
    //       <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
    //         <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    //         </svg>
    //         <span className="sr-only">Open menu</span>
    //       </Button>
    //     </div> */}
    //   </div>
    // </nav>
  )
}