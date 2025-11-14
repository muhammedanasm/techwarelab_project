import React from "react";

import AnimatedCircles from "./AnimatedCircles";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../button/Button";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_content">
        <h2 data-aos="fade-up" data-aos-duration="3000">
          Smarter Solutions <br /> Powered by AI
        </h2>
        <p data-aos="fade-up" data-aos-duration="3000">
          Streamline operations, reduce costs, and scale effortlessly with our
          AI-driven tools.
        </p>
        <Button
          label="Start A Project"
          icon={<FaArrowRight />}
          className="my-custom-btn"
        />
      </div>
      <AnimatedCircles />
    </div>
  );
};

export default Banner;
