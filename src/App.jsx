// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


import Navbar from "./components/header/Navbar";
import MainComponent from "./components/main/MainComponent";
import Footer from "./components/footer/Footer";

// const images={

// }

function App() {

  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-[30px] text-center text-black"></h1>
      <div className="grid grid-cols-4 gap-5 p-7 px-[80px] pt-10">
        <MainComponent />
        <MainComponent />
        <MainComponent />
        <MainComponent />
        </div>
        <div className="grid grid-cols-4 gap-5  pb-7  px-[80px]">
          <MainComponent />
          <MainComponent />
        </div>
        <div >
          <Footer></Footer>
        </div>
    </>
  )
}

export default App
