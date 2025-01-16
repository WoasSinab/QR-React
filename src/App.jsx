import React, { useState } from "react";
import QRCode from "react-qr-code";

function App() {
  const [url, setUrl] = useState("");

  const handleGenerateQRCode = () => {
    if (!url) {
      alert("لطفا یک آدرس وارد کنید!");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      {/* Main Content */}
      <div className="text-center">
        <h1 id="neon-title" className="text-4xl font-bold mb-4">
          {["Q", "R", " ", "C", "o", "d", "e"].map((letter, index) => (
            <span
              key={index}
              className="inline-block neon-text"
              style={{ "--delay": index * 0.2 }}
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="mb-6">لطفا آدرس مورد نظر خود را وارد کنید:</p>

        <input
          type="text"
          placeholder="مثال: https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-2 mb-4 border rounded bg-gray-700 border-gray-600 text-white"
        />

        <button
          onClick={handleGenerateQRCode}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          ایجاد QR Code
        </button>

        {url && (
          <div className="mt-6 flex justify-center">
            <QRCode value={url} size={200} fgColor="#ffffff" bgColor="transparent" />
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