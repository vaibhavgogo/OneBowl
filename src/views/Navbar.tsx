import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X, User } from 'lucide-react';
import oneBowlLogo from '@/assets/onebowl-logo.png';



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
             src={oneBowlLogo} 
              alt="OneBowl Logo" 
              className="w-8 h-8 object-contain"
            />
           <span className="text-xl font-bold text-gray-900 dark:text-white">OneBowl</span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/how-it-works" className="text-gray-800 hover:text-orange-600 transition-colors">
              How It Works
            </Link>
            <Link to="/impact" className="text-gray-800 hover:text-orange-600 transition-colors">
  Impact
</Link>

            <Link to="/about" className="text-gray-800 hover:text-orange-600 transition-colors">
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
   <Button
  variant="outline"
  size="sm"
  className="text-orange-500 border-orange-400 hover:bg-orange-50 hover:text-orange-600"
>
  <User className="w-4 h-4 mr-2" />
  Login
</Button>



            <Button 
              variant="hero" 
              size="sm"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
         <button
  onClick={toggleMenu}
  className="md:hidden p-2 rounded-md border border-orange-400 text-orange-500 hover:bg-orange-50 transition-colors bg-white/90"
>
  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
</button>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md rounded-lg mt-2 border border-gray-200 shadow-md">
      <Link 
        to="/how-it-works" 
        className="block px-3 py-2 text-gray-800 hover:text-orange-600 hover:bg-gray-100 rounded-md transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        How It Works
      </Link>
      <Link 
        to="/impact" 
        className="block px-3 py-2 text-gray-800 hover:text-orange-600 hover:bg-gray-100 rounded-md transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Impact
      </Link>
      <Link 
        to="/about" 
        className="block px-3 py-2 text-gray-800 hover:text-orange-600 hover:bg-gray-100 rounded-md transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        About
      </Link>
      <div className="border-t border-gray-200 pt-3 mt-3">
        <div className="flex flex-col gap-2 px-3">
          <Button variant="outline" size="sm" className="w-full justify-start">
            <User className="w-4 h-4 mr-2" />
            Login
          </Button>
          <Button variant="hero" size="sm" className="w-full">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;