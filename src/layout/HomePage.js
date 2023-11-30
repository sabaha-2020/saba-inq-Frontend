import React  from 'react'
import Layout from 'src/layout/Layout'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';
import { useAuth } from 'src/Context/Auth';

const HomePage = () => {

  const [auth,setAuth] = useAuth()
  return (
    <>
      <Layout title="InqPortal">
     
      </Layout>
    </>
  )
}

export default HomePage
