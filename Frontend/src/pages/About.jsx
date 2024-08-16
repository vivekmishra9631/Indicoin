import React from 'react';
import Navbar from '../HomeCompo/Navbar';
import Footer from '../HomeCompo/Footer';
import ceo from "../Assets/Ceo.jpg";
import coo from "../Assets/COO.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-800 text-white py-12">
        <div className="container mx-auto px-6">
          {/* Introduction Section */}
          <section className="mb-16">
            <h1 className="text-5xl font-bold mb-8 text-center">About <span className="text-indigo-400">INDICOIN</span></h1>
            <p className="text-lg mb-8 text-center max-w-4xl mx-auto">
              INDICOIN is a cutting-edge cryptocurrency pegged to the Indian Rupee, providing stability and security in the rapidly evolving world of digital finance. Built on the Rootstock blockchain, Indi Coin combines the security of Bitcoin with the versatility of smart contracts, enabling a new era of decentralized finance (DeFi) in India.
            </p>
            <p className="text-lg mb-8 text-center max-w-4xl mx-auto">
              Our mission is to empower individuals and businesses in India by offering a reliable and accessible digital currency that bridges the gap between traditional finance and the growing world of blockchain technology.
            </p>
          </section>

          {/* Mission & Vision Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Mission & Vision</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p>Our mission is to democratize access to financial services by leveraging blockchain technology to create a stable and secure digital currency that can be used by anyone, anywhere.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p>We envision a future where financial inclusion is a reality for all, and where blockchain technology enables a more transparent, efficient, and equitable global economy.</p>
              </div>
            </div>
          </section>

          {/* Timeline/Milestones Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Journey</h2>
            <div className="relative border-l border-gray-600 pl-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold">2023</h3>
                <p className="text-lg">Indi Coin was conceptualized with the aim of creating a stablecoin pegged to the Indian Rupee, built on the secure and scalable Rootstock blockchain.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold">2024</h3>
                <p className="text-lg">We launched our mainnet, allowing users to transact and build on our platform. We also introduced the Indi Coin DAO for decentralized governance.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold">2025</h3>
                <p className="text-lg">Our community grew to over 50,000 active wallets, and we partnered with leading financial institutions to integrate Indi Coin into everyday financial services.</p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          {/* <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <div className="bg-gray-800 p-7 rounded-lg shadow-lg text-center">
              <img src={ceo} alt="Team Member" className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Vivek Mishra</h3>
                <p className="text-lg">CEO & Founder</p>
              </div>
             
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <img src={coo} alt="Team Member" className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2">Shrikrushna Prajapati</h3>
                <p className="text-lg">COO</p>
              </div>
            </div>
          </section> */}

          {/* Technology Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Our Technology</h2>
            <p className="text-lg mb-8 text-center max-w-4xl mx-auto">
              Indi Coin is built on the Rootstock blockchain, which is a sidechain of Bitcoin. This allows us to leverage Bitcoin’s unparalleled security while enabling smart contract functionality. Our platform supports the development of decentralized applications (DApps), making it a versatile solution for developers and businesses alike.
            </p>
            <p className="text-lg mb-8 text-center max-w-4xl mx-auto">
              We also employ advanced cryptographic techniques to ensure the stability and security of our coin. By pegging Indi Coin to the Indian Rupee, we provide a stable digital currency that can be used for everyday transactions, reducing the volatility typically associated with cryptocurrencies.
            </p>
          </section>

          {/* Community Engagement Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Community Engagement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Community DAO</h3>
                <p>Our community is at the heart of Indi Coin. Through our decentralized autonomous organization (DAO), community members can vote on key decisions, ensuring that the future of Indi Coin is shaped by those who use it.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Global Partnerships</h3>
                <p>We actively collaborate with global financial institutions, blockchain developers, and other key players in the industry to expand the reach and utility of Indi Coin. Together, we are building a more inclusive financial future.</p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="text-center">
            <h2 className="text-4xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-lg mb-8">Be a part of the revolution in digital finance. Whether you're a developer, an investor, or simply curious, there's a place for you in the Indi Coin community.</p>
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
              Get Involved
            </button>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;