import React, {Component} from 'react';
import IconPhone from '../image/icons1.png';
import IconAgreement from '../image/icons2.png';
import IconTools from '../image/icons3.png';
import './body-info.scss';

export default class BodyInfo extends Component {
  constructor(props) {
    super(props);
    }
  render() {
    const {onToggleInfo, activeInfo} = this.props
    let classNames = 'info__details';
    if (activeInfo) {
           classNames +=' visible_details';
        }
return(
    <div class="info">
      <div class="container">
        <div class="info__block">
          <div onMouseEnter={() => onToggleInfo(true)}
        onMouseLeave={() => onToggleInfo(false)} class="info__items">
            <img src={IconPhone} alt="" class="info__img"/>
            <div class="info__desc">
              <h4>Подзвоніть</h4>
                <p>Досвідченні механіки завжди дадуть відповідь на Ваше запитання. Даєм
                детальний опис об'єму вартості робіт Вашого автомобіля.</p>
            </div>
            <div class={classNames}>Детальніше</div>
          </div>
          <div onMouseEnter={() => onToggleInfo(true)}
        onMouseLeave={() => onToggleInfo(false)} class="info__items">
            <img src={IconAgreement} alt="" class="info__img"/>
            <div class="info__desc">
            <h4>Запишіться на обслуговування</h4>
              <p>Домовляйтесь про зустріч.
                Дзвоніть і домовимось про зустріч у зручний для Вас час</p>
            </div>
            <div class={classNames}>Детальніше</div>
          </div>
          <div onMouseEnter={() => onToggleInfo(true)}
        onMouseLeave={() => onToggleInfo(false)} class="info__items">
            <img src={IconTools} alt="" class="info__img"/>
            <div class="info__desc">
            <h4>Відремонуйте автомобіль</h4>
              <p>Наша команда досвідчених працівників завжди готова відремонтувати
               Ваш автомобіль.Наш основний профіль - діагностика та ремонт автомобілів.</p>
            </div>
            <div class={classNames}>Детальніше</div>
          </div>
        </div>
      </div>
    </div>
  )}
  };
