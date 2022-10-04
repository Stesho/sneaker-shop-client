import { React, useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import axios from 'axios';

// TODO: change params to headers in request

const PrivateRoutes = () => {
  const [isAuth, setIsAuth] = useState(true);

  const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  const checkAuth = async () => {
    try {
      const token = 'Bearer ' +  getCookie('token');
      const response = await axios.get('http://localhost:3001/auth/check', {
        params: {
          authorization: token,
        },
      });
    }
    catch(err) {
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