import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

/* React Components */
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import Term from './Components/Search/Term'
import Selected from './Components/Search/Selected'
import CartPage from './Components/Cart/CartPage'
/* -------------- */

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/shop/*' element={<Shop />} />
          <Route path='/search/*' element={<Term />} />
          <Route path='/selected_item/*' element={<Selected />} />
          <Route path='/user-cart-items/*' element={<CartPage />} />
        </Routes>
      </Router>
  );
}

export default App;
