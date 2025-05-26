
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Wallet, Shield, Zap, Globe, Network, Lock, TrendingUp, CheckCircle } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import TransferForm from "@/components/TransferForm";
import FeatureSection from "@/components/FeatureSection";

const Index = () => {
  const scrollToTransfer = () => {
    const transferSection = document.getElementById('transfer-section');
    if (transferSection) {
      transferSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const walletIntegrations = [
    {
      name: "MetaMask",
      icon: "🦊",
      description: "The world's leading self-custodial wallet",
      users: "100M+",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      name: "Trust Wallet",
      icon: "🛡️",
      description: "Simple and secure crypto wallet",
      users: "60M+",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "BitGet",
      icon: "🚀",
      description: "Professional trading wallet",
      users: "25M+",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Phantom",
      icon: "👻",
      description: "Solana ecosystem wallet",
      users: "15M+",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-foreground relative overflow-hidden">
      <ParticleBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="animate-float">
            <Badge variant="secondary" className="mb-6 text-cyan-400 bg-cyan-400/10 border-cyan-400/30 glow-effect">
              Revolutionary Cross-Chain Infrastructure
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Moon-Pay
            <span className="text-cyan-400">.AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The next-generation decentralized cross-chain transfer protocol powered by AI. 
            Seamlessly move assets across any blockchain with institutional-grade security.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <Network className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">50+ Blockchains</h3>
              <p className="text-slate-400 text-sm">Connect Ethereum, BSC, Polygon, Avalanche, and more</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <Lock className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Zero-Knowledge</h3>
              <p className="text-slate-400 text-sm">Advanced cryptographic privacy protection</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <TrendingUp className="h-8 w-8 text-cyan-400 mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">AI Optimization</h3>
              <p className="text-slate-400 text-sm">Smart routing for lowest fees and fastest transfers</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              onClick={scrollToTransfer}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-4 text-lg border-0 shadow-lg shadow-cyan-500/25"
            >
              Launch App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg">
              View Documentation
            </Button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">$2.5B+</div>
              <div className="text-slate-400">Total Volume Transferred</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500K+</div>
              <div className="text-slate-400">Successful Transfers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-slate-400">Supported Chains</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-slate-400">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wallet Integration Section */}
      <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 text-purple-400 bg-purple-400/10 border-purple-400/30">
              Seamless Integration
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Connect with Your Favorite Wallet
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Moon-Pay.AI integrates seamlessly with the most trusted wallets in the crypto ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {walletIntegrations.map((wallet, index) => (
              <div
                key={wallet.name}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/10"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4">{wallet.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{wallet.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{wallet.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">{wallet.users} users</span>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${wallet.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-8 mb-6">
                <Wallet className="h-12 w-12 text-cyan-400" />
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">Universal Wallet Support</h3>
                  <p className="text-slate-400">Connect once, transfer everywhere. No additional setup required.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">One-Click</div>
                  <div className="text-slate-400 text-sm">Connection</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">Secure</div>
                  <div className="text-slate-400 text-sm">Authentication</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-1">Multi-Chain</div>
                  <div className="text-slate-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer Interface */}
      <section id="transfer-section" className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <TransferForm />
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Technology Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Built on Advanced Technology
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Moon-Pay.AI leverages cutting-edge blockchain infrastructure and AI algorithms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Route Optimization</h3>
                <p className="text-slate-400">Our machine learning algorithms analyze real-time market conditions to find the most efficient cross-chain paths.</p>
              </div>
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-3">Multi-Signature Security</h3>
                <p className="text-slate-400">Enterprise-grade security with multi-signature wallets and advanced cryptographic protocols.</p>
              </div>
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600">
                <h3 className="text-xl font-semibold text-white mb-3">Decentralized Architecture</h3>
                <p className="text-slate-400">Fully decentralized protocol ensuring no single point of failure and maximum uptime.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-2xl p-8 border border-cyan-400/30">
              <div className="text-center">
                <Network className="h-24 w-24 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Cross-Chain Bridge Network</h3>
                <p className="text-slate-300">
                  Connecting the entire DeFi ecosystem through our innovative bridge technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
