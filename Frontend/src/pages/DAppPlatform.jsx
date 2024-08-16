import React from 'react';
import Navbar from '../HomeCompo/Navbar';
import Footer from '../HomeCompo/Footer';

const DAppPlatform = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-8 text-center">DApp Development Platform</h1>
          <p className="text-lg mb-12 text-center max-w-3xl mx-auto">
            Build innovative applications on our platform with pre-built smart contract templates, comprehensive SDKs, and secure API access. Empower your creativity with the tools you need to bring your ideas to life on the secure and scalable Rootstock blockchain.
          </p>

          {/* Platform Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Smart Contracts</h2>
              <p>Create and deploy smart contracts that can be customized to suit your application's needs, ensuring quick and secure deployments to build RWA.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Secure Wallet Infrastructure</h2>
              <p>Inbuilt secure wallet infrastructure enabling secure, in-app digital asset management and enterprise-level transactions.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Secure API Access</h2>
              <p>Utilize our secure APIs to integrate your DApps with the Indi Coin ecosystem, enabling seamless interaction with other decentralized services.</p>
            </div>
          </div>

          {/* Developer Tools Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">Developer Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Integrated Development Environment (IDE)</h3>
                <p>Leverage our cloud-based IDE designed for DApp development, with real-time collaboration, debugging tools, and deployment capabilities.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Blockchain Explorer</h3>
                <p>Gain insights into the blockchain with our integrated explorer, allowing you to track transactions, monitor contract performance, and more.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Testnet Environment</h3>
                <p>Deploy and test your DApps in our robust testnet environment before going live, ensuring everything works perfectly in a controlled setting.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Developer Community</h3>
                <p>Join a vibrant community of developers to share knowledge, collaborate on projects, and stay updated with the latest in blockchain technology.</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">What Developers Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="italic mb-4">"The Indi Coin platform has transformed how we develop and deploy decentralized applications. The tools are top-notch and the support is exceptional."</p>
                <p className="font-bold">- Sarah K., Lead Developer at CryptoDev</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                <p className="italic mb-4">"The seamless integration with the Rootstock blockchain and the comprehensive SDKs have made our development process faster and more efficient."</p>
                <p className="font-bold">- John D., Blockchain Engineer at FinTech Solutions</p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Build the Future?</h2>
            <p className="text-lg mb-8">Join the Indi Coin DApp development platform and start creating groundbreaking decentralized applications today.</p>
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DAppPlatform;
