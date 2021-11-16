import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Landing from './Landing.js';
import classes from './Landing.module.css';
import {Navigate, useRoutes} from 'react-router-dom';


const AppMid = () => {
    let routes = useRoutes([
      { path: "/", element: <Landing /> },
      { path: "/termsandagreement", element: "" },
      {path: "/register", element: <Landing />}
    ]);
    return routes;
  };
const App = () => {
    return( 
    <div className={classes.prim}> 
        <Navbar /> 
            <AppMid />
        <Footer />
    </div>
    );
};

export default App;
