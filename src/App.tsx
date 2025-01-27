import React, { useState } from 'react';
import { Rocket, Copy, Twitter, MessageCircle } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);
  const walletAddress = "5TaSR6RgfC4o7NNAW7ybYXEKCf9x6stZz7GCLnJ8pump";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 via-green-500 to-lime-600 animate-gradient-y">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="relative z-10">
            {/* Title Image */}
            <div className="mb-6">
            <img
  src="/images/FARTMOMMY.jpeg"
  alt="FARTMOMMY"
  className="w-60 mx-auto border-4 border-lime-300 shadow-xl animate-bounce object-contain"
/>

            </div>
            <h1 className="text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-300 to-green-400 mb-4 animate-pulse">
              FARTMOMMY
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-comic">
              👑 The queen of memes and the gas behind your gains 💨🦸‍♀️
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <button className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform shadow-lg">
                <Rocket className="w-5 h-5" /> Buy Now
              </button>
              <div className="flex items-center bg-emerald-600/50 rounded-full p-2 px-4 backdrop-blur-sm">
                <span className="text-white mr-2 font-mono text-sm">{walletAddress}</span>
                <button
                  onClick={copyToClipboard}
                  className="bg-lime-500 hover:bg-lime-600 p-2 rounded-full transform hover:scale-105 transition-transform"
                >
                  <Copy className="w-4 h-4 text-white" />
                </button>
                {copied && (
                  <span className="ml-2 text-lime-300 text-sm">Copied!</span>
                )}
              </div>
            </div>
            {/* Scanner Links */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <a
                href="https://pump.fun/coin/5TaSR6RgfC4o7NNAW7ybYXEKCf9x6stZz7GCLnJ8pump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform shadow-lg"
              >
                <img className="w-6 h-6" src="https://cdn.brandfetch.io/idU_zAl8PX/w/64/h/64/theme/light/logo.png?c=1dxbfHSJFAPEGdCLU4o5B" />
                PumpFun
              </a>
              <a
                href="https://dexscreener.com/solana/5TaSR6RgfC4o7NNAW7ybYXEKCf9x6stZz7GCLnJ8pump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 px-8 rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform shadow-lg"
              >
                <img className="w-6 h-6" src="/images/dex.png" />
                DexScanner
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-emerald-600/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-lime-300 mb-4">The Legend Continues</h2>
            <p className="text-xl text-white">
              Before #FARTBOY and #FARTGIRL, there was the queen herself, #FARTMOMMY! 
              The matriarch of meme coins has arrived to show everyone how it's done! 👑
            </p>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-emerald-600/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-lime-300 mb-12">Join the Family</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://x.com/FARTMOMMY_SOL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 p-4 rounded-full transform hover:scale-110 transition-transform shadow-lg"
            >
              <img className="w-10 h-10" src="/images/telegram.svg" />
            </a>
            <a
              href="https://t.me/FART_MOMMY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime-500 hover:bg-lime-600 p-4 rounded-full transform hover:scale-110 transition-transform shadow-lg"
            >
              <img className="w-10 h-10" src="/images/x.png" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-800/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lime-300">
            © 2024 FARTMOMMY. All rights reserved. This is not financial advice.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
