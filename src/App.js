import React, { Component, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import HomePage from './layout/HomePage'
import { AuthProvider } from './Context/Auth'
import PrivateRoute from './PrivateRoutes/PrivateRoutes'
import Dashboard from './views/dashboard/Dashboard'
import AdminRoute from './PrivateRoutes/AdminRoutes'
import VendorRoute from './PrivateRoutes/VendorRoutes'
import AdminDashboard from './views/dashboard/AdminDashboard'
import VendorDashboard from './views/dashboard/VendorDashboard'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
{/*const Login = React.lazy(() => import('./views/pages/login/Login')) */}
const Login = React.lazy(() => import('./layout/login/Login')) 
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))


class App extends Component {
  render() {
    return (
      <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
          <Route exact path="/" name="Homepage" element={<HomePage/>} />
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />

      
            <Route path="/licenseedashboard" element={<PrivateRoute element={<DefaultLayout/>} />} />
           
           <Route path="/admindashboard" element={<AdminRoute element={<DefaultLayout/>} />}  />
    <Route path="/vendordashboard" element={<VendorRoute element={<DefaultLayout/>} />} />
  
 {/*} <Route path="/" element={<Navigate to="dashboard" replace />} />

{getDashboardRoute()}
  */}


          </Routes>
        </Suspense>
      </BrowserRouter>
      </AuthProvider>
    )
  }
}
{/*}
const getDashboardRoute = () => {
  const userType = getUserType(); // Implement this function to get the user type

  switch (userType) {
    case 'admin':
      return <Route path="/dashboard" element={<AdminRoute element={<DefaultLayout />} />} />;
    case 'vendor':
      return <Route path="/dashboard" element={<VendorRoute element={<DefaultLayout />} />} />;
    case 'licensee':
      return <Route path="/dashboard" element={<PrivateRoute element={<DefaultLayout />} />} />;
    default:
      // Handle default case, you can redirect to a login page or show an error
      return <Navigate to="/login" />;
  }*
};*/}

export default App
