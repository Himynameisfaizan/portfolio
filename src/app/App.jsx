import React from 'react'
import Header from '../components/header/Header'
import Hero from '../features/pages/Hero'
import Intro from '../features/pages/Intro'
import Portfolio from '../features/pages/Portfolio'

const App = () => {
  return (
    <div className="bg-[#212121] text-white w-full">
      <Header />
     <Portfolio />
      </div>
  )
}

export default App