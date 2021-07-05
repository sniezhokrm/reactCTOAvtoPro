import React, {Component} from 'react';
import './list-avto-service.scss';
import {Link} from "react-router-dom";

export default class ListAvtoService extends Component {

  render() {
    const {listVisibleService} = this.props
    let classNames = 'list-internal';
    if (listVisibleService) {
           classNames +=' visible';
        }
return (
  <div className={classNames}>
    <div className='list-line'></div>
    <li><Link to="/">Діагностика ходової</Link></li>
    <li><Link to="/">Ремонт ходової</Link></li>
    <li><Link to="/">Заміна масла</Link></li>
    <li><Link to="/">Компютерна діагностика</Link></li>
    <li><Link to="/">Ремонт двигуна та коробоки передач</Link></li>
  </div>
)}
};
