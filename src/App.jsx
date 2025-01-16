import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import HighLights from "./components/HighLights"
import Model from "./components/Model"
import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
const App = ()=> {


  return (
    <main className="bg-black overflow-hidden overflow-y-scroll no-scrollbar">
      <Navbar/>
      <Hero/>
      <HighLights/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default App;
