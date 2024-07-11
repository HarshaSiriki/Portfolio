import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Feedbacks, Hero,Navbar, Tech, Works, StarsCanvas } from './components';
import { Stars } from "@react-three/drei";

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <div className="relative z-0 bg-body-pattern bg-fit bg-cover bg-no-repeat bg-center">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
