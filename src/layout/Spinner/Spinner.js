import React,{useState , useEffect} from 'react';
import { useLocation, useNavigate} from 'react-router-dom';


const Spinner = () => {

    const [count, setCount] = useState(3);
    const navigate = useNavigate();
   const location = useLocation()

     useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((PrevValue) => -- PrevValue)
        } , 1000)
        count === 0  && navigate('/login',{
          state:location.pathname
      })
      return ()=> clearInterval(interval)
   } ,[count,navigate ,location])
  return (
    <>
      <div class="d-flex flex-column justify-content-center align-items-center" style={{height:"95vh"}}>
        <h1 className='text-center'>redirecting you in {count} seconds</h1>
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

    </>
  )
}

export default Spinner
