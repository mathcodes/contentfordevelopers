import React from "react";
import contributors from "../../../data/contributors.json";
import { Contributor } from "../../contributor/Contributor";
import Slider from "react-slick";

//This is a component that appears on homepage to show contributors

const ContributorSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="Contributors   grid grid-rows-2 place-content-center py-28 bg-white dark:bg-blue dark:text-platinum text-blue ">

       <p className="Contributors__heading    gradientText font-bold text-2xl tracking-wide text-center">Contributors</p>
       
       <div className="Carousel__Container    bg-gradient-to-r from-accent to-accent2 rounded-lg -mt-6 md:-mt-10">
       <Slider {...settings} className="Contributors__Carousel   w-80 py-3 md:w-[700px]">
       {contributors.map((res) => (
          <Contributor res={res} key={res.id} />
        ))}
       </Slider>
       </div>

    </div>
  );
};

export default ContributorSection;
