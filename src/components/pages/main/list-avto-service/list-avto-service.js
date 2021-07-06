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
    <Link to="/"><li>Діагностика ходової</li></Link>
    <Link to="/"><li>Ремонт ходової</li></Link>
    <Link to="/"><li>Заміна масла</li></Link>
    <Link to="/"><li>Компютерна діагностика</li></Link>
    <Link to="/"><li>Ремонт двигуна та коробоки передач</li></Link>
  </div>
)}
};
