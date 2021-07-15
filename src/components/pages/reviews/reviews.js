import React, {Component} from 'react';
import ReactStars from "react-rating-stars-component";
import './reviews.scss';

export default class Reviews extends Component {
  constructor(props) {
    super(props);
  this.state = {
      reviews: [
      {name: 'Роман', id: '21',
        text: "Планове ТО прошов на відмінно, ціни та якість приємно радують",
      star: 5},
      {name: 'Степан', id: '22',
        text: "Автомобіль посля ремонту двигуна, працює як новий, дякую хлопці )",
      star: 5},
    ],
    text: '',
    name: '',
    star: 5,
    prevent: false
    }
  this.onChange = this.onChange.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  this.onChangeName = this.onChangeName.bind(this);
}
onChange(e) {
  this.setState({
    text: e.target.value
  })
}
onChangeName(e) {
  this.setState({
    name: e.target.value
  })
}
onChangeStar(value) {
  this.setState({
    star: value
  })
}
onSubmit(e) {
  e.preventDefault();
  const {name, text, star} = this.state;
  this.addForm(name, text, star);
  this.setState(({text, name}) => {
    return {
      name: '',
      text: '',
      star,
      }
    })
}

addForm(name, text, star) {
  const random = new Date().getTime() ;
  const newItem = {
    text,
    name,
    id: random,
    star,
  }
  if (!(name ==="") && !(text==="") && star) {
    this.setState(({reviews, prevent}) => {
    const newArr = [...reviews, newItem]
    return {
      reviews: newArr,
      prevent: false
      }
    })
  } else {
    this.setState(({revent}) => {
    return {
      prevent: true
      }
    })
  }
}


  render() {
    const {reviews, prevent} = this.state;
    const starPropsChoose = {
    size: 24,
    count: 5,
    value: 5,
    color: "#007bff",
    activeColor: "yellow",
    a11y: true,
    isHalf: false,
    onChange: (newValue) => {this.onChangeStar(newValue)}
  };
  const starPropsRender = {
    color: "#007bff",
    size: 20,
    edit: false
}
  const elements = reviews.map((item) => {
    const {id, text, name, star} = item;
        if(typeof(item) === 'object'){
          return (
              <li className='reviews__items' key={id}>
                <div className='reviews__name'>{name}</div>
                <div className='reviews__text'>{text}</div>
                <ReactStars className='reviews__star'
                  value= {star}
                {...starPropsRender}
                />
              </li>
          )
        }
    });

    const reventMassage = prevent ? "Заповніть, будь ласка, пусті поля!" : "";

return(
  <div className="reviews">
    <div className="container">
      <div className="reviews__prevent" >{reventMassage}</div>
      <form onSubmit={this.onSubmit}
        className = 'reviews__form bottom-panel d-flex'>
        <input value={this.state.name} onChange={this.onChangeName}
          className='form-control new-post-label reviews__nameInp' type='text' placeholder="Введіть своє ім'я">
        </input>
        <input value={this.state.text} onChange={this.onChange}
          className='form-control new-post-label reviews__textInp' type='text' placeholder='Що Ви думаєте про наше СТО?'>
        </input>
        <div className="reviews__stars">
          <ReactStars {...starPropsChoose} />
        </div>
        <button type='submit' className='btn btn-outline-secondary reviews__btn'>Додати відгук</button>
      </form>
      <div className='reviews__items'>
        {elements}
      </div>
    </div>
</div>
  )}
  };
