// import React from 'react';
// import './carousel.css';
// function CarouselItems({image, title, username, date, testimoni, url}) {
//     console.log("isi image:", image)
//     return (  
//         <div className="carousel-item">
//                   <div className="carousel-image">
//                     <img className="img-fluid" src={image} alt="images not found" />
//                   </div>
//                   <div className="carousel-details">
//                     <div className="carousel-title">
//                       <h5><a href={url}>{title}</a></h5>
//                     </div>
//                     <ul>
//                       <li><i className="fa fa-user" aria-hidden="true"/>{username}</li>
//                       <li><i className="fa fa-calendar" aria-hidden="true"/>{date}</li>
//                     </ul>
//                     <p>{testimoni}</p>
//                   </div>
//         </div>       
//     );
// }

// export default CarouselItems;


// // carosel slider

// import React from 'react';
// import CarouselItems from './CarouselItems';
// import './carousel.css';
// import OwlCarousel from 'react-owl-carousel2';
// import "react-owl-carousel2/lib/styles.css";
// import "react-owl-carousel2/src/owl.theme.default.css";
// import TestimoniData from '../Models/TestiomoniData';

// function CarouselSlider() {
//   const option = [
//     {
//       loop: true,
//       margin: 10,
//       dots: true,
//       nav: true,
//       autoplay: true,
//       smartSpeed: 3000,
//       autoplayTimeout: 7000,
//       responsive: {
//         0: {
//           items: 1
//         },
//         600: {
//           items: 2
//         },
//         1000: {
//           items: 3
//         }
//       }
//     }
//   ];
//   return (
//     <div>
//       <section className="carousel-section">
//           <div className="container">
//             <div className="carousel-content">
//               <OwlCarousel options={option}>
//                   {
//                     TestimoniData.map((item, idx) => {
//                       console.log(item)
//                       return(
//                         <CarouselItems
//                           key={idx}
//                           image={item.image}
//                           title={item.title}
//                           username={item.username}
//                           date={item.date}
//                           testimoni={item.testimoni}
//                           url={item.url}
//                         />
//                       );
//                     })
//                   }
//               </OwlCarousel>
//             </div>
//           </div>
//         </section>
//     </div>
//   );
// }

// export default CarouselSlider;
