import React from "react";
import { data } from "../../../data/db";
import { Contributor } from "../../contributor/Contributor";
import Slider from "react-slick";

//This is a component that appears on homepage to show contributors

const ContributorSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
 
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
 
    ],
  };
  return (
    <div className="Contributors   grid grid-rows-2 place-content-center bg-white dark:bg-blue dark:text-platinum text-blue ">

       <p className="Contributors__heading    gradientText font-bold text-2xl tracking-wide text-center">Contributors</p>
       
       <div className="Carousel__Container    bg-gradient-to-r from-accent to-accent2 rounded-lg -mt-6 md:-mt-10">
       <Slider {...settings} className="Contributors__Carousel   w-80 py-3 md:w-[700px]">
       {data.map((res) => (
          <Contributor res={res} key={res.id} />
        ))}
       </Slider>
       </div>

    </div>
  );
};

export default ContributorSection;
