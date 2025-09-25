import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Navbar/Banner'
import Blogs from './components/Blogs/Blogs'

function App() {
 
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Blogs></Blogs>
    </>
  )
}

export default App
