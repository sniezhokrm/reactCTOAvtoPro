import React, {Component} from 'react';
import './variables.scss';
import './app.scss';
import HeaderMenu from '../header-menu/header-menu';
import BodyCarusel from '../pages/main/body-carusel/body-carusel';
import BodyAbout from '../pages/main/body-about/body-about';
import BodyInfo from '../pages/main/body-info/body-info';
import BodyServices from '../pages/main/body-services/body-services';
import BodyCarBrands from '../pages/main/body-car-brands/body-car-brands';
import Different from '../pages/different/different';
import Footer from '../footer/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutUs from '../pages/about-us/about-us';
import Reviews from '../pages/reviews/reviews';

export default class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
          activeInfo: false
        }
    }
  render() {
    return (
    <>
    <Router>
     <HeaderMenu/>
     <Switch>
       <Route path="/" exact>
        <BodyCarusel/>
        <BodyAbout/>
        <BodyInfo onToggleInfo={this.onToggleInfo} activeInfo={this.state.activeInfo}/>
        <BodyServices/>
        <BodyCarBrands/>
       </Route>
       <Route path="/about">
        <AboutUs/>
       </Route>
       <Route path="/reviews">
         <Reviews/>
       </Route>
       <Route path="/different">
         <Different/>
       </Route>
      </Switch>
     <Footer/>
    </Router>
    </>
  )}
  };
