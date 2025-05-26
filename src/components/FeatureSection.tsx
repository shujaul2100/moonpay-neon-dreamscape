
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Globe, Brain, Lock, TrendingUp } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Institutional Security",
      description: "Bank-grade security infrastructure with multi-layer protection and real-time threat monitoring.",
    },
    {
      icon: Zap,
      title: "Sub-Second Transfers",
      description: "Lightning-fast cross-chain transfers with AI-optimized routing for minimal latency.",
    },
    {
      icon: Globe,
      title: "Universal Protocol",
      description: "Support for 50+ blockchains and 1000+ tokens with seamless interoperability.",
    },
    {
      icon: Brain,
      title: "AI-Driven Intelligence",
      description: "Machine learning algorithms that adapt to market conditions and optimize every transaction.",
    },
    {
      icon: Lock,
      title: "Non-Custodial Design",
      description: "You maintain complete control of your assets. We never hold your private keys.",
    },
    {
      icon: TrendingUp,
      title: "Optimal Rates",
      description: "Dynamic fee optimization and liquidity aggregation for the best possible rates.",
    },
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Why Choose <span className="text-cyan-400">Moon-Pay.AI</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Experience the future of decentralized cross-chain infrastructure with our cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group hover:border-cyan-400/50"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/25">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-slate-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
