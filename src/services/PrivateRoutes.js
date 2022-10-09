import { React, useContext, useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';
import cookies from './cookies';

// TODO: change params to headers in request

const PrivateRoutes = () => {
  const [isAuth, setIsAuth] = useState(true);

  const checkAuth = async () => {
    try {
      const token = 'Bearer ' +  cookies.getCookie('token');
      const response = await axios.get('http://localhost:3001/auth/check', {
        params: {
          authorization: token,
        },
      });
    }
    catch(err) {
      console.log(err);
      setIsAuth(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    isAuth ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default PrivateRoutes