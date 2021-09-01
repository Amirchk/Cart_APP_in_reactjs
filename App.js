import React,{useState} from 'react';
import {NavLink, Route,Switch} from 'react-router-dom';
import './App.css';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm';
import Navbar from './Navbar';
import Add_product from './Add-product';

const stripePromise = loadStripe('pk_test_51JOnQcAPlNibyZPxHpTnf3oirkVoQu5xy76DjyQ9KuJE8jHyOEBHd2wOcXgwmrGfPwrf0N8rL3gyx7SVLkWo8WTM00mwN3Pwb7');

const appear=()=>{
  const show = document.getElementById("show");
  show.style.display = 'block';
}

function App() {
 
  return (
    <>
    <Navbar/>
    <button id="Add-product-btn" onClick={appear}>+</button>
    <Switch>
      <Route exact path="/Payment">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Route>
      <Route path="/Cart">
        Cart 
      </Route>
      <Route path="/">
        <Add_product/>
        <br/>
      </Route>
    </Switch>
    </>
    
  );
}

export default App;
