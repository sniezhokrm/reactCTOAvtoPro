import React from 'react';
import './about-us.scss';

const AboutUs = () => {
  return (
    <>
    <div className="aboutus">
      <div className='container'>
        <div className='aboutus__block'>
          <img  className="aboutus__img" src='/images/about-us.jpeg' alt=''/>
          <div className="aboutus__text">
            <h2>Про CTO AVTO Pro</h2>
            <div className="aboutus__desc">
              СТО "AVTORPO" була заснована в 2021 році. Вирішення проблем з автомобілями
              - це не тільки трудомісткий процес, но і часто розчаровуючий, ремонт
              обходиться дорого і занімає багато часу. Ми стараємось зробити весь
              процес ремонту максимально: "безболісним" для Вас. Клієнтам постійно
              повідомляється про будь-які змінни під час ремонту. Ви будете задоволенні
              якістю ремонту та обслуговування.
            </div>
          </div>
          <img className="aboutus__img" src='/images/about-us2.jpeg' alt=''/>
        </div>
      </div>
    </div>
    </>
  )
}
export default AboutUs;
