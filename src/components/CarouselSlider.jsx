import React from 'react';
import CarouselItems from './CarouselItems';
import './carousel.css';
import OwlCarousel from 'react-owl-carousel2';
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";
import image1 from "../assets/image-carousel.png";
import image2 from "../assets/image-carousel.png";
import image3 from "../assets/service-img2.png";

function CarouselSlider() {
  const TestimoniData = [
    {
        image: image3,
        username: "Melissa Scottish",
        title:"Mellisa's House",
        date: "01 January 2021",
        url: "https:www.google.com",
        testimoni:"“Painting done in a day. Polite & friendly. Fast, but very professional. I never tought that they can complete the house in 7 hours & look amazing. Nothing much to say, but Thanks A lot!”"
    },
    {
        image: image2,
        username: "Kocheng Oyenn",
        title:"Kocheng Oyen Playground",
        date: "01 February 2021",
        url: "https:www.google.com",
        testimoni:"“Paintastic team were very good at their work. The whole dealing process was super smooth and have awsome great customer services. So happy and statisfied with their work!! Thanks! Will hire this service again in future when i need it 👌”"
    },
    {
        image: image1,
        username: "Chizu Cat",
        title:"WBB Workspace",
        date: "01 October 2021",
        url: "https:www.google.com",
        testimoni:"“great and fantastic job. Breathed fresh air into my old flat space with a coat of new paint. price of painting, responsiveness in messages, punctuality in appointment and workmanship makes it a good experience. thanks! 😍👍 “"
    },
    {
        image: image2,
        username: "Deku",
        title:"Floral Tropic Garden",
        date: "01 September 2021",
        url: "https:www.google.com",
        testimoni:"“Painting done in a day. Polite & friendly. Fast, but very professional. I never tought that they can complete the house in 7 hours & look amazing. Nothing much to say, but Thanks A lot!”"
    },
    {
        image: image1,
        username: "Lorem Ipsum",
        title:"Hello World Rest Area",
        date: "01 March 2021",
        url: "https:www.google.com",
        testimoni:"bagus bangetttt"
    },
    {
        image: image2,
        username: "Chizu Cat",
        title:"COMMERCIAL",
        date: "01 July 2021",
        url: "https:www.google.com",
        testimoni:"mantapp!!"
    },
]

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
                 {
                   TestimoniData.map((item, idx) => {
                     return(
                       <CarouselItems
                        key={idx}
                        data={item}
                       />
                     )}
                   )
                 }
              </OwlCarousel>
            </div>
          </div>
        </section>
    </div>
  );
}

export default CarouselSlider;
