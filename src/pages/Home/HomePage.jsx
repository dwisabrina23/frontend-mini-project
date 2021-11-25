import React from "react";
// import roundPhoto from "../../assets/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import {useHistory} from "react-router-dom"
import ImageBanner from "../../components/ImageBanner";
import CircleSosmed from "../../components/CircleSosmed";
import ServiceGrid from "../../components/ServiceGrid";
import CarouselSlider from "../../components/CarouselSlider";
export default function Home() {
  const history = useHistory();
  const handleClick = () =>{
    history.push("/contact");
  }
  return (
    <div>
        <section id="section-1">
          <ImageBanner/>
          <CircleSosmed/>
        </section>
        <section id="service">
          <ServiceGrid componentTitle="OUR SERVICES"/>
          <ServiceGrid componentTitle="CUSTOM MURAL PAINTING"/>
        </section>
        <section id="review">
          <CarouselSlider/>
        </section>
    </div>
  );
}
