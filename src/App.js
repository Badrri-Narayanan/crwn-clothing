import React from 'react';
import './App.css'
import Homepage from './pages/homepage/Homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
