import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './footer.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    }
  render() {

return(
    <div className="footer">
      <div className="container">
        <div className="footer__items">
          <div className="footer__item">
            <ScrollAnimation animateIn='bounce'>
              <img src="/images/avtopro_logo.png" alt=""/>
            </ScrollAnimation>
              <a href="tel: +380988360066"><div className="footer__btn">Консультація</div></a>
          </div>
          <div className="footer__item">
            <h5>Автосервіс</h5>
            <ul>
              <li>Діагностика ходової</li>
              <li>Заміна масла</li>
              <li>Компютерна діагностика</li>
              <li>Ремонт електрообладнання</li>
            </ul>
          </div>
          <div className="footer__item">
            <h5>Кузовні роботи</h5>
            <ul>
              <li>Ремонт бамперів</li>
              <li>Зварювальні роботи</li>
              <li>Заміна елементів кузова</li>
              <li>Локальна підкраска авто</li>
            </ul>
          </div>
          <div className="footer__item">
            <h5>Контакти</h5>
            <ul>
              <li><a href='tel:+380988360066'>+380988360066</a></li>
              <li><a href="mailto:sniezhokrm@gmail.com">sniezhokrm@gmail.com></a></li>
              <li>Україна, смт.В.Березовиця,<br/>вул.Микулинецька 41 </li>
              <li>Понеділок-Субота: 09:00-18:00</li>
              <li>Неділя:Вихідний</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )}
  };
