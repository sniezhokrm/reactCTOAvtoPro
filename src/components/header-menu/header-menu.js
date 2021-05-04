import React, {Component} from 'react';
import './header-menu.scss';
import ListAvtoService from '../list-avto-service/list-avto-service';
import ListAvtoWork from '../list-avto-work/list-avto-work';

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
    <img  className='logo-img' src="/images/avtopro_logo.png" alt=""/>
        <li><a href="#">Про нас  </a>
        </li>
        <li onMouseLeave={this.onToggleLeave} onClick={this.onToggleListService}><a href="">Автосервіс </a>
      <ListAvtoService listVisibleService={this.state.listVisibleService}/></li>
        <li onClick={this.onToggleListWork} onMouseLeave={this.onToggleLeave} ><a href="">Кузовні роботи</a>
        <ListAvtoWork listVisibleWork={this.state.listVisibleWork}/></li>
        <li><a href="">Ціни</a></li>
        <li><a href="">Інше</a></li>
        <li><a href="">Відгуки</a></li>
  </ul>
</div>
</div>
</div>
)}
};
