import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Listen for cart updates
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('qikk-cart') || '[]');
      setCartItems(cart.length);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    window.addEventListener('cartUpdated', updateCartCount);

    return () => {
      window.removeEventListener('storage', updateCartCount);
      window.removeEventListener('cartUpdated', updateCartCount);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isMobileMenuOpen
        ? 'bg-background border-b border-border'
        : isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border' 
          : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/assets/qikksapceiconlogo.png" alt="QIKK SPACE Logo" className="h-8 w-auto" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              to="/services"
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link 
              to="/portfolio"
              className="text-foreground hover:text-primary transition-colors"
            >
              Portfolio
            </Link>
            <Link 
              to="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Cart and CTA */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/cart" 
              className="relative p-2 text-foreground hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6.5-5v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m8 0h-8" />
              </svg>
              {cartItems > 0 && (
                <Badge className="absolute -top-1 -right-1 bg-primary text-primary-foreground min-w-5 h-5 text-xs flex items-center justify-center rounded-full">
                  {cartItems}
                </Badge>
              )}
            </Link>
            
            <Link to="/services">
              <Button className="btn-electric hidden md:block">
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-foreground p-2"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Link 
              to="/" 
              className="text-xl font-bold glow-text"
              onClick={closeMobileMenu}
            >
              QIKK SPACE
            </Link>
            <button 
              onClick={closeMobileMenu}
              className="text-foreground p-2"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-4">
              <Link 
                to="/"
                className="block text-lg text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link 
                to="/about"
                className="block text-lg text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/services"
                className="block text-lg text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link 
                to="/portfolio"
                className="block text-lg text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
              <Link 
                to="/contact"
                className="block text-lg text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu CTA */}
            <div className="mt-8 space-y-4">
              <Link 
                to="/cart" 
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors py-2"
                onClick={closeMobileMenu}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6.5-5v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m8 0h-8" />
                </svg>
                <span>Cart ({cartItems})</span>
              </Link>
              
              <Link to="/services" onClick={closeMobileMenu}>
                <Button 
                  className="btn-electric w-full"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;