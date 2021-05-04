import React, {Component} from 'react';
import './app.scss';
import HeaderMenu from '../header-menu/header-menu';
import BodyCarusel from '../body-carusel/body-carusel';
import BodyAbout from '../body-about/body-about';
import BodyInfo from '../body-info/body-info';
import BodyServices from '../body-services/body-services'

export default class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
          activeInfo: false
        }
        this.onToggleInfo = this.onToggleInfo.bind(this);
    }
  onToggleInfo(active) {
    this.setState(({activeInfo}) => {
    return {
      activeInfo: active
    }
    })
    }
  render() {
    return (
    <div>
        <HeaderMenu/>
        <BodyCarusel/>
        <BodyAbout/>
        <BodyInfo onToggleInfo={this.onToggleInfo} activeInfo={this.state.activeInfo}/>
        <BodyServices/>
    </div>
  )}
  };
