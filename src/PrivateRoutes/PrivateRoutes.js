import { useState ,useEffect } from "react";
import { useAuth } from "src/Context/Auth";
import { Outlet } from "react-router-dom";

import Spinner from "src/layout/Spinner/Spinner";
import axios from "axios";

export default function  PrivateRoute({ element, ...rest }){
    const [ok,setOk] = useState(false);
    const [auth,setAuth] = useAuth();

    useEffect(()=>{
        const authCheck = async() =>{
          try{
          const res = await axios.get('http://localhost:3000/users/licensee-auth')

          if(res.data.ok){
            setOk(true)
            console.log('Response OK:', res.data);
          }else{
            setOk(false)
            console.log('Response NOT OK:', res.data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setOk(false);
        }
      };

        if(auth?.token) authCheck()
    }, [auth?.token])
    
   
      return  ok ?  element : <Spinner/>;
    

}

/*
import { useState ,useEffect } from "react";
import { useAuth } from "src/Context/Auth";
import { Outlet } from "react-router-dom";

import Spinner from "src/layout/Spinner/Spinner";
import axios from "axios";

export default function  PrivateRoute({ element, ...rest }){
    const [ok,setOk] = useState(false);
    const [auth,setAuth] = useAuth();

    useEffect(()=>{
      authlicenseeCheck() 
      authAdminCheck()
      authVendorCheck()

        if(auth?.token) authCheck()
    }, [auth?.token])
    
   
    const authlicenseeCheck = async() =>{
      try{
      const res = await axios.get('http://localhost:3000/users/licensee-auth')

      if(res.data.ok){
        setOk(true)
        console.log('Response OK:', res.data);
      }else{
        setOk(false)
        console.log('Response NOT OK:', res.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setOk(false);
    }
  };

  const authAdminCheck = async() =>{
    try{
    const res = await axios.get('http://localhost:3000/users/admin-auth')

    if(res.data.ok){
      setOk(true)
      console.log('Response OK:', res.data);
    }else{
      setOk(false)
      console.log('Response NOT OK:', res.data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    setOk(false);
  }
};

const authVendorCheck = async() =>{
  try{
  const res = await axios.get('http://localhost:3000/users/vendor-auth')

  if(res.data.ok){
    setOk(true)
    console.log('Response OK:', res.data);
  }else{
    setOk(false)
    console.log('Response NOT OK:', res.data);
  }
} catch (error) {
  console.error('Error fetching data:', error);
  setOk(false);
}
};


      return  ok ?  element : <Spinner/>;
    

}
*/