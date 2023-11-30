import React from "react";
import { NavLink, Link } from "react-router-dom";
import 'src/layout/Header/Header.css';
import 'src/index.css';
import { useAuth } from "src/Context/Auth";
import toast from "react-hot-toast";


const Header = () => {
  const [auth , setAuth] = useAuth()


  {/*}
  const handleLogout = ()=>{
    setAuth({
      ...auth,user:null,token :""
    });
    localStorage.removeItem('auth');
    toast.success("Logout Successfully")
  }
*/}
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand logo">
            <span className="logo1 text-warning">INQ</span><span className="logo2 text-dark" >PORTAL</span>
           
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link ">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactUs" className="nav-link">
                  Contact Us
                </NavLink>
              </li>
          {/*}   {
              !auth.user ? (<>
              
              <li className="nav-item btn button-login btn-outline-light py-md-1 px-md-3 animated slideInRight">
                <NavLink to="/login" className="nav-link login">
                  Login
                </NavLink>
              </li>
              </>) :(<>
                <li className="nav-item btn button-login btn-outline-light py-md-1 px-md-3 animated slideInRight">
                <NavLink onClick={handleLogout} to="/login" className="nav-link logout">
                  Logout
                </NavLink>
              </li>
              </>)
             } */}

                 <li className="nav-item btn button-login btn-outline-light py-md-1 px-md-3 animated slideInRight">
                <NavLink to="/login" className="nav-link login">
                  Login
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
