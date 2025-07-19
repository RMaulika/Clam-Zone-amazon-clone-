import React, { useEffect, lazy, Suspense } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { promise } from './stripePromise';
import { Elements } from "@stripe/react-stripe-js";
// No longer import Adbanner here, it will be moved into Home.js

const Payment = lazy(() => import('./Payment'));

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    // This will only run once when the app component loads
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
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
    });

    return () => {
      // Clean up the subscription when the component unmounts
      unsubscribe();
    };
  }, [dispatch]); // Added dispatch to dependency array as recommended by ESLint

  return (
    // BEM
    <Router>
      <div className="app">
        <Header /> {/* Header remains on all pages */}
        
        <Routes>
          <Route
            path="/orders"
            element={<Orders />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/payment"
            element={
              <Suspense fallback={<div>Loading...</div>} >
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </Suspense>
            }
          />

          {/* Home page route: This is where Adbanner should be */}
          <Route
            path="/"
            element={
              // The Home component already imports and includes Adbanner.
              // So, just render Home here.
              <Home />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;