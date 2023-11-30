
import { useState ,useEffect } from "react";
import { useAuth } from "src/Context/Auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "src/layout/Spinner/Spinner";

export default function  VendorRoute({ element, ...rest }){
    const [ok,setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(()=>{
        const authCheck = async() =>{
          const res = await axios.get('http://localhost:3000/users/vendor-auth')

          if(res.data.ok){
            setOk(true)
          }else{
            setOk(false)
          }
        }
        if(auth?.token) authCheck()
    }, [auth?.token])
    return  ok ?   element: <Spinner/>;
    

} 
