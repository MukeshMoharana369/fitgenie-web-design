
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    "/lovable-uploads/5ad26a09-cb16-42da-a15e-93b3b16dc3a8.png",
    "/lovable-uploads/18221ed4-ed79-4c15-9e55-d255955920de.png",
    "/lovable-uploads/212cf2e2-506b-4c20-8680-e42c327b0e10.png",
    "/lovable-uploads/54a73b7e-2271-4272-81ed-367899b056a8.png",
    "/lovable-uploads/dcc56fa8-78d1-4a37-8ef0-2e100a072c77.png",
    "/lovable-uploads/ae446542-faf8-41f0-9a46-0c8a318f9d89.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const features = [
    {
      title: "AI-Generated Workouts",
      description: "Personalized plans based on your goals and schedule.",
      icon: "🤖"
    },
    {
      title: "Voice Command Integration",
      description: "Control your workouts hands-free with voice commands.",
      icon: "🎤"
    },
    {
      title: "Progress Tracking",
      description: "Visualize your improvements over time with detailed analytics.",
      icon: "📊"
    },
    {
      title: "Responsive Design",
      description: "Access your coach anytime, anywhere on any device.",
      icon: "📱"
    }
  ];

  const testimonials = [
    {
      name: "Alex T.",
      text: "FitGenie transformed my fitness journey! The AI workouts are spot-on.",
      rating: 5
    },
    {
      name: "Sarah M.",
      text: "Voice commands make working out so much easier. Love this app!",
      rating: 5
    },
    {
      name: "Mike R.",
      text: "The progress tracking keeps me motivated every single day.",
      rating: 5
    }
  ];

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Image Background */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Fitness motivation ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80"></div>
            </div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 glass-effect">
              🚀 Powered by Advanced AI
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Your AI-Powered
              <span className="text-gradient block">Personal Fitness Coach</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Customized workouts, real-time tracking, and voice-guided sessions tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 text-lg w-full sm:w-auto">
                  Get Started for Free
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg w-full sm:w-auto"
                onClick={scrollToDemo}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Features Overview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-gradient">FitGenie?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of fitness with our cutting-edge AI technology designed to maximize your results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover glass-effect border-white/10">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/features">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                Learn More About Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-20 lg:py-32 bg-slate-900/50">
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
                <div className="aspect-video bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-6 cursor-pointer hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300">
                  <div className="text-6xl opacity-75 hover:opacity-100 transition-opacity">▶️</div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Interactive demo showcasing voice commands, AI workout generation, and real-time progress tracking.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Play Demo Video
                  </Button>
                  <Link to="/features">
                    <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      Explore All Features
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              See how FitGenie has transformed lives around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover glass-effect border-white/10">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">– {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Read More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border-white/10 gradient-bg">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to Achieve Your Fitness Goals?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have transformed their lives with FitGenie's AI-powered coaching.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/pricing">
                  <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold w-full sm:w-auto">
                    Join FitGenie Now
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
