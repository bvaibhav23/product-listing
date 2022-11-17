import { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import About from './components/About';

import AxoisData from './components/AxoisData/AxiosData';
import ShowMore from './components/AxoisData/ShowMore';
import Cart from './components/cart/Cart';
import Contact from './components/Contact';
import NavBar from './components/NavBar/NavBar';


function App() {
  const [getSearch, setSearch] = useState("");
  const [cartItem, setItem] = useState([]);
  const [ShowItem, setShowItem] = useState([]);
  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  }
  const onClickHandle = (item) => {
    // console.log(item);
    setShowItem([item])

  }
  const AddToCart = (item) => {
    // console.log(item);
    if (!cartItem.includes(item))
      setItem([...cartItem, item]);

  }

  return (<>
    <NavBar onChangeHandler={onChangeHandler} />


    <Routes>
      <Route exact path="/" element={<AxoisData getSearch={getSearch} onClickHandle={onClickHandle} />} />
      <Route path="/cart" element={<Cart cartItem={cartItem} />} />
      <Route path='/ShowMore' element={<ShowMore ShowItem={ShowItem} AddToCart={AddToCart} />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </>);
}

export default App;
