import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'
import Features from './components/Features';
import Footer from './components/Footer';
import WinTogether from './assets/win-together.png';
import AppleStore from './assets/apple-store.svg';
import GooglePlayStore from './assets/google-store.svg';

function App() {
  const [count, setCount] = useState(0)
  const mainStyle = {
    backgroundColor: '#101624',
    height: '100vh',
    width: '100vw',
    maxHeight: '100vh',
    overflowY: 'scroll',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,  // Lighter white with opacity
    backgroundSize: '80px 80px',

  }
  return (

    <div className='flex justify-between flex-col overflow-x-clip !scroll-smooth relative' style={mainStyle}>
      <div className="fixed w-full md:relative"><Header /></div>
      <Hero />
      <Features />
     
      <Footer />

    </div>

  )
}

export default App
