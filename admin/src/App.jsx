import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Footer />
    </div>
  </BrowserRouter>
  )
}

export default App
