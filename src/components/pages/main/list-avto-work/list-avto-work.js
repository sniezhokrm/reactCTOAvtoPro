import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './list-avto-work.scss';

export default class ListAvtoWork extends Component {

  render() {
    const {listVisibleWork} = this.props
    let classNames = 'list-internal';
    if (listVisibleWork) {
           classNames +=' visible';
        }
return (
  <div className={classNames}>
    <div className='list-line'></div>
    <li><Link to="/">Ремонт кузова</Link></li>
    <li><Link to="/">Поліровка кузова</Link></li>
    <li><Link to="/">Зварювальні роботи</Link></li>
    <li><Link to="/">Локальна підкраска</Link></li>
    <li><Link to="/">Заміна елементів кузова</Link></li>
  </div>
)}
};
