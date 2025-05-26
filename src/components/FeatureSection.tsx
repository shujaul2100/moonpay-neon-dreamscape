
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, Globe, Brain, Lock, TrendingUp } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Advanced encryption and multi-signature protocols protect your assets across all transactions.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "AI-optimized routing ensures the fastest possible cross-chain transfers with minimal fees.",
    },
    {
      icon: Globe,
      title: "Universal Compatibility",
      description: "Support for 50+ blockchains and 1000+ cryptocurrencies with seamless interoperability.",
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Machine learning algorithms optimize routes, predict gas fees, and ensure successful transfers.",
    },
    {
      icon: Lock,
      title: "Non-Custodial",
      description: "You maintain full control of your private keys. We never have access to your funds.",
    },
    {
      icon: TrendingUp,
      title: "Best Rates",
      description: "Intelligent aggregation across DEXs and bridges to guarantee the most competitive rates.",
    },
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Why Choose <span className="text-primary">Moon-App.AI</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of decentralized finance with our cutting-edge cross-chain infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="gradient-border bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center mb-4 glow-effect group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
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
