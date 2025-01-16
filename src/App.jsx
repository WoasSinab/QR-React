import React, { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [url, setUrl] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleGenerateQRCode = () => {
    if (!url) {
      alert("لطفا یک آدرس وارد کنید!");
      return;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Dark Mode Toggle */}
      <div className="fixed top-4 left-4">
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className={`w-10 h-4 ${darkMode ? "bg-blue-600" : "bg-gray-400"} rounded-full shadow-inner`}></div>
            <div className={`absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition-transform ${darkMode ? "transform translate-x-6" : ""}`}></div>
          </div>
          <span className="ml-2">{darkMode ? "حالت روشن" : "حالت تاریک"}</span>
        </label>
      </div>

      {/* Main Content */}
      <div className={`p-8 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <h1 id="neon-title">
          {["Q", "R", " ", "C", "o", "d", "e"].map((letter, index) => (
            <span
              key={index}
              style={{ "--delay": index * 0.2 }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="mb-6 text-center">لطفا آدرس مورد نظر خود را وارد کنید:</p>

        <input
          type="text"
          placeholder="مثال: https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className={`w-full p-2 mb-4 border rounded ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-white border-gray-300 text-gray-900"}`}
        />

        <button
          onClick={handleGenerateQRCode}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          ایجاد QR Code
        </button>

        {url && (
          <div className="mt-6 flex justify-center">
            <QRCode value={url} size={200} fgColor={darkMode ? "#ffffff" : "#000000"} bgColor="transparent" />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="fixed bottom-4 text-center">
        <p>
          Created By{" "}
          <a
            href="https://sinab.framer.website/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Sinab
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;