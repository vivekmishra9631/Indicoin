import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is INDICOIN and how does it work?',
      answer: 'INDICOIN is a stablecoin pegged to the Indian Rupee (INR), backed by fiat reserves and designed to offer stability and efficiency for INR-based transactions. It is deployed on polygon platform to ensure security and transparency.'
    },
    {
      question: 'How does INDICOIN maintain a 1:1 peg with the INR?',
      answer: 'INDICOIN maintains its INR peg by backing the stablecoin with sufficient INR reserves. This ensures that each INDICOIN is fully supported by real assets, offering stability to its value.'
    },
    {
      question: 'What are the key benefits of using INDICOIN?',
      answer: 'INDICOIN provides several advantages, including instant transactions, yield generation by holding the coin, and the elimination of third-party commissions, which reduce costs for businesses and consumers alike.'
    },
    {
      question: 'How does the INDICOIN DAO function?',
      answer: 'The INDICOIN DAO (Decentralized Autonomous Organization) governs the ecosystem, allowing token holders to vote on critical decisions like reserve allocation, fee structures, and platform development, ensuring transparency and decentralization.'
    },
    {
      question: 'What is the purpose of the DApp development platform offered by INDICOIN?',
      answer: 'The DApp development platform empowers developers by providing tools such as smart contract templates, SDKs, and secure API access to build innovative INR-based decentralized applications (DApps) that integrate seamlessly with INDICOIN.'
    },
    {
      question: 'How does INDICOIN contribute to financial inclusion in India?',
      answer: 'By offering a stable, INR-pegged digital currency, INDICOIN aims to bridge the financial inclusion gap in India, especially in rural and underserved areas, by providing accessible and secure payment solutions.'
    },
    {
      question: 'What partnerships and collaborations support the INDICOIN ecosystem?',
      answer: 'INDICOIN is supported by partnerships with blockchain technology providers, financial institutions, and digital platforms. These collaborations help in maintaining the infrastructure, ensuring regulatory compliance, and enhancing user engagement.'
    },
    {
      question: 'What are the security measures in place for INDICOIN?',
      answer: 'INDICOIN employs robust cybersecurity measures and complies with regulatory requirements to ensure the security of transactions and user funds.'
    }
  ];

  return (
    <div className="bg-gray-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button 
                onClick={() => toggleFAQ(index)} 
                className="w-full text-left p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 ease-in-out"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{faq.question}</h3>
                  <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-gray-800 rounded-b-lg">
                  <p className="text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
