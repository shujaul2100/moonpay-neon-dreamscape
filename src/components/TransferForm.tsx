import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpDown, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const TransferForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [senderAddress, setSenderAddress] = useState("");
  const [selectedWallet, setSelectedWallet] = useState("");
  const [senderCoin, setSenderCoin] = useState("");
  const [receiverCoin, setReceiverCoin] = useState("");
  const [receiverChain, setReceiverChain] = useState("");
  const [amount, setAmount] = useState("");
  const [isMetaMaskConnected, setIsMetaMaskConnected] = useState(false);
  const [connectedAddress, setConnectedAddress] = useState("");

  useEffect(() => {
    const checkMetaMaskConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          if (accounts.length > 0) {
            setIsMetaMaskConnected(true);
            setConnectedAddress(accounts[0]);
            setSelectedWallet("metamask");
          }
        } catch (error) {
          console.error("Error checking MetaMask connection:", error);
        }
      }
    };

    checkMetaMaskConnection();
  }, []);

  const wallets = [
    { id: "metamask", name: "MetaMask", icon: "🦊" },
    { id: "trust", name: "Trust Wallet", icon: "🛡️" },
    { id: "bitget", name: "Bitget Wallet", icon: "💎" },
    { id: "coinbase", name: "Coinbase Wallet", icon: "🔵" },
  ];

  const coins = [
    { id: "btc", name: "Bitcoin", symbol: "BTC" },
    { id: "eth", name: "Ethereum", symbol: "ETH" },
    { id: "usdt", name: "Tether", symbol: "USDT" },
    { id: "bnb", name: "BNB", symbol: "BNB" },
  ];

  const chains = [
    { id: "ethereum", name: "Ethereum" },
    { id: "bsc", name: "BNB Smart Chain" },
    { id: "polygon", name: "Polygon" },
    { id: "avalanche", name: "Avalanche" },
  ];

  const handleTransfer = async () => {
    if (!senderAddress || !selectedWallet || !senderCoin || !receiverCoin || !receiverChain || !amount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate transfer process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Transfer Initiated",
        description: "Your cross-chain transfer has been successfully initiated.",
      });
    }, 3000);
  };

  return (
    <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 shadow-2xl shadow-cyan-500/10">
      <CardHeader className="text-center border-b border-slate-700">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          Cross-Chain Transfer
        </CardTitle>
        <CardDescription className="text-lg text-slate-400">
          Transfer cryptocurrencies across different blockchains with AI optimization
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6 p-8">
        {/* Sender Details */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold text-cyan-400">Your Sending Details</Label>
          
          <div className="space-y-2">
            <Label htmlFor="wallet" className="text-slate-300">Select Wallet</Label>
            <Select value={selectedWallet} onValueChange={setSelectedWallet}>
              <SelectTrigger className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/60 transition-colors text-white">
                <SelectValue placeholder="Choose your wallet" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                {isMetaMaskConnected ? (
                  <SelectItem value="metamask" className="hover:bg-slate-700 text-white">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">🦊</span>
                      <span>MetaMask</span>
                    </div>
                  </SelectItem>
                ) : (
                  wallets.map((wallet) => (
                    <SelectItem key={wallet.id} value={wallet.id} className="hover:bg-slate-700 text-white">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg">{wallet.icon}</span>
                        <span>{wallet.name}</span>
                      </div>
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-slate-300">Receiver's Wallet Address</Label>
            <Input
              id="address"
              placeholder="0x..."
              value={senderAddress}
              onChange={(e) => setSenderAddress(e.target.value)}
              className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/60 focus:border-cyan-400 transition-colors text-white placeholder-slate-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="senderCoin" className="text-slate-300">Coin to Send</Label>
              <Select value={senderCoin} onValueChange={setSenderCoin}>
                <SelectTrigger className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/60 transition-colors text-white">
                  <SelectValue placeholder="Select coin" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  {coins.map((coin) => (
                    <SelectItem key={coin.id} value={coin.id} className="hover:bg-slate-700 text-white">
                      {coin.name} ({coin.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount" className="text-slate-300">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/60 focus:border-cyan-400 transition-colors text-white placeholder-slate-400"
              />
            </div>
          </div>
        </div>

        {/* Arrow Separator */}
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/25">
            <ArrowUpDown className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Receiver Details */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold text-cyan-400">Receiver's Desired Coin & Chain</Label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="receiverCoin" className="text-slate-300">Desired Coin</Label>
              <Select value={receiverCoin} onValueChange={setReceiverCoin}>
                <SelectTrigger className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/60 transition-colors text-white">
                  <SelectValue placeholder="Select desired coin" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  {coins.map((coin) => (
                    <SelectItem key={coin.id} value={coin.id} className="hover:bg-slate-700 text-white">
                      {coin.name} ({coin.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="receiverChain" className="text-slate-300">Target Chain</Label>
              <Select value={receiverChain} onValueChange={setReceiverChain}>
                <SelectTrigger className="bg-slate-700/50 border-slate-600 hover:border-cyan-400/60 transition-colors text-white">
                  <SelectValue placeholder="Select chain" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-slate-600">
                  {chains.map((chain) => (
                    <SelectItem key={chain.id} value={chain.id} className="hover:bg-slate-700 text-white">
                      {chain.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Transfer Button */}
        <Button
          onClick={handleTransfer}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold py-6 text-lg border-0 shadow-lg shadow-cyan-500/25"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Processing Transfer...
            </>
          ) : (
            "Initiate Transfer"
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default TransferForm;