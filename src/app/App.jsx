import React from 'react'
import Header from '../components/header/Header'
import Hero from '../features/hero_page/Hero'

const App = () => {
  return (
    <div className="bg-[#212121] text-white h-screen w-full flex flex-col items-center">
      <Header />
      <Hero/>
      </div>
  )
}

export default App