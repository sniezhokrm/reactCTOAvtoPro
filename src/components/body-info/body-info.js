import React, {Component} from 'react';
import './body-info.scss';

export default class BodyInfo extends Component {
  constructor(props) {
    super(props);
  this.state = {
      posts : [
      {iconInfo: '/images/icons1.png', id: '1', active: false, text: "Досвідченні механіки завжди дадуть відповідь на Ваше запитання. Даєм детальний опис об'єму вартості робіт Вашого автомобіля"},
      {iconInfo: '/images/icons2.png', id: '2', active: false, text: "Mи завжди раді співправці з Вами, подзвоніть та запишіться в зручний для Вас час"},
      {iconInfo: '/images/icons3.png', id: '3', active: false, text: "Ми якісно відремонтуємо Ваш автомобіль, завжди будемо тримати Вас у курсі подій та форсмажорних обставин"},
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
    const {onToggleInfo, activeInfo} = this.props
    const {posts} = this.state;

  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;
    let classNames = 'info__details',
        classNamesItemInfo = "info__items";
      if (posts[+(id)- 1].active) {
           classNames +=' visible_details';
           classNamesItemInfo += ' visible_effects';
         }
         console.log(item);
        if(typeof(item) === 'object'){
          return (
            <div onMouseEnter={() =>this.onToggleInfo(id)}
            onMouseLeave={() => this.onToggleInfo(id)} class={classNamesItemInfo} id={id}>
              <img src={posts[+(id)- 1].iconInfo} alt="" class="info__img"/>
              <div class="info__desc">
                <h4>Подзвоніть</h4>
                  <p>{posts[+(id)- 1].text}</p>
              </div>
              <div class={classNames}>Детальніше</div>
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
