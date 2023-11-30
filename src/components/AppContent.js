import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { useAuth } from 'src/Context/Auth'
// routes config
import routes from '../routes'
import AdminDashboard from 'src/views/dashboard/AdminDashboard'
import VendorDashboard from 'src/views/dashboard/VendorDashboard'
import Dashboard from 'src/views/dashboard/Dashboard'

const AppContent = () => {

    const [auth] =useAuth()
  
    const renderContent = () => {
      
      const UserType = auth?.user?.userType;
      if (UserType === 'admin') {
        return <AdminDashboard />;
      } else if (UserType === 'vendor') {
        return <VendorDashboard />;
      } else if (UserType === 'licensee') {
        return <Dashboard />;
      } else {
        return <Dashboard />;
      }
    };

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/"  element={<Navigate to={renderContent()}  replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)

/*
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { CContainer, CSpinner } from '@coreui/react';
import { useAuth } from 'src/Context/Auth';
import routes from '../routes';
import AdminDashboard from 'src/views/dashboard/AdminDashboard';
import VendorDashboard from 'src/views/dashboard/VendorDashboard';
import Dashboard from 'src/views/dashboard/Dashboard';
import DefaultLayout from 'src/layout/DefaultLayout';

const AppContent = () => {
  const [auth] = useAuth();

  const getDashboardComponent = () => {
    switch (auth?.user?.userType) {
      case 'admin':
        return <AdminDashboard />;
      case 'vendor':
        return <VendorDashboard/>;
      case 'licensee':
        return <Dashboard/>;
      default:
        return null; 
    }
  };

  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              name={route.name}
              element={<route.element />}
            />
          ))}  
           <Route
          path="/licenseedashboard"
          element={
            <DefaultLayout
              contentComponent={getDashboardComponent()}
            />
          }
        />
        </Routes>
      </Suspense>
    </CContainer>
  );
};

export default React.memo(AppContent);

/*

import React, { Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'

// routes config
import routes from '../routes'
import { DefaultLayout } from 'src/layout/DefaultLayout';

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
*/