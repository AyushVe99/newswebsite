import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from'./Components/Pages/Home'
import Footer from './Components/Footer'
import FetchData from './Components/FetchData'
const App = () => {

  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/general" element={<FetchData cat="general"/>}/>
        <Route path="/business" element={<FetchData cat="business"/>}/>
        <Route path="/entertainment" element={<FetchData cat="entertainment"/>}/>
        <Route path="/health" element={<FetchData cat="health"/>}/>
        <Route path="/science" element={<FetchData cat="science"/>}/>
        <Route path="/sports" element={<FetchData cat="sports"/>}/>
        <Route path="/technology" element={<FetchData cat="technology"/>}/>
       
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  )
}

export default App
