import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import Shop from './pages/Shop.js';
import Home from './pages/Home.js'
import Header from './component/Header.js'
import Footer from './component/Footer.js'
import Adventure from './pages/Adventure.js';
import LevelBuy from './component/LevelBuy.js';
// juro que combat 2.0 vai existir!
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        {/* <Route exact path='/shop' element={ <Shop /> } /> */}
        <Route exact path='/adventure' element={ <Adventure /> } />
        <Route exact path='/level' element={ <LevelBuy /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
