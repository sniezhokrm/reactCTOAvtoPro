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
    <li><a href="">Діагностика ходової</a></li>
    <li><a href="">Ремонт ходової</a></li>
    <li><a href="">Заміна масла</a></li>
    <li><a href="">Компютерна діагностика</a></li>
    <li><a href="">Ремонт двигуна та коробоки передач</a></li>
  </div>
)}
};
