import React from "react";
import Header from "../components/header_footer/Header";
import Portfolio from "../features/pages/Portfolio";
import Footer from "../components/header_footer/Footer";
import SmoothScroll from "../components/SmoothScroll";

const App = () => {
  return (
    <>
      <SmoothScroll>
        <div className="bg-[#212121] text-white min-h-screen w-full" id="home">
          <Header />
          <main className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-16 lg:py-20">
            <Portfolio />
          </main>
          <footer className="w-full">
            <Footer />
          </footer>
        </div>
      </SmoothScroll>
    </>
  );
};

export default App;
