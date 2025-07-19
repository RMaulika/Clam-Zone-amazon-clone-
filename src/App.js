import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { lazy, Suspense } from 'react';
import { promise } from './stripePromise';
import { Elements } from "@stripe/react-stripe-js";

const Payment = lazy(() => import('./Payment'));
function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        //the user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    })
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    // BEM
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/orders"
          element={
            <> 
            <Orders />
            </>
          }
          />
          <Route path="/login"
          element={
            <> 
            <Login />
            </>
          }
          />
          <Route path="/checkout"
          element={
            <> 
            <Checkout />
            </>
          }
          />
          <Route path="/payment"
          element={
            <Suspense fallback={<div>Loading...</div>} >
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Suspense>
          }
          />
          <Route path="/"
          element={
            <>
            <Home/>
            </>
          }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
