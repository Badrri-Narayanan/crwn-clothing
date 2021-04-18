import React, { useEffect } from 'react';
import './App.css'
import Homepage from './pages/homepage/Homepage.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux'

import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ currentUser, checkUserSession }) => {

  useEffect(()=> {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/signin" render={() => 
            currentUser ?
              <Redirect to="/" /> :
                <SignInAndSignUpPage/>
          } />
      </Switch>
      <Route exact path="/checkout" component={CheckoutPage} />
    </div>
  );

}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
