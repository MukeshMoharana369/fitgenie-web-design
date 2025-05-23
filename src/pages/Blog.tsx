
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Layout from '@/components/Layout';

const Blog = () => {
  const featuredArticles = [
    {
      title: "The Science Behind AI-Powered Fitness Coaching",
      excerpt: "Discover how artificial intelligence is revolutionizing personalized fitness and why it's more effective than traditional approaches.",
      category: "AI Technology",
      readTime: "5 min read",
      date: "2024-01-15",
      image: "🧬"
    },
    {
      title: "Voice Commands: The Future of Hands-Free Workouts",
      excerpt: "Learn how voice control technology is making workouts more accessible and efficient for fitness enthusiasts worldwide.",
      category: "Technology",
      readTime: "4 min read",
      date: "2024-01-12",
      image: "🎤"
    },
    {
      title: "Tracking Progress: Why Data Drives Results",
      excerpt: "Understanding the importance of fitness analytics and how proper tracking can accelerate your progress toward your goals.",
      category: "Progress",
      readTime: "6 min read",
      date: "2024-01-10",
      image: "📊"
    }
  ];

  const recentArticles = [
    {
      title: "10 Effective Home Workouts for Beginners",
      category: "Workouts",
      date: "2024-01-08",
      readTime: "7 min read"
    },
    {
      title: "Nutrition Myths Debunked by Science",
      category: "Nutrition",
      date: "2024-01-05",
      readTime: "5 min read"
    },
    {
      title: "Building Consistency: Mental Strategies for Success",
      category: "Motivation",
      date: "2024-01-03",
      readTime: "4 min read"
    },
    {
      title: "FitGenie App Update: New Features Released",
      category: "App Updates",
      date: "2024-01-01",
      readTime: "3 min read"
    },
    {
      title: "The Psychology of Fitness Motivation",
      category: "Motivation",
      date: "2023-12-28",
      readTime: "6 min read"
    },
    {
      title: "Winter Workout Ideas to Stay Active",
      category: "Workouts",
      date: "2023-12-25",
      readTime: "5 min read"
    }
  ];

  const categories = ["All", "Workouts", "Nutrition", "Motivation", "App Updates", "AI Technology"];

  return (
    <Layout>
      {/* Header Section */}
      <section className="hero-gradient py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 glass-effect">
              📚 Learn & Grow
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fitness <span className="text-gradient">Insights & Tips</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Stay informed with the latest trends, advice, and insights from FitGenie experts to maximize your fitness journey.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Featured Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our most popular and impactful content to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="card-hover glass-effect border-white/10 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="text-6xl mb-4 text-center">{article.image}</div>
                  <Badge variant="secondary" className="w-fit mb-3">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-20 lg:py-32 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article List */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-8">Recent Articles</h3>
              <div className="space-y-6">
                {recentArticles.map((article, index) => (
                  <Card key={index} className="card-hover glass-effect border-white/10">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">
                            {article.category}
                          </Badge>
                          <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Read
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8 sticky top-24">
                {/* Search */}
                <Card className="glass-effect border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg">Search Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input placeholder="Search..." className="flex-1" />
                      <Button size="sm">Search</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="glass-effect border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <Button
                          key={index}
                          variant={index === 0 ? "default" : "ghost"}
                          className="w-full justify-start"
                          size="sm"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="glass-effect border-white/10">
                  <CardHeader>
                    <CardTitle className="text-lg">Subscribe for Weekly Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get the latest fitness insights delivered to your inbox every week.
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Your email address" type="email" />
                      <Button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-effect border-white/10 gradient-bg">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to Put Knowledge into Action?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your fitness journey with FitGenie's AI-powered coaching. Start applying what you've learned today.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Start Your Fitness Journey
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
