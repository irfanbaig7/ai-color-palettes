import React, { useState } from 'react';

const App = () => {

  const [prompt, setPrompt] = useState("");
  const [colors, setColors] = useState([]);

  const handleGenerate = () => {
    if (!prompt.trim()) {
      alert("Please describe a theme before generating.");
      return;
    }

    const dummyPalette = [
      "#1E293B",
      "#0EA5E9",
      "#F97316",
      "#22C55E",
      "#E5E7EB",
    ];

    setColors(dummyPalette);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-6">
      <div className="w-full max-w-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          AI Color Palette Generator
        </h1>

        {/* Input + Button */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Describe your theme (e.g. calm, sunset, dark mode)"
            className="flex-1 border px-3 py-2 rounded-md focus:outline-none"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button
            className="bg-black text-white px-4 py-2 rounded-md"
            onClick={handleGenerate}
          >
            Generate
          </button>
        </div>

        {/* Placeholder for generated palette */}
        <div className="bg-white p-4 rounded-lg shadow min-h-[120px]">
          {colors.length === 0 ? (
            <p className="text-gray-500 text-center">
              Your color palette will appear here...
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {colors.map((color) => (
                <div
                  key={color}
                  className="rounded-md border overflow-hidden"
                >
                  <div
                    className="h-16"
                    style={{ backgroundColor: color }}
                  />
                  <div className="px-2 py-1 text-sm flex justify-between items-center">
                    <span>{color}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default App;
