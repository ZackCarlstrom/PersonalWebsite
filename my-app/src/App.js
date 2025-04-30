import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-green-900">
      

      {/* Main text */}
      <h1 className="text-3xl md:text-4xl font-semibold text-center">Work in Progress</h1>

      {/* Animated dots */}
      <div className="flex space-x-1 mt-2">
        <div className="w-2 h-2 bg-green-700 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-2 h-2 bg-green-700 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-2 h-2 bg-green-700 rounded-full animate-bounce"></div>
      </div>

      {/* Subtitle */}
      <p className="text-green-700 mt-4 text-sm text-center">This portfolio page is coming soon! -Zachary Carlstrom</p>
    </div>
  );
}

export default App;



