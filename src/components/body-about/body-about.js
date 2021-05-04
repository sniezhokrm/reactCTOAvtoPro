import React from 'react';
import './body-about.scss';

const BodyAbout = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__items">
          <div className="about__text">
            <h3>Вітаємо на СТО <span>"AVTOPRO"</span></h3>
            <div className="about__line"></div>
            <p>СТО "AVTORPO" була заснована в 2021 році. Вирішення проблем з автомобілями -
            це не тільки трудомісткий процес, но і часто розчаровуючий, ремонт обходиться
            дорого і занімає багато часу. Ми стараємось зробити весь процес ремонту максимально:
            "безболісним" для Вас. Клієнтам постійно повідомляється про будь-які змінни під час ремонту.
             Ви будете задоволенні якістю ремонту та обслуговування.</p>
          </div>
          <div className="about__picture">
            <img src="/images/about_avtomehanik.jpg" alt=""/>
            <div className="about__picture_bestchoose">СТО "AVTORPO" кращий вибір для Вашого автомобіля</div>
          </div>
        </div>
      </div>
    </div>
)};
export default BodyAbout;
