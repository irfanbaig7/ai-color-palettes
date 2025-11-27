import React from 'react'

const App = () => {
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
          />

          <button className="bg-black text-white px-4 py-2 rounded-md">
            Generate
          </button>
        </div>

        {/* Placeholder for generated palette */}
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500 text-center">
            Your color palette will appear here...
          </p>
        </div>

      </div>
    </div>
  )
}

export default App