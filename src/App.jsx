import { useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Recommendations from './components/Recommendations'
import Features from './components/Features'
import './App.css'

function App() {
  const recommendationsRef = useRef(null);

  // Funcionalidad estática de subida de imagen
  const handleFakeUpload = (fileBlobUrl) => {
    // Cuando el timer del Hero termine, se llama a esta función
    // y hacemos un scroll suave a la sección de recomendaciones.
    if (recommendationsRef.current) {
      recommendationsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Hero onUpload={handleFakeUpload} />
      <HowItWorks />
      <div ref={recommendationsRef}>
        <Recommendations />
      </div>
      <Features />
    </div>
  )
}

export default App
