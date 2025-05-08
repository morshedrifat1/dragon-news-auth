import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../authprovider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
  const {loginUser} = use(AuthContext);
  const [error,setError] = useState('');
  const location = useLocation();
  const nevigate = useNavigate()
  const handleLogin = (e)=>{
    e.preventDefault();
    const email= e.target.email.value;
    const password = e.target.password.value;
    
    // logout user
    loginUser(email,password)
    .then(()=>{
      toast.success("login successful",{hideProgressBar: true});
      nevigate(`${location.state?location.state:'/'}`)

    }).catch((error)=>{
      setError(error.message)
    })
  }
    return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='text-2xl font-semibold text-center text-accent-content py-4'>Login your account</h1>
        <hr className='border-t border-base-300' />
        <form onSubmit={handleLogin} className="fieldset pt-4">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          {
            error&&<p className='text-red-700 text-base mt-1'>{error}</p>
          }
          <p className='text-base text-accent-content font-medium mt-5 text-center'>Dont’t Have An Account ? <Link to={'/auth/register'} className='text-secondary'>Register</Link></p>
        </form>
      </div>
    </div>
    );
};

export default Login;