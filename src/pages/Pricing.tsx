
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "0",
      period: "month",
      description: "Perfect for getting started with basic fitness tracking",
      features: [
        "Basic workout plans",
        "Limited tracking",
        "Community support",
        "Mobile app access"
      ],
      notIncluded: [
        "AI-generated workouts",
        "Voice commands",
        "Advanced analytics",
        "Personalized coaching"
      ],
      recommended: false,
      buttonText: "Sign Up for Free",
      buttonVariant: "outline" as const
    },
    {
      name: "Premium",
      price: "9.99",
      period: "month",
      description: "Unlock the full power of AI-driven fitness coaching",
      features: [
        "AI-generated workouts",
        "Full progress tracking",
        "Voice command integration",
        "Advanced analytics",
        "Personalized recommendations",
        "Priority support"
      ],
      notIncluded: [
        "1-on-1 coaching calls",
        "Custom nutrition plans"
      ],
      recommended: true,
      buttonText: "Upgrade to Premium",
      buttonVariant: "default" as const
    },
    {
      name: "Pro",
      price: "19.99",
      period: "month",
      description: "Complete fitness solution with personal coaching",
      features: [
        "Everything in Premium",
        "Personalized coaching sessions",
        "Custom nutrition planning",
        "Weekly check-ins",
        "Advanced biometric tracking",
        "Exclusive Pro community",
        "24/7 priority support"
      ],
      notIncluded: [],
      recommended: false,
      buttonText: "Go Pro",
      buttonVariant: "outline" as const
    }
  ];

  const comparisonFeatures = [
    { feature: "Workout Plans", free: "Basic", premium: "AI-Generated", pro: "AI-Generated" },
    { feature: "Progress Tracking", free: "Limited", premium: "Full", pro: "Advanced" },
    { feature: "Voice Commands", free: "No", premium: "Yes", pro: "Yes" },
    { feature: "Personalized Coaching", free: "No", premium: "No", pro: "Yes" },
    { feature: "Nutrition Planning", free: "No", premium: "No", pro: "Custom" },
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="hero-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 glass-effect">
              💎 Choose Your Plan
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight px-4">
              Choose the Plan That's
              <span className="text-gradient block mt-2">Right for You</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4">
              Start your fitness journey with our flexible pricing options. Upgrade or downgrade anytime.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`card-hover glass-effect border-white/10 relative overflow-hidden ${
                  plan.recommended ? 'border-primary/50 shadow-lg shadow-primary/20' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className={`pb-4 ${plan.recommended ? 'pt-12' : 'pt-6'}`}>
                  <div className="text-center">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 opacity-50">
                        <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✗</span>
                        </div>
                        <span className="text-sm line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      plan.recommended 
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' 
                        : ''
                    }`}
                    variant={plan.buttonVariant}
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Feature Comparison</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Compare all plans side by side to find the perfect fit
            </p>
          </div>

          <Card className="glass-effect border-white/10 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-6 font-semibold">Features</th>
                      <th className="text-center p-6 font-semibold">Free</th>
                      <th className="text-center p-6 font-semibold text-primary">Premium</th>
                      <th className="text-center p-6 font-semibold">Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="border-b border-white/5">
                        <td className="p-6 font-medium">{item.feature}</td>
                        <td className="p-6 text-center text-muted-foreground">{item.free}</td>
                        <td className="p-6 text-center text-primary font-semibold">{item.premium}</td>
                        <td className="p-6 text-center text-muted-foreground">{item.pro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border-white/10 gradient-bg">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Join thousands of users who have transformed their lives with FitGenie. Start free, upgrade when you're ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                  Sign Up for Free
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg w-full sm:w-auto">
                  Upgrade to Premium
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
