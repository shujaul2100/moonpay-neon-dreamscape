
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ConnectWallet from "./ConnectWallet";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center glow-effect">
              <span className="text-background font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold glow-text">
              Moon-Pay<span className="text-primary">.AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Transfer
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Pools
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Analytics
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Docs
            </a>
          </nav>

          {/* Connect Wallet Component */}
          <div className="hidden md:flex items-center space-x-4">
            <ConnectWallet />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Transfer
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Pools
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Analytics
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                Docs
              </a>
              <div className="pt-2">
                <ConnectWallet />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
