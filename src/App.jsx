import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Second from './components/Second'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import Features from './components/Features'
import Experts from './components/Experts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Second/>
      <Features/>
      <ImageSlider/>
      <Experts/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default App
