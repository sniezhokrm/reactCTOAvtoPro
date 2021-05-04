import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carusel1 from '../image/carusel1.jpg'
import Carusel2 from '../image/carusel2.jpg'
import Carusel3 from '../image/carusel3.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './body-carusel.scss';
import { Carousel } from 'react-responsive-carousel';

class BodyCarusel extends Component {
    render() {
        return (
          <div className='carusel'>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showArrows={true} interval={8000} >
                <div>
                    <img src={Carusel1} />
                    <h1>CTO "AVTOPRO" ремонт автомобілів<br/> в Тернополі</h1>
                    <p className="legend">ПРО НАС</p>
                    <div className='carusel__contacts'>
                      <p>Потрібна допомога? Наберіть нам.</p>
                      <a href="tel:380988360066">+380988360066</a>
                    </div>
                </div>
                <div>
                    <img src={Carusel2} />
                    <h1>Якіснa діагностика та ремонт <br/> автомбілів</h1>
                    <p className="legend">Види робіт</p>
                    <div className='carusel__contacts'>
                      <p>Потрібна допомога? Наберіть нам.</p>
                      <a href="tel:380988360066">+380988360066</a>
                    </div>
                </div>
                <div>
                    <img src={Carusel3} />
                    <h1>Підір запчастин по низьких <br/> цінах</h1>
                    <p className="legend">Детальніше</p>
                    <div className='carusel__contacts'>
                      <p>Потрібна допомога? Наберіть нам.</p>
                      <a href="tel:380988360066">+380988360066</a>
                    </div>
                </div>
            </Carousel>
          </div>
        );
    }
};
export default BodyCarusel;
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'))
