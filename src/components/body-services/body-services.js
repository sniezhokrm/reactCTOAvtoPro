import React, {Component} from 'react';
import './body-services.scss';

export default class BodyServices extends Component {
  constructor(props) {
    super(props);
  this.state = {
      postsServices : [
      {iconServices: '/images/services-to.png', idServices: '1',
        textServicesTitle: "Планове ТО", textServices: "Проводимо планове ТО автомобіля, діагностику та заміну розхідних матеріалів"},
      {iconServices: '/images/services-engine.png', idServices: '2',
        textServicesTitle: "Ремонт двигуна", textServices: "Ремонтуємо двигуни з будь якою складністю поломки"},
      {iconServices: '/images/services-body-car.png', idServices: '3',
        textServicesTitle: "Ремонт ходової", textServices: "На сучасному обладнанні проводимо діагностику та ремонт ходової автомобіля"},
      {iconServices: '/images/services-oil.png', idServices: '4',
        textServicesTitle: "Заміна мастила та рідин", textServices: "Проводимо заміну мастила, тормозною рідини, охолоджуючою рідини"},
      {iconServices: '/images/services-welding.png', idServices: '5',
        textServicesTitle: "Зварювальні роботи", textServices: "Досвідченні зварювальники виконають зварювальні роботи будь-якої складності"},
      {iconServices: '/images/services-paint.png', idServices: '6',
        textServicesTitle: "Локальна підкраска", textServices: "Покраска кузова и дисків. Локальна покраска, покраска деталей, підкраска автомобіля"},
    ],
    }
    }

  render() {
  const {postsServices} = this.state;
  const elementsServices = postsServices.map((item) => {
    const {idServices, ...itemProps} = item;
        if(typeof(item) === 'object'){
          return (
              <div className="servises__item">
                <img src={postsServices[+(idServices)- 1].iconServices} alt="" class="servises__img"/>
                <h5>{postsServices[+(idServices)- 1].textServicesTitle}</h5>
                <p>{postsServices[+(idServices)- 1].textServices}</p>
              </div>
          )
        }
    });

return(
    <div className="servises">
      <div className="container">
        <h3>Наші послуги</h3>
        <div className="servises__items">
          {elementsServices}
        </div>
      </div>
    </div>
  )}
  };
