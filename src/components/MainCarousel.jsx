import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../scss/Slick.scss";

function Responsive() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <motion.div
      className="slider-container"
      initial={{ y: 400, opcacity: 0 }}
      whileInView={{ y: 0, opcacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Slider {...settings}>
        <div>
          <div className="view-1"></div>
          <Link to="/technnical-data">Technnical Data</Link>
        </div>

        <div>
          <div className="view-2"></div>
          <Link to="/photo-bank">Photo Bank</Link>
        </div>

        <div>
          <div className="view-3"></div>
          <Link to="/merch">Merch</Link>
        </div>
      </Slider>
    </motion.div>
  );
}

export default Responsive;
