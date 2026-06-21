import React from 'react'
import Header from '../components/header_footer/Header'
import Portfolio from '../features/pages/Portfolio'
import Footer from '../components/header_footer/Footer'

const App = () => {
  return (
    <div className="bg-[#212121] text-white w-full">
      <Header />
      <div className="py-25">
     <Portfolio />
      </div>
    <div className='w-full flex items-center justify-center'>
      <Footer />
      </div>
      </div>
  )
}

export default App