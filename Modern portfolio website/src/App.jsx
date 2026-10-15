import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import About from "./components/About"
import Customcursor from "./components/Customcursor"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ProgressBar from "./components/ProgressBar"

const App = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.refresh()

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  },[])

  return (
    <>
      <Header />
      <Hero />
      <Customcursor />
      <About />
      <Project />
      <Contact/>
      <Footer/>
      <ProgressBar/>
    </>
  )
}

export default App
