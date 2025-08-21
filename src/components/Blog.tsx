import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Multi-Agent Systems in Enterprise AI",
      excerpt: "Exploring how coordinated AI agents are revolutionizing complex business processes and decision-making workflows across industries.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI Innovation",
      tags: ["Multi-Agent Systems", "Enterprise AI", "Workflow Automation"]
    },
    {
      id: 2,
      title: "Advanced Prompt Engineering: Techniques for Maximum LLM Performance",
      excerpt: "Deep dive into sophisticated prompt engineering strategies that unlock the full potential of large language models for business applications.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Prompt Engineering",
      tags: ["LLM Optimization", "Prompt Design", "AI Performance"]
    },
    {
      id: 3,
      title: "Building Scalable AI Workflows: Architecture Best Practices",
      excerpt: "Learn the essential principles and patterns for designing AI workflows that scale efficiently from prototype to production.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Architecture",
      tags: ["AI Workflows", "Scalability", "Best Practices"]
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights on AI trends, 
            prompt engineering techniques, and innovative workflow solutions.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(blogPosts[0].date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Other Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readTime}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated with AI Innovations
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter for exclusive insights, prompt engineering tips, 
            and the latest AI workflow strategies delivered to your inbox.
          </p>
          <div className="w-full max-w-lg mx-auto px-4">
           <div className="flex flex-col sm:flex-row gap-3">
            <input
             type="email"
             placeholder="Enter your email"
             className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Subscribe
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-3 text-center sm:text-left">
          No spam, unsubscribe anytime. Join 10,000+ AI enthusiasts.
          </p>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Blog;