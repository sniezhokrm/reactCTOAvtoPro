import React, {Component} from 'react';
import './variables.scss';
import './app.scss';
import HeaderMenu from '../header-menu/header-menu';
import BodyCarusel from '../body-carusel/body-carusel';
import BodyAbout from '../body-about/body-about';
import BodyInfo from '../body-info/body-info';
import BodyServices from '../body-services/body-services';
import BodyCarBrands from '../body-car-brands/body-car-brands';
import Footer from '../footer/footer';

export default class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
          activeInfo: false
        }
    }
  render() {
    return (
    <div>
        <HeaderMenu/>
        <BodyCarusel/>
        <BodyAbout/>
        <BodyInfo onToggleInfo={this.onToggleInfo} activeInfo={this.state.activeInfo}/>
        <BodyServices/>
        <BodyCarBrands/>
        <Footer/>
    </div>
  )}
  };
