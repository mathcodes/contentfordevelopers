import React from "react";
import { data } from "../../../data/db";
import { Contributor } from "../../contributor/Contributor";
import Slider from "react-slick";

const sliderSettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 480, settings: { slidesToShow: 2 } },
  ],
};

const ContributorSection = () => (
  <div>
    <p className="eyebrow text-slate-500 dark:text-slate-400 mb-4">Contributors</p>
    <div className="rounded-xl overflow-hidden bg-gradient-to-r from-accent to-accent2 p-0.5">
      <div className="rounded-xl bg-white dark:bg-blue py-4 px-2">
        <Slider {...sliderSettings}>
          {data.map((res) => (
            <Contributor res={res} key={res.id} />
          ))}
        </Slider>
      </div>
    </div>
  </div>
);

export default ContributorSection;

