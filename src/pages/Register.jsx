import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../authprovider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const {createUser,updateUser} = use(AuthContext);
  const [error,setError] = useState('');
  const navigate = useNavigate();
  const handleRegister =(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const imgUrl = e.target.imgUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // error and success reset
    setError('');
    // create user
    createUser(email,password)
    .then(()=>{
      // update user profile
      updateUser(name,imgUrl)
      .then(()=>{
        // Profile updated!
      }).catch((error)=>{
        toast.success(error.message,{hideProgressBar: true})
      })
      navigate('/')
      toast.success("Registration successful",{hideProgressBar: true})
      e.target.reset();
    }).catch((error)=>{
      setError(error.message)
    })
  }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='text-2xl font-semibold text-center text-accent-content py-4'>Register account</h1>
        <hr className='border-t border-base-300' />
        <form onSubmit={handleRegister} className="fieldset pt-4">
          <label className="label">Your Name</label>
          <input required type="text" name='name' className="input" placeholder="Enter Your Name" />
          <label className="label">Photo URL</label>
          <input required type="text" name='imgUrl' className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input required type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input required type="password" name='password' className="input" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Register</button>
          {
            error&&<p className='text-red-700 text-base mt-1'>{error}</p>
          }
          <p className='text-base text-accent-content font-medium mt-5 text-center'>Alrady have an account <Link to={'/auth/login'} className='text-secondary'>Login</Link></p>
        </form>
      </div>
    </div>
    );
};

export default Register;