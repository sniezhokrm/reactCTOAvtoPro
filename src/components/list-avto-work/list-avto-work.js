import React, {Component} from 'react';
import './list-avto-work.scss';

export default class ListAvtoWork extends Component {
  constructor(props) {
    super(props);
    }
  render() {
    const {listVisibleWork} = this.props
    let classNames = 'list-internal';
    if (listVisibleWork) {
           classNames +=' visible';
        }
return (
  <div className={classNames}>
    <div className='list-line'></div>
    <li><a href="">Ремонт кузова</a></li>
    <li><a href="">Поліровка кузова</a></li>
    <li><a href="">Зварювальні роботи</a></li>
    <li><a href="">Локальна підкраска</a></li>
    <li><a href="">Заміна елементів кузова</a></li>
  </div>
)}
};
