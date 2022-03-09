import React from 'react';

import './App.css';
import Home from './Pages/HomePage/Home';
import SignUp from './Pages/HomePage/SignUp';
import LoginPage from './Pages/HomePage/LoginPage';
import Menu from './Pages/MainPage/Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import MenuforClient from './components/pages/MenuforClient';
// import ContactUs from './components/pages/ContactUs';
function App() {
  return (
    <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route path='/' exact component={Home} />
          {/* <Route path='/contact-us' component={ContactUs} /> */}
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LoginPage} />
          <Route path='/menu/:id' component={Menu} />
          {/* <Route path='/clientmenu' component={MenuforClient} /> */}
        </Switch>
    </Router>
  );
}

export default App;
