import React from 'react'
import Landing from './Pages/Landing'
import { Navbar } from './Components/LandingPage/Navbar'

export default function App() {
  return (
    <div style={{padding: "0em "}}>
      <Navbar />

      <Landing />
    </div>
  )
}
