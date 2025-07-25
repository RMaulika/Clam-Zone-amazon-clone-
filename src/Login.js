import React, { useState } from 'react';
import './Login.css';
import { Link , useNavigate} from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = e => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Logged in:", userCredential.user);
        navigate('/');
    })
    .catch(error => alert(error.message));
  }
  const register = e => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential) {
            navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  }
  return (
    <div className='login'>
        <Link to='/'>
        <img className="login__logo" src='/banner0.png' />
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>
                By signing-in you agree to the Clam-zone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button onClick={register} className='login__registerButton'>Create your Clam-Zone account</button>
        </div>
    </div>
  )
}

export default Login
