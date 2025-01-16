import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [url, setUrl] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    if (url) {
      setShowQR(true);
    } else {
      setShowQR(false);
    }
  }, [url]);

  useEffect(() => {
    // بعد از 2 ثانیه لوگو ناپدید می‌شود و صفحه اصلی نمایش داده می‌شود
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center font-poppins'>
      {/* Overlay for background pattern */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-75'
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")',
        }}
      ></div>

      {/* Animated Logo */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1 }}
            className='absolute z-20'
          >
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white'>S I N A B</h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!showLogo && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative bg-gray-800 bg-opacity-75 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg text-center z-10 w-full max-w-md mx-4'
        >
          <h1 id='neon-title' className='text-2xl sm:text-3xl md:text-4xl font-bold p-6'>
            {["Q", "R", " ", "G", "e", "n", "e", "r", "a", "t", "o", "r"].map((letter, index) => (
              <span
                key={index}
                className={`inline-block neon-text ${letter === " " ? "w-4" : ""}`} // اضافه کردن فاصله
                style={{ "--delay": index * 0.2 }}
              >
                {letter}
              </span>
            ))}
          </h1>

          <input
            type='text'
            placeholder='https://example.com'
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className='w-full p-2 sm:p-3 mb-4 border rounded bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all'
          />

          <AnimatePresence>
            {showQR && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className='mt-6 flex justify-center'
              >
                <QRCode value={url} size={150} fgColor='#ffffff' bgColor='transparent' />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Footer */}
      <footer className='fixed bottom-4 text-center z-10'>
        <p className='text-sm sm:text-md'>
          Created By{" "}
          <a
            href='https://sinab.framer.website/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:underline'
          >
            Sinab
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;