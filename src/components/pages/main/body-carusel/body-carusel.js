import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './body-carusel.scss';


const BodyCarusel = () =>{

        return (
          <div className='carusel'>
            <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showArrows={true} interval={8000} >
                <div>
                    <img src="images/carusel1.jpg" alt=""/>
                    <h1>CTO "AVTOPRO" ремонт автомобілів<br/> в Тернополі</h1>
                    <p className="legend">ПРО НАС</p>
                    <div className='carusel__contacts'>
                      <p>Потрібна допомога? Наберіть нам.</p>
                      <a href="tel:380988360066">+380988360066</a>
                    </div>
                </div>
                <div>
                    <img src="images/carusel2.jpg" alt=""/>
                      <h1>Якіснa діагностика та ремонт <br/> автомбілів</h1>
                    <p className="legend">Види робіт</p>
                    <div className='carusel__contacts'>
                      <p>Потрібна допомога? Наберіть нам.</p>
                      <a href="tel:380988360066">+380988360066</a>
                    </div>
                </div>
                <div>
                    <img src="images/carusel3.jpg" alt=""/>
                      <h1>Підбір запчастин по низьких <br/> цінах</h1>
                    <p className="legend" >Детальніше</p>
                    <div className='carusel__contacts'>
                      <p>Потрібна допомога? Наберіть нам.</p>
                      <a href="tel:380988360066">+380988360066</a>
                    </div>
                </div>
            </Carousel>
          </div>
        );
    }
export default BodyCarusel;
//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'))
