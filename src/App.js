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
    let isPersent = false;
    cartItem.forEach((itm) => {
      if (itm.id_product === item.id_product)
        isPersent = true;
    })
    if (!isPersent)
      setItem([...cartItem, item]);

  }
  const removeHandler = (id) => {
    const newList = cartItem.filter((itm) => itm.id_product !== id);

    setItem(newList);
    // console.log(newList)
  }

  return (<>
    <NavBar onChangeHandler={onChangeHandler} />


    <Routes>
      <Route exact path="/" element={<AxoisData getSearch={getSearch} AddToCart={AddToCart} onClickHandle={onClickHandle} />} />
      <Route path="/cart" element={<Cart cartItem={cartItem} removeHandler={removeHandler} />} />
      <Route path='/ShowMore' element={<ShowMore ShowItem={ShowItem} AddToCart={AddToCart} />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </>);
}

export default App;
