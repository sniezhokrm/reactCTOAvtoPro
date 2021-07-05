import React, {Component} from 'react';
import './header-menu.scss';
import ListAvtoService from '../pages/main/list-avto-service/list-avto-service';
import ListAvtoWork from '../pages/main/list-avto-work/list-avto-work';
import {Link} from "react-router-dom";

export default class HeaderMenu extends Component {
  constructor(props) {
    super(props);
        this.onToggleListService = this.onToggleListService.bind(this);
        this.onToggleListWork = this.onToggleListWork.bind(this);
        this.onToggleLeave = this.onToggleLeave.bind(this);
        this.state = {
          listVisibleService: false,
          listVisibleWork: false
        }
    }
onToggleListService(e) {
  e.preventDefault();
  this.setState(({listVisibleService}) => {
  return {
    listVisibleService: !listVisibleService,
    listVisibleWork: false
  }
  })
  }
  onToggleListWork(e) {
    e.preventDefault();
    this.setState(({listVisibleWork}) => {
    return {
      listVisibleWork: !listVisibleWork,
      listVisibleService: false
    }
    })
    }
  onToggleLeave() {
      this.setState(({listVisibleWork,listVisibleService}) => {
      return {
        listVisibleWork: false,
        listVisibleService: false
      }
      })
      }
  render() {

  return (
    <div className="menu">
      <div className="app-menu">
        <div className='container'>
          <ul className="app-list">
            <Link to="/"><img  className='logo-img' src="/images/avtopro_logo_head.png" alt=""/></Link>
            <li><Link to="/about">Про нас</Link></li>
            <li onMouseLeave={this.onToggleLeave} onClick={this.onToggleListService}>
              <Link to="#">Автосервіс </Link>
              <ListAvtoService listVisibleService={this.state.listVisibleService}/>
            </li>
            <li onClick={this.onToggleListWork} onMouseLeave={this.onToggleLeave} >
              <Link to="#">Кузовні роботи</Link>
          <ListAvtoWork listVisibleWork={this.state.listVisibleWork}/></li>
            <li><Link to="#">Ціни</Link></li>
            <li><Link to="#">Інше</Link></li>
            <li><Link to="#">Відгуки</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )}
};
