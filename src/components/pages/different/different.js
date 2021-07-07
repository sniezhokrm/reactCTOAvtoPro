import React from 'react';
import './different.scss';

const Different = () => {
  return (
    <>
    <div className="different">
        <div className="different__block">
          <div className="different__text">
          <div className='container'>
            <h2>Головні принципи роботи СТО</h2>
            <div className="different__desc">
              При надходженні машини проводиться попередня діагностика.
              Якщо власник вирішує залишити ТС на обслуговування, він повинен
              підписати відповідний договір з представником станції. Далі
              вноситься оплата за послуги СТО[2] (за попередньою згодою можна
              внести частину суми, це залежить від правил конкретної СТО).
              Якщо виконувані роботи займають більше одного дня, клієнту видають
              спеціальні квитанції (талони, жетони і т. д.), в деяких випадках
              за виконанням ТО власник може спостерігати через     «галерею»
              або оглядове вікно в стіні приміщення. Після завершення роботи
              клієнт забирає машину особисто, обов'язково пред'являючи документи,
              що підтверджують право власності на авто.
            </div>
            </div>
          </div>
          <div className='container'>
          <div className="different__equip">
          <h2>Обладнання</h2>
          <div className="different__list">
            <img src="/images/different-equip.jpeg" alt="equip"/>
            <div className="different__items">
              <h4>На СТО зазвичай встановлене таке обладнання:</h4>
                <ul >
                  <li>Aвтомобільні підйомники</li>
                  <li>Гідравлічні домкрати, крани</li>
                  <li>Шиномонтажні верстати і стенди балансування</li>
                  <li>Стенди розвал-сходження</li>
                  <li>Компресори</li>
                  <li>Ремонтне обладнання</li>
                  <li>Мастильне обладнання заміни масла</li>
                  <li>Обладнання для обслуговування авто кондиціонерів</li>
                  <li>Зарядні пристрої для акумуляторів</li>
                  <li>Діагностичне обладнання</li>
                  <li>Обладнання для техогляду</li>
                  <li>Витяжки вихлопних газів</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Different;
