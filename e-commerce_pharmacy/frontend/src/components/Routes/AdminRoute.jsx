import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/auth'
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Spinner from '../Spinner';

const AdminRoute = () => {
  const [auth] = useAuth();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    const authCheck = async () => {
      const response = await axios.get('http://localhost:8700/api/v1/auth/admin-auth')
      if(response.data.ok){
        setOk(true);
      }else{
        setOk(false)
      }
    }
    if(auth?.token) authCheck()
  }, [auth?.token])
  
  return ok? <Outlet /> : <Spinner path=""/>
}

export default AdminRoute;