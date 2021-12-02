import React, {useState, useEffect} from "react";
import ImageBanner from "../../components/ImageBanner";
import CircleSosmed from "../../components/CircleSosmed";
import ServiceGrid from "../../components/ServiceGrid";
import CarouselSlider from "../../components/CarouselSlider";
import SubPageTitle from "../../components/SubPageTitle";
import useGetTestimoni from '../../Hooks/useGetTestimoni';
export default function Home() {
  const [testiData, setTestiData] = useState([]);
  const {dataTestimoni, loadingTestimoni, errorTestimoni} = useGetTestimoni();

  useEffect(() => {
    if(dataTestimoni){
      setTestiData(dataTestimoni.testimoni)
    }
    if(errorTestimoni){
      console.log(errorTestimoni)
    }
  }, [])

  console.log("data", testiData);
  return (
    <div>
        <section id="section-1">
          <ImageBanner/>
          <CircleSosmed/>
        </section>
        <section id="service">
          <SubPageTitle title="OUR SERVICES"/>
          <br/>
          <ServiceGrid/>
          <ServiceGrid componentTitle="CUSTOM MURAL PAINTING"/>
        </section>
        <section id="review">
          <SubPageTitle title="WHAT THE SAY"/>
          {loadingTestimoni?
          (<p></p>):
          <CarouselSlider data={testiData}/>
          }
        </section>
    </div>
  );
}
