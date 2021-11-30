import React from 'react';
import CarouselItems from './CarouselItems';
import './carousel.css';
import OwlCarousel from 'react-owl-carousel2';
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";

function CarouselSlider() {
  const option = 
    {
      loop: true,
      margin: 10,
      dotsEach: true,
      nav: true,
      navText: ["<", ">"],
      mouseDrag: true,
      autoplay: true,
      smartSpeed: 3000,
      autoplayTimeout: 7000,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    };
  return (
    <div>
      <section className="blog_section">
          <div className="container">
            <div className="blog_content">
              <OwlCarousel options={option}>
                 <CarouselItems/>
                 <CarouselItems/>
                 <CarouselItems/>
                 <CarouselItems/>
                 <CarouselItems/>
                 <CarouselItems/>
              </OwlCarousel>
            </div>
          </div>
        </section>
    </div>
  );
}

export default CarouselSlider;
