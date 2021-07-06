import React, {Component} from 'react';
import './body-info.scss';
import {Link} from "react-router-dom";

export default class BodyInfo extends Component {
  constructor(props) {
    super(props);
  this.state = {
      posts : [
      {iconInfo: '/images/icons1.png', id: '11', active: false, textTitle: "Подзвоніть",
        text: "Досвідченні механіки завжди дадуть відповідь на Ваше запитання. Даєм детальний опис об'єму вартості робіт Вашого автомобіля"},
      {iconInfo: '/images/icons2.png', id: '12', active: false, textTitle: "Запишіться",
        text: "Mи завжди раді співправці з Вами, подзвоніть та запишіться в зручний для Вас час"},
      {iconInfo: '/images/icons3.png', id: '13', active: false, textTitle: "Відремонтуйте",
        text: "Ми якісно відремонтуємо Ваш автомобіль, завжди будемо тримати Вас у курсі подій та форсмажорних обставин"},
    ],
    }
    this.onToggleInfo= this.onToggleInfo.bind(this);
    }
    onToggleInfo(id) {
      this.setState(({posts}) => {
      const index = posts.findIndex(elem => elem.id === id);       //визначаємо номер елемента по ід
      const st = {active: !posts[index].active};
      const newItem = {...posts[index], ...st};
      const newArr = [...posts.slice(0, index), newItem, ...posts.slice(index + 1)];
        return {
        posts: newArr
          }
        })
      }
  render() {
    const {posts} = this.state;
    const elements = posts.map((item) => {
    const {id} = item;
    let classNames = 'info__details',
        classNamesItemInfo = "info__items";
      if (posts[+(id)- 11].active) {
           classNames +=' visible_details';
           classNamesItemInfo += ' visible_effects';
         }
        if(typeof(item) === 'object'){
          return (
            <div onMouseEnter={() =>this.onToggleInfo(id)}
            onMouseLeave={() => this.onToggleInfo(id)} className={classNamesItemInfo} id={id}>
              <img src={posts[+(id)- 11].iconInfo} alt="" className="info__img"/>
              <div className="info__desc">
                <h4>{posts[+(id)- 11].textTitle}</h4>
                <p>{posts[+(id)- 11].text}</p>
              </div>
              <a href="/"><div className={classNames}>Детальніше</div></a>
            </div>
          )
        }
    });

return(
    <div class="info">
      <div class="container">
        <div class="info__block">
          {elements}
        </div>
      </div>
    </div>
  )}
  };
