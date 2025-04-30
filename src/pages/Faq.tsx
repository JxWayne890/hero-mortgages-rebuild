
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Plus, Minus } from 'lucide-react';

const Faq = () => {
  // Sample FAQ items - would be replaced with actual FAQ content
  const faqItems = [
    {
      question: "What is DSCR financing?",
      answer: "(FAQ content coming soon)"
    },
    {
      question: "How does DSCR lending differ from traditional mortgages?",
      answer: "(FAQ content coming soon)"
    },
    {
      question: "What are the minimum requirements for a DSCR loan?",
      answer: "(FAQ content coming soon)"
    },
    {
      question: "How quickly can I get approved for a DSCR loan?",
      answer: "(FAQ content coming soon)"
    },
    {
      question: "What documentation is required for a DSCR loan application?",
      answer: "(FAQ content coming soon)"
    }
  ];
  
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
  
  const toggleItem = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[72px]">
        <div className="container max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-midnight mb-10 text-center">Frequently Asked Questions</h1>
          
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button 
                  className="w-full flex justify-between items-center p-6 bg-light-grey hover:bg-gray-100 transition-colors text-left"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItemIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-bold text-midnight">{item.question}</h3>
                  {openItemIndex === index ? (
                    <Minus className="flex-shrink-0 text-royal-blue" />
                  ) : (
                    <Plus className="flex-shrink-0 text-royal-blue" />
                  )}
                </button>
                
                {openItemIndex === index && (
                  <div 
                    id={`faq-answer-${index}`}
                    className="p-6 bg-white"
                  >
                    <p className="text-lg">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faq;
