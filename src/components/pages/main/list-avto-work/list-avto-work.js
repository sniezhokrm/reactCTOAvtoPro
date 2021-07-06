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
    <Link to="/"><li>Ремонт кузова</li></Link>
    <Link to="/"><li>Поліровка кузова</li></Link>
    <Link to="/"><li>Зварювальні роботи</li></Link>
    <Link to="/"><li>Локальна підкраска</li></Link>
    <Link to="/"><li>Заміна елементів кузова</li></Link>
  </div>
)}
};
