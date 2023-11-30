import React, {useState} from "react";
import axios from "axios";
import toast from 'react-hot-toast';
import {useNavigate,useLocation} from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import CIcon from '@coreui/icons-react'
import { cilLockLocked } from '@coreui/icons'
import { useAuth} from "src/Context/Auth";
import Wrap from "src/layout/Wrap";


const Login = () => {

  const [auth , setAuth] = useAuth()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("") 

  const navigate = useNavigate()

const location = useLocation()



  //form function
const handleSubmit = async (e)=>{
  e.preventDefault()
   try {
      const res = await axios.post('http://localhost:3000/users/login',
      {email,password } );
  
  if(res && res.data.success){
      toast.success(res.data && res.data.message);
      setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token
      });
  
      localStorage.setItem('auth',JSON.stringify(res.data));
   
     const userType = res.data.user.userType.toLowerCase();
     const dashboardPaths = {
       licensee: '/licenseedashboard',
       admin: '/admindashboard',
       vendor: '/vendordashboard'
     };
    navigate(dashboardPaths[userType] || '/'); 

   {/*} navigate("/dashboard") */}
  
  }else{
      toast.error(res.data.message)
  }
      } catch (error) {
      console.log(error);
      toast.error("Something went wrong")
   }
  
  };


  return (
    <Wrap title='Login-InqPortal'>
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm  onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                   

                    <CInputGroup  className="mb-4">
                   <CInputGroupText>
                   <FontAwesomeIcon icon={faEnvelope} />
                  </CInputGroupText>
                  <CFormInput value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email address" />
                   </CInputGroup>

                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                       onChange={(e)=>setPassword(e.target.value)}
                       value={password}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>

                  
                    <CRow>
                      <CCol xs={6}>
                        <CButton  type='submit' color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton  type='submit' color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
           
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </Wrap>
  )
}

export default Login
