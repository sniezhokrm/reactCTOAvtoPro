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
        this.onToggleMenuActive = this.onToggleMenuActive.bind(this);
        this.onToggleLeaveMenu = this.onToggleLeaveMenu.bind(this);
        this.state = {
          listVisibleService: false,
          listVisibleWork: false,
          menuHamburgerActive: false
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
  onToggleMenuActive() {
    this.setState(({menuActive}) => {
    return {
      menuActive: !menuActive
    }
    })
    }
  onToggleLeaveMenu() {
    console.log('www');
    this.setState(({menuActive}) => {
    return {
      menuActive: false
      }
    })
  }
  render() {
    const classMenuActive = this.state.menuActive ? "header__menu_active" : "header__menu";
    console.log(this.state.menuActive);
  return (
      <div className="header">
        <div className='container'>
          <div className='header__body'>
          <Link to="/"><img src="/images/avtopro_logo_head.png" alt=""/></Link>
          <div className='header__hamburger' onClick = {this.onToggleMenuActive}>
              <div className='header__line'></div>
              <div className='header__line'></div>
              <div className='header__line'></div>
         </div>
         <nav  className={classMenuActive} onMouseLeave={this.onToggleLeaveMenu}>
          <ul className="header__list"  >
            <Link to="/about"><li>Про нас</li></Link>
            <Link to="#"><li onMouseLeave={this.onToggleLeave} onClick={this.onToggleListService}>
              Автосервіс
              <ListAvtoService listVisibleService={this.state.listVisibleService}/>
            </li></Link>
            <Link to="#"><li onClick={this.onToggleListWork} onMouseLeave={this.onToggleLeave} >
              Кузовні роботи
              <ListAvtoWork listVisibleWork={this.state.listVisibleWork}/>
            </li></Link>
            <Link to="/prices"><li>Ціни</li></Link>
            <Link to="/different"><li>Інше</li></Link>
            <Link to="/reviews"><li>Відгуки</li></Link>
          </ul>
        </nav>
        </div>
      </div>
    </div>
  )}
};
