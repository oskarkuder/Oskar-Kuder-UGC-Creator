
import React, { useState } from 'react';
import Section from './components/Section';
import ContactModal from './components/ContactModal';
import { InstagramIcon, TikTokIcon, MailIcon } from './constants';
import { profileImageBase64 } from './imageConstants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <main>
        {/* Hero Section */}
        <Section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black opacity-80 z-10"></div>
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb91?q=80&w=3456&auto=format&fit=crop"
              alt="Abstract background"
              className="object-cover w-full h-full opacity-10 blur-sm"
            />
          </div>
          <div className="relative z-20 p-4">
            <img
              src={profileImageBase64}
              alt="Oskar Kuder's Profile Picture"
              className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-gray-700 shadow-lg"
            />
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter">
              Oskar Kuder
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300 font-medium">
              UGC Creator <span className="text-amber-400">&</span> Social Media Manager
            </p>
            <p className="mt-2 max-w-2xl mx-auto text-gray-400">
              I create authentic content that doesn't feel like an ad, specializing in high-volume video and full-service management.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-block bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg hover:bg-amber-500 transition-transform transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 uppercase tracking-widest">Currently Working With</p>
              <div className="flex items-center justify-center gap-6 mt-3">
                <p className="text-2xl font-bold text-gray-200">Parakeet AI</p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com/oskarkuder2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                    aria-label="Visit Oskar Kuder's Instagram"
                  >
                    <InstagramIcon className="h-7 w-7" />
                  </a>
                  <a
                    href="https://tiktok.com/oskarkuder2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                    aria-label="Visit Oskar Kuder's TikTok"
                  >
                    <TikTokIcon className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="bg-black/30 py-8 px-4 text-center">
          <p className="text-gray-500 text-sm mt-2">Built with ❤️ and powered by creativity.</p>
        </footer>

        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>
    </div>
  );
};

export default App;