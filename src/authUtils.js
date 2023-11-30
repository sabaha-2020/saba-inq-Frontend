// authUtils.js
import toast from 'react-hot-toast';

export const handleLogout = (setAuth, navigate) => {
  setAuth({
    user: null,
    token: '',
  });
  localStorage.removeItem('auth');
  toast.success('Logout Successfully');
  navigate('/');
};
