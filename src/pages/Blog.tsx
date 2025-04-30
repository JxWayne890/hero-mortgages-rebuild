
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const Blog = () => {
  // Sample blog posts - would be replaced with actual blog content
  const blogPosts = [
    {
      id: 1,
      title: "How DSCR Lenders Determine Rates",
      date: "April 15, 2025",
      excerpt: "Understanding how DSCR lenders calculate rates is essential for securing the best financing terms for your investment property...",
      slug: "how-dscr-lenders-determine-rates"
    },
    {
      id: 2,
      title: "Top 5 Myths About Investment Property Financing",
      date: "March 28, 2025",
      excerpt: "Many real estate investors have misconceptions about DSCR loans that could be holding them back from optimal financing solutions...",
      slug: "top-5-myths-about-investment-property-financing"
    },
    {
      id: 3,
      title: "The Benefits of Long-Term DSCR Loans",
      date: "March 10, 2025",
      excerpt: "Exploring the advantages of 30-year fixed DSCR loans for long-term real estate investors focused on building sustainable wealth...",
      slug: "benefits-of-long-term-dscr-loans"
    },
    {
      id: 4, 
      title: "Short-Term Rentals and DSCR Financing",
      date: "February 22, 2025",
      excerpt: "How to navigate the unique challenges and opportunities of financing Airbnb and other short-term rental properties with DSCR loans...",
      slug: "short-term-rentals-and-dscr-financing"
    },
    {
      id: 5,
      title: "What's Changed in DSCR Lending for 2025",
      date: "February 5, 2025",
      excerpt: "An overview of the latest trends, requirements, and opportunities in DSCR financing for real estate investors this year...",
      slug: "whats-changed-in-dscr-lending"
    },
    {
      id: 6,
      title: "DSCR vs. Traditional Financing: Which is Right for You?",
      date: "January 18, 2025",
      excerpt: "A comprehensive comparison to help investors determine the best financing strategy for their specific real estate investment goals...",
      slug: "dscr-vs-traditional-financing"
    },
    {
      id: 7,
      title: "Portfolio Loans Explained",
      date: "January 3, 2025",
      excerpt: "Everything you need to know about financing multiple properties under a single loan for more efficient real estate investing...",
      slug: "portfolio-loans-explained"
    },
    {
      id: 8,
      title: "Fix and Flip Financing Strategies",
      date: "December 12, 2024",
      excerpt: "Exploring the best loan products and approaches for financing your next fix and flip project for maximum profit...",
      slug: "fix-and-flip-financing-strategies"
    },
    {
      id: 9,
      title: "Understanding Cash-Out Refinance with DSCR",
      date: "November 29, 2024",
      excerpt: "How to leverage the equity in your investment properties to expand your portfolio while maintaining positive cash flow...",
      slug: "understanding-cash-out-refinance-dscr"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]">
        {/* Hero Section */}
        <div className="bg-midnight text-white py-16 px-4">
          <div className="container max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl opacity-90">Insights on DSCR Lending</p>
          </div>
        </div>
        
        {/* Blog Posts */}
        <div className="container max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-midnight mb-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                  <p className="mb-6 flex-grow">{post.excerpt}</p>
                  <NavLink to={`/blog/${post.slug}`} className="text-royal-blue font-bold hover:underline mt-auto">
                    Read Article
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
