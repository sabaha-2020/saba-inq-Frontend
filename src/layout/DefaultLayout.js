import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import Dashboard from 'src/views/dashboard/Dashboard'
import { useAuth } from 'src/Context/Auth'
import AdminDashboard from 'src/views/dashboard/AdminDashboard'
import VendorDashboard from 'src/views/dashboard/VendorDashboard'
import { Route, Routes } from 'react-router-dom'

const DefaultLayout = () => {

const [auth] = useAuth()


const renderDashboard = () => {
  switch (auth?.user?.userType) {

    case 'admin':
      return <AdminDashboard/>;
    case 'vendor':
      return <VendorDashboard/> ;
    case 'licensee':
      return <Dashboard/>;
    default:
      return <Navigate to="/login" />;;
  }
};



  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
        
      
       {renderDashboard()}
          
       
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout


/*

import React from 'react';
import { AppSidebar, AppFooter, AppHeader, AppContent } from '../components/index';

const DefaultLayout = ({ element: Element }) => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
        <AppContent/>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;

/*

import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import _nav from 'src/_nav'


const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent/>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
*/