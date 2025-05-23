
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Features = () => {
  const features = [
    {
      title: "AI-Powered Workouts",
      subtitle: "Smart Planning for Smart Results",
      description: "Our advanced AI analyzes your fitness profile, goals, and preferences to create personalized workout plans that adapt as you progress. Every exercise is optimized for maximum effectiveness.",
      icon: "🧠",
      highlights: ["Personalized routines", "Adaptive difficulty", "Goal-oriented planning", "Performance optimization"]
    },
    {
      title: "Voice Command Integration",
      subtitle: "Hands-Free Control",
      description: "Control your entire workout experience with simple voice commands. Start exercises, pause sessions, skip movements, and get real-time feedback without touching your device.",
      icon: "🎤",
      highlights: ["Voice-activated controls", "Real-time commands", "Hands-free operation", "Natural language processing"]
    },
    {
      title: "Progress Tracking",
      subtitle: "Visualize Your Success",
      description: "Track every aspect of your fitness journey with comprehensive analytics. Monitor strength gains, endurance improvements, and overall progress with intuitive charts and detailed insights.",
      icon: "📈",
      highlights: ["Detailed analytics", "Progress visualization", "Performance metrics", "Goal tracking"]
    },
    {
      title: "Responsive Design",
      subtitle: "Fitness on the Go",
      description: "Access FitGenie seamlessly across all your devices. Whether you're at home, in the gym, or traveling, your personal AI coach is always with you, optimized for any screen size.",
      icon: "📱",
      highlights: ["Cross-platform support", "Mobile optimization", "Offline capabilities", "Cloud synchronization"]
    }
  ];

  return (
    <Layout>
      {/* Header Section */}
      <section className="hero-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 glass-effect">
              ⚡ Advanced Features
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Revolutionize Your
              <span className="text-gradient block">Fitness Routine</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how FitGenie's advanced features can help you stay motivated and achieve your health goals with cutting-edge AI technology.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover glass-effect border-white/10 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {feature.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{feature.title}</CardTitle>
                      <p className="text-primary font-semibold">{feature.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              See <span className="text-gradient">FitGenie</span> in Action
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Watch how our AI-powered features work together to create the ultimate fitness experience.
            </p>
            <Card className="glass-effect border-white/10 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="aspect-video bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-6xl opacity-50">▶️</div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Interactive demo showcasing voice commands, AI workout generation, and real-time progress tracking.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                  Watch Full Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border-white/10 gradient-bg">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Experience the Future of Fitness
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to transform your fitness journey with AI-powered coaching? Start your free trial today.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Your Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
