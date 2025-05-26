import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, ChevronDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { ethers } from "ethers";

interface WalletOption {
  id: string;
  name: string;
  icon: string;
}

const walletOptions: WalletOption[] = [
  {
    id: "metamask",
    name: "MetaMask",
    icon: "🦊"
  },
  {
    id: "trust",
    name: "Trust Wallet", 
    icon: "🛡️"
  },
  {
    id: "phantom",
    name: "Phantom",
    icon: "👻"
  }
];

declare global {
  interface Window {
    ethereum?: any;
  }
}

const ConnectWallet = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [connectionState, setConnectionState] = useState<'disconnected' | 'connecting' | 'connected' | 'error'>('disconnected');
  const [connectedWallet, setConnectedWallet] = useState<string>('');
  const [connectedAddress, setConnectedAddress] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      toast({
        title: "MetaMask not found",
        description: "Please install MetaMask browser extension",
        variant: "destructive",
      });
      return;
    }

    try {
      setConnectionState('connecting');
      setErrorMessage('');

      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });

      // Get the first account
      const account = accounts[0];
      
      // Create ethers provider
      const provider = new ethers.BrowserProvider(window.ethereum);
      
      // Get the network
      const network = await provider.getNetwork();

      setConnectionState('connected');
      setConnectedWallet('MetaMask');
      setConnectedAddress(account);

      toast({
        title: "Successfully connected",
        description: `Connected to ${network.name} network`,
      });

    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      setConnectionState('error');
      setErrorMessage('Failed to connect to MetaMask');
      
      toast({
        title: "Connection Failed",
        description: "Could not connect to MetaMask",
        variant: "destructive",
      });
    }
  };

  const handleWalletSelect = async (wallet: WalletOption) => {
    setIsMenuOpen(false);

    if (wallet.id === 'metamask') {
      await connectMetaMask();
    } else {
      // Simulate connection for other wallets
      setConnectionState('connecting');
      setErrorMessage('');

      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        if (Math.random() > 0.2) {
          setConnectionState('connected');
          setConnectedWallet(wallet.name);
          setConnectedAddress('0x1234...5678');
          
          toast({
            title: "Successfully connected",
            description: `Connected to ${wallet.name}`,
          });
        } else {
          throw new Error('Connection rejected');
        }
      } catch (error) {
        setConnectionState('error');
        setErrorMessage('Connection rejected');
        
        toast({
          title: "Connection Failed",
          description: `Could not connect to ${wallet.name}`,
          variant: "destructive",
        });

        setTimeout(() => {
          setConnectionState('disconnected');
          setErrorMessage('');
        }, 3000);
      }
    }
  };

  const handleDisconnect = () => {
    setConnectionState('disconnected');
    setConnectedWallet('');
    setConnectedAddress('');
    toast({
      title: "Disconnected",
      description: "Wallet disconnected successfully",
    });
  };

  const renderButtonContent = () => {
    switch (connectionState) {
      case 'connecting':
        return (
          <>
            <div className="animate-spin w-4 h-4 border-2 border-background border-t-transparent rounded-full mr-2" />
            Connecting...
          </>
        );
      case 'connected':
        return (
          <>
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse-glow" />
            {connectedAddress}
          </>
        );
      case 'error':
        return (
          <>
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </>
        );
      default:
        return (
          <>
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </>
        );
    }
  };

  return (
    <div className="relative">
      <Button
        onClick={() => {
          if (connectionState === 'connected') {
            handleDisconnect();
          } else if (connectionState === 'disconnected') {
            setIsMenuOpen(!isMenuOpen);
          }
        }}
        className={`
          bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 
          text-background font-semibold glow-effect transition-all duration-300
          ${connectionState === 'error' ? 'border border-red-500/50' : ''}
        `}
        disabled={connectionState === 'connecting'}
      >
        {renderButtonContent()}
        {connectionState === 'disconnected' && (
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
        )}
      </Button>

      {/* Error Message */}
      {errorMessage && (
        <div className="absolute top-full left-0 mt-2 text-red-400 text-sm whitespace-nowrap animate-fade-in">
          {errorMessage}
        </div>
      )}

      {/* Wallet Selection Popup */}
      {isMenuOpen && connectionState === 'disconnected' && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-card/90 backdrop-blur-md border border-primary/30 rounded-lg shadow-2xl animate-fade-in z-50">
          <div className="p-4">
            <h3 className="text-foreground font-semibold mb-3 text-center">Select a Wallet</h3>
            <div className="space-y-2">
              {walletOptions.map((wallet, index) => (
                <button
                  key={wallet.id}
                  onClick={() => handleWalletSelect(wallet)}
                  className="w-full flex items-center p-3 rounded-lg bg-muted/50 hover:bg-primary/20 hover:border-primary/50 border border-transparent transition-all duration-200 group"
                >
                  <span className="text-2xl mr-3">{wallet.icon}</span>
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {wallet.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default ConnectWallet;