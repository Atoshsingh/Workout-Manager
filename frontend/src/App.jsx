import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Home from "./pages/Home.js"


import Navbar from './components/Navbar';
function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home
              />}>
              </Route>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App
//npm install react-router-dom
