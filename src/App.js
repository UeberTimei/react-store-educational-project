import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { fetchBasketItems } from './http/itemAPI';
import { check } from './http/userAPI';
import logo from './images/logo.png'
import './index.css';

const App = observer(() => {
  const {user, basket} = useContext(Context)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then((data) => {
      user.setUser(data)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    basket.setDeleteAllBasketItems();
    fetchBasketItems().then(data => {
      for (let key in data) {
        basket.setBasketItems(data[key], true);
      }
    })
  }, [basket]);

  if(loading){
    return <div className='flex justify-center mt-72'><img src={logo} alt="Savinatti" className='animate-pulse'/></div>
  }

  return (
    <BrowserRouter>
      <NavBar/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
});

export default App;