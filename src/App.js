import React,{useContext, useEffect, useState} from 'react'
import { BrowserRouter } from "react-router-dom";
import {observer} from 'mobx-react-lite';
import AppRouter from './components/AppRouter';
import Navbar from './components/navbar/Navbar';
import { Context } from '.';
import { check } from './http/userApi';


const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  useEffect(() =>{
      check().then(data => {
        user.setUser(true)
        user.setIsAuth(true)
      }).finally(()=> setLoading(false)) 
  },[] )

  if(loading){
    return <div style={{width:"300px",height:"300px",background: "black"}}></div>
  }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
