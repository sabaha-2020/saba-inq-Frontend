import React from 'react'
import { NavLink, Link } from "react-router-dom";
import 'src/index.css';
import { useAuth } from "src/Context/Auth";
import toast from "react-hot-toast";
import { CNavItem } from '@coreui/react';
import { cilAccountLogout } from '@coreui/icons';
import { useNavigate } from 'react-router-dom';

const Logout = () => {

    const [auth , setAuth] = useAuth()
    const navigate = useNavigate();

    const handleLogout = ()=>{
      setAuth({
        ...auth,user:null,token :""
      });
      localStorage.removeItem('auth');
      toast.success("Logout Successfully")

      navigate('/');
    }

  return (
  <>
  <CNavItem>
      <button onClick={handleLogout} className="nav-link logout">
        Logout
        <cilAccountLogout />
      </button>
    </CNavItem>
  </>
  )
}

export default Logout


/*
import React from 'react';
import { CNavItem } from '@coreui/react';
import { cilAccountLogout } from '@coreui/icons';
import toast from 'react-hot-toast';
import { useAuth } from 'src/Context/Auth';
import { useNavigate } from 'react-router-dom';

export const handleLogout = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  setAuth({
    ...auth,
    user: null,
    token: ''
  });
  localStorage.removeItem('auth');
  toast.success('Logout Successfully');
  navigate('/');
};

const Logout = () => {
  return (
    <>
      <CNavItem>
        <button onClick={handleLogout} className="nav-link logout">
          Logout
          <cilAccountLogout />
        </button>
      </CNavItem>
    </>
  );
};

export default Logout;

/*
// Logout.js
import React from 'react';
import { CNavItem } from '@coreui/react';
import { useAuth } from 'src/Context/Auth';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from 'src/authUtils';

const Logout = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <CNavItem>
        <button
          onClick={() => handleLogout(setAuth, navigate)}
          className="nav-link logout"
        >
          Logout
          <cilAccountLogout />
        </button>
      </CNavItem>
    </>
  );
};

export default Logout;
*/