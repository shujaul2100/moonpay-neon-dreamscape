
import { useState } from "react";
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
    <Card className="gradient-border animate-pulse-glow bg-card/50 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold glow-text">
          Cross-Chain Transfer
        </CardTitle>
        <CardDescription className="text-lg">
          Transfer cryptocurrencies across different blockchains with AI optimization
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Sender Details */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold text-primary">Your Sending Details</Label>
          
          <div className="space-y-2">
            <Label htmlFor="wallet">Select Wallet</Label>
            <Select value={selectedWallet} onValueChange={setSelectedWallet}>
              <SelectTrigger className="bg-secondary border-primary/30 hover:border-primary/60 transition-colors">
                <SelectValue placeholder="Choose your wallet" />
              </SelectTrigger>
              <SelectContent className="bg-secondary border-primary/30">
                {wallets.map((wallet) => (
                  <SelectItem key={wallet.id} value={wallet.id} className="hover:bg-primary/10">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{wallet.icon}</span>
                      <span>{wallet.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Your Wallet Address</Label>
            <Input
              id="address"
              placeholder="0x..."
              value={senderAddress}
              onChange={(e) => setSenderAddress(e.target.value)}
              className="bg-secondary border-primary/30 hover:border-primary/60 focus:border-primary transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="senderCoin">Coin to Send</Label>
              <Select value={senderCoin} onValueChange={setSenderCoin}>
                <SelectTrigger className="bg-secondary border-primary/30 hover:border-primary/60 transition-colors">
                  <SelectValue placeholder="Select coin" />
                </SelectTrigger>
                <SelectContent className="bg-secondary border-primary/30">
                  {coins.map((coin) => (
                    <SelectItem key={coin.id} value={coin.id} className="hover:bg-primary/10">
                      {coin.name} ({coin.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-secondary border-primary/30 hover:border-primary/60 focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Arrow Separator */}
        <div className="flex justify-center">
          <div className="p-3 rounded-full bg-gradient-to-r from-primary to-accent glow-effect">
            <ArrowUpDown className="h-6 w-6 text-background" />
          </div>
        </div>

        {/* Receiver Details */}
        <div className="space-y-4">
          <Label className="text-lg font-semibold text-primary">Receiver's Desired Coin & Chain</Label>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="receiverCoin">Desired Coin</Label>
              <Select value={receiverCoin} onValueChange={setReceiverCoin}>
                <SelectTrigger className="bg-secondary border-primary/30 hover:border-primary/60 transition-colors">
                  <SelectValue placeholder="Select desired coin" />
                </SelectTrigger>
                <SelectContent className="bg-secondary border-primary/30">
                  {coins.map((coin) => (
                    <SelectItem key={coin.id} value={coin.id} className="hover:bg-primary/10">
                      {coin.name} ({coin.symbol})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="receiverChain">Target Chain</Label>
              <Select value={receiverChain} onValueChange={setReceiverChain}>
                <SelectTrigger className="bg-secondary border-primary/30 hover:border-primary/60 transition-colors">
                  <SelectValue placeholder="Select chain" />
                </SelectTrigger>
                <SelectContent className="bg-secondary border-primary/30">
                  {chains.map((chain) => (
                    <SelectItem key={chain.id} value={chain.id} className="hover:bg-primary/10">
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
          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-background font-bold py-6 text-lg glow-effect"
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
