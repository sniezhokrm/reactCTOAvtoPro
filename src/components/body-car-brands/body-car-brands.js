import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll'
import './body-car-brands.scss';

export default class BodyCarBrands extends Component {
  constructor(props) {
    super(props);
  this.state = {
      postsBrands: [
      {iconBrands: '/images/brands-audi.png', idBrands: '1',
        textServicesTitle: "Планове ТО"},
      {iconBrands: '/images/brands-subaru.png', idBrands: '2',
        textServicesTitle: "Ремонт двигуна"},
      {iconBrands: '/images/brands-chevrole.png', idBrands: '3',
        textServicesTitle: "Ремонт ходової"},
      {iconBrands: '/images/brands-fiat.png', idBrands: '4',
        textServicesTitle: "Заміна мастила та рідин"},
      {iconBrands: '/images/brands-ford.png', idBrands: '5',
        textServicesTitle: "Зварювальні роботи"},
      {iconBrands: '/images/brands-hyundai.png', idBrands: '6',
        textServicesTitle: "Локальна підкраска"},
        {iconBrands: '/images/brands-lada.png', idBrands: '7',
          textServicesTitle: "Планове ТО"},
        {iconBrands: '/images/brands-lexux.png', idBrands: '8',
          textServicesTitle: "Ремонт двигуна"},
        {iconBrands: '/images/brands-mazda.png', idBrands: '9',
          textServicesTitle: "Ремонт ходової"},
        {iconBrands: '/images/brands-mersedes.png', idBrands: '10',
          textServicesTitle: "Заміна мастила та рідин"},
        {iconBrands: '/images/brands-mitsubisi.png', idBrands: '11',
          textServicesTitle: "Зварювальні роботи"},
        {iconBrands: '/images/brands-nissan.png', idBrands: '12',
          textServicesTitle: "Локальна підкраска"},
          {iconBrands: '/images/brands-opel.png', idBrands: '13',
            textServicesTitle: "Ремонт ходової"},
          {iconBrands: '/images/brands-reno.png', idBrands: '14',
            textServicesTitle: "Заміна мастила та рідин"},
          {iconBrands: '/images/brands-skoda.png', idBrands: '15',
            textServicesTitle: "Зварювальні роботи"},
          {iconBrands: '/images/brands-vw.png', idBrands: '16',
            textServicesTitle: "Локальна підкраска"},
        {iconBrands: '/images/brands-suzuki.png', idBrands: '17',
          textServicesTitle: "Локальна підкраска"},
          {iconBrands: '/images/brands-volvo.png', idBrands: '18',
            textServicesTitle: "Локальна підкраска"},
    ],
    }
    }
  render() {
  const {postsBrands} = this.state;
  const elementsBrands = postsBrands.map((item) => {
    const {idBrands, ...itemProps} = item;
        if(typeof(item) === 'object'){
          return (
              <div className="brands__item">
                <ScrollAnimation animateIn='pulse'>
                <img src={postsBrands[+(idBrands)- 1].iconBrands} alt=""
                  class="brands__img"/>
              </ScrollAnimation>
              </div>
          )
        }
    });

return(
    <div className="brands">
      <div className="container">
        <h3>Ми обслуговуємо більшість популярних автомобілів</h3>
        <div className="brands__items">
          {elementsBrands}
        </div>
      </div>
    </div>
  )}
  };
