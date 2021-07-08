import React from 'react';
import './prices.scss';

const Prices = () => {
  return (
    <>
    <div className="price">
      <div className='container'>
          <div className="price__text">
          <table border="1" className="price__table" cellspacing="0" cellpadding="0">
              <tr className="head-title">
                <td colspan="2" width="576">
                  <p align="center"><strong>Найменування</strong></p>
                </td>
                <td>
                  <p align="center"><strong>Ціна, грн.*</strong></p>
                </td>
              </tr>
              <tr className="head-title">
                <td colspan="3" width="678">
                  <h2 align="center"><strong>1.</strong><strong>Діагностика автомобіля</strong></h2>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">1.1.</p>
                </td>
                <td width="516">
                  <p>Комп’ютерна діагностика</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">1.2.</p>
                </td>
                <td width="516">
                  <p>Діагностика ходової частини</p>
                </td>
                <td>
                  <p align="center">150</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">1.3.</p>
                </td>
                <td width="516">
                  <p>Діагностика гальмівної системи</p>
                </td>
                <td>
                  <p align="center">150</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">1.4.</p>
                </td>
                <td width="516">
                  <p>Діагностика стану робочих і технічних рідин</p>
                </td>
                <td>
                  <p align="center">50</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">1.3.</p>
                </td>
                <td width="516">
                  <p>Перевірка компресії в циліндрах двигуна</p>
                </td>
                <td>
                  <p align="center">Від 400</p>
                </td>
              </tr>
              <tr className="head-title">
                <td colspan="3" width="678">
                  <h2 align="center"><strong>2.</strong><strong>Технічне обслуговування</strong></h2>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.1.</p>
                </td>
                <td width="516">
                  <p>Заміна мастила в двигуні</p>
                </td>
                <td>
                  <p align="center">150</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.2.</p>
                </td>
                <td width="516">
                  <p>Заміна мастила з промивкою двигуна</p>
                </td>
                <td>
                  <p align="center">400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.3.</p>
                </td>
                <td width="516">
                  <p>Заміна мастила гідропідсилювача керма</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.4.</p>
                </td>
                <td width="516">
                  <p>Заміна мастила в мосту</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.6.</p>
                </td>
                <td width="516">
                  <p>Заміна мастила в механічній КПП</p>
                </td>
                <td>
                  <p align="center">300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.7.</p>
                </td>
                <td width="516">
                  <p>Заміна ременя ГРМ</p>
                </td>
                <td>
                  <p align="center">1800-2700</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.8.</p>
                </td>
                <td width="516">
                  <p>Регулювання / заміна підшипника ступиці колеса</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.9.</p>
                </td>
                <td width="516">
                  <p>Заміна задніх гальмівних колодок ( дискові гальма)</p>
                </td>
                <td>
                  <p align="center">300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.10.</p>
                </td>
                <td width="516">
                  <p>Заміна задніх гальмівних колодок ( барабанні гальма)</p>
                </td>
                <td>
                  <p align="center">450</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.11.</p>
                </td>
                <td width="516">
                  <p>Заміна повітряного фільтра</p>
                </td>
                <td>
                  <p align="center">50</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.12.</p>
                </td>
                <td width="516">
                  <p>Заміна свічок запалення у рядному двигуні</p>
                </td>
                <td>
                  <p align="center">250</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.13.</p>
                </td>
                <td width="516">
                  <p>Заміна дротів високої напруги у рядному двигуні</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.14.</p>
                </td>
                <td width="516">
                  <p>Заміна охолоджуючої рідини</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">2.15.</p>
                </td>
                <td width="516">
                  <p>Прокачування гальмівноЇ системи</p>
                </td>
                <td>
                  <p align="center">150</p>
                </td>
              </tr>
              <tr className="head-title">
                <td colspan="3" width="678">
                  <h2 align="center"><strong>3.</strong> <strong>Ходова частин</strong><strong>а</strong></h2>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.1.</p>
                </td>
                <td width="516">
                  <p>Запресування сайлентблока</p>
                </td>
                <td>
                  <p align="center">150-500</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.2.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка переднього амортизатора</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.3.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка амортизаторної стійки з пружиною</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.4.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка заднього амортизатора</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.5</p>
                </td>
                <td width="516">
                  <p>Зняття та установка пружини передньої підвіски</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.6.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка пружини задньої підвіски</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.7.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка ступиці колеса</p>
                </td>
                <td>
                  <p align="center">300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.8.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка передньої піввісь</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.9.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка пильника</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.10.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка тяги поперечної стійкості передньої осі</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.11.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка тяги поперечної стійкості задньої осі</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.12.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка втулок стабілізатора поперечної стійкості</p>
                </td>
                <td>
                  <p align="center">100</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.13.</p>
                </td>
                <td width="516">
                  <p>Заміна підшипників ступиці колеса</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.14.</p>
                </td>
                <td width="516">
                  <p>Заміна кулака внутрішнього</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.15.</p>
                </td>
                <td width="516">
                  <p>Заміна кулака зовнішнього</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.16.</p>
                </td>
                <td width="516">
                  <p>Заміна шаровоЇ опори</p>
                </td>
                <td>
                  <p align="center">300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.17.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка передньоЇ подушки двигуна</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">3.18.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка задньоЇ подушки двигуна</p>
                </td>
                <td>
                  <p align="center">400</p>
                </td>
              </tr>
              <tr className="head-title">
                <td colspan="3" width="678">
                  <h2 align="center"><strong>4. Рульове керування</strong></h2>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">4.1.</p>
                </td>
                <td width="516">
                  <p>Реставрація механічної кермової рейки</p>
                </td>
                <td>
                  <p align="center">1500</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">4.2.</p>
                </td>
                <td width="516">
                  <p>Реставрація гідравлічної кермової рейки</p>
                </td>
                <td>
                  <p align="center">3000</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">4.4.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка насоса гідропідсилювача</p>
                </td>
                <td>
                  <p align="center">400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">4.5.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка наконечника рульової тяги</p>
                </td>
                <td>
                  <p align="center">150</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">4.6.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка тяги рульового механізму</p>
                </td>
                <td>
                  <p align="center">250</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">4.7.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка сошки рульового механізму</p>
                </td>
                <td>
                  <p align="center">400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">4.8.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка маятникового важеля</p>
                </td>
                <td>
                  <p align="center">300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">4.9.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка пильника рульового механізму</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">4.12.</p>
                </td>
                <td width="516">
                  <p>Заміна робочої рідині гідропідсилювача керма</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr className="head-title">
                <td width="60">&nbsp;</td>
                <td colspan="2" width="617">
                  <h2 align="center"><strong>5. Гальмівна система</strong></h2>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.1.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка одного гальмівного диска</p>
                </td>
                <td>
                  <p align="center">250</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.2.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка одного гальмівного барабану</p>
                </td>
                <td>
                  <p align="center">300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.3.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка одного гальмівного диска зі ступицею</p>
                </td>
                <td>
                  <p align="center">400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.4.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка одного гальмівного барабану зі ступицею</p>
                </td>
                <td>
                  <p align="center">400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.5.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка одного супорта переднього колеса</p>
                </td>
                <td>
                  <p align="center">300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.6.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка одного супорта заднього колеса</p>
                </td>
                <td>
                  <p align="center">300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.7.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка одного робочого гальмівного циліндра переднього колеса</p>
                </td>
                <td>
                  <p align="center">400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.8.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка одного головного гальмівного циліндра заднього колеса</p>
                </td>
                <td>
                  <p align="center">400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.9.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка одного гальмівного шланга</p>
                </td>
                <td>
                  <p align="center">150</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">5.10.</p>
                </td>
                <td width="516">
                  <p>Заміна гальмівної рідини</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr className="head-title">
                <td width="60">&nbsp;</td>
                <td colspan="2" width="617">
                  <h2 align="center"><strong>6. Двигун</strong></h2>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.1.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка двигуна легкового автомобіля</p>
                </td>
                <td>
                  <p align="center">5000-12000</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.3.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка однієї головки блока ДВЗ</p>
                </td>
                <td>
                  <p align="center">4000-8000</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.5.</p>
                </td>
                <td width="516">
                  <p>Капітальний ремонт ДВЗ</p>
                </td>
                <td>
                  <p align="center">13000-55000</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.6.</p>
                </td>
                <td width="516">
                  <p>Ремонт/заміна голівки блока ДВЗ</p>
                </td>
                <td>
                  <p align="center">4500-8000</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.8.</p>
                </td>
                <td width="516">
                  <p>Ремонт/заміна колінчатого валу ДВЗ</p>
                </td>
                <td>
                  <p align="center">від 8000</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.9.</p>
                </td>
                <td width="516">
                  <p>Заміна прокладки головки блоку ДВЗ</p>
                </td>
                <td>
                  <p align="center">4500-7000</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.10.</p>
                </td>
                <td width="516">
                  <p>Заміна кілець КШМ ДВЗ</p>
                </td>
                <td>
                  <p align="center">від 5000</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.11.</p>
                </td>
                <td width="516">
                  <p>Регулювання клапанів</p>
                </td>
                <td>
                  <p align="center">від 100 за кл.</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.14.</p>
                </td>
                <td width="516">
                  <p>Притирка клапанів</p>
                </td>
                <td>
                  <p align="center">від 50 за кл.</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.15.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка шківа колінчатого вала</p>
                </td>
                <td>
                  <p align="center">від 300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.16.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка навісного обладнання</p>
                </td>
                <td>
                  <p align="center">від 300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.17.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка впускного/випускного колектора</p>
                </td>
                <td>
                  <p align="center">від 400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.19.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка помпи системи охолодження двигуна</p>
                </td>
                <td>
                  <p align="center">від 600</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.20.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка піддону двигуна</p>
                </td>
                <td>
                  <p align="center">від 600</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.21.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка прокладки піддону</p>
                </td>
                <td>
                  <p align="center">від 600</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.22.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка термостату</p>
                </td>
                <td>
                  <p align="center">від 300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.25.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка радіатора системи охолодження</p>
                </td>
                <td>
                  <p align="center">від 700</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">6.27.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка радіатора системи кондиціювання</p>
                </td>
                <td>
                  <p align="center">від 700</p>
                </td>
              </tr>
              <tr className="head-title">
                <td width="60">&nbsp;</td>
                <td colspan="2" width="617">
                  <h2 align="center"><strong>7.Трансмісія</strong></h2>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.1.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка карданного вала</p>
                </td>
                <td>
                  <p align="center">від 400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.2.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка хрестовини карданного вала</p>
                </td>
                <td>
                  <p align="center">від 400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.3.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка однієї піввісі переднього моста</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.4.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка однієї піввісі заднього моста</p>
                </td>
                <td>
                  <p align="center">350</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.5.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка еластичної муфти карданного вала</p>
                </td>
                <td>
                  <p align="center">500</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.6.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка механічної КПП</p>
                </td>
                <td>
                  <p align="center">1500-2500</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.7.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка коробки відбору потужності</p>
                </td>
                <td>
                  <p align="center">від 1500</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.11.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка поперечної балки кріплення КПП</p>
                </td>
                <td>
                  <p align="center">від 800</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.12.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка троса зчеплення</p>
                </td>
                <td>
                  <p align="center">від 600</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.13.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка робочого циліндра зчеплення</p>
                </td>
                <td>
                  <p align="center">від 1500</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.14.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка головного циліндра зчеплення</p>
                </td>
                <td>
                  <p align="center">від 400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.15.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка куліси КПП</p>
                </td>
                <td>
                  <p align="center">від 400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">7.16.</p>
                </td>
                <td width="516">
                  <p>Прокачування гідроприводу зчеплення</p>
                </td>
                <td>
                  <p align="center">200</p>
                </td>
              </tr>
              <tr className="head-title">
                <td width="60">&nbsp;</td>
                <td colspan="2" width="617">
                  <h2 align="center"><strong>8.</strong> <strong>Електрообладнання</strong></h2>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.1.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка генератора</p>
                </td>
                <td>
                  <p align="center">від 300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.2.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка стартера</p>
                </td>
                <td>
                  <p align="center">від 300</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.3.</p>
                </td>
                <td width="516">
                  <p>Зняття та установка модуля запалювання</p>
                </td>
                <td>
                  <p align="center">від 400</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.4.</p>
                </td>
                <td width="516">
                  <p>Заміна лампи освітлення</p>
                </td>
                <td>
                  <p align="center">від 50</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.5.</p>
                </td>
                <td width="516">
                  <p>Чистка форсунок</p>
                </td>
                <td>
                  <p align="center">від 200</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.6.</p>
                </td>
                <td width="516">
                  <p>Адаптація двигуна</p>
                </td>
                <td>
                  <p align="center">від 240</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.7.</p>
                </td>
                <td width="516">
                  <p>Видалення EGR або сажового фільтра</p>
                </td>
                <td>
                  <p align="center">від 2500</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.8.</p>
                </td>
                <td width="516">
                  <p>Встановлення ксенону</p>
                </td>
                <td>
                  <p align="center">від 550</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.9.</p>
                </td>
                <td width="516">
                  <p>ЧІП тюнинг</p>
                </td>
                <td>
                  <p align="center">від 2500</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.10.</p>
                </td>
                <td width="516">
                  <p>Встановлення сигналізації</p>
                </td>
                <td>
                  <p align="center">від 950</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.11.</p>
                </td>
                <td width="516">
                  <p>Перепрошивка ключа або іммобілайзера</p>
                </td>
                <td>
                  <p align="center">від 1900</p>
                </td>
              </tr>
              <tr>
                <td width="60">
                  <p align="center">8.12.</p>
                </td>
                <td width="516">
                  <p>Адаптація АКПП</p>
                </td>
                <td>
                  <p align="center">від 200</p>
                </td>
              </tr>
              <tr>
                <td width="60">&nbsp;</td>
                <td width="516">
                  <p align="right"><em>* - Ціна з урахуванням за один автомобіль, норма-година&nbsp;<br/></em></p>
                </td>
                <td>
                  <p align="center">250</p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default Prices;
