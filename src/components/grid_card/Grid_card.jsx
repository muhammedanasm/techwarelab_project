import React, { useEffect } from "react";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./grid.css";

const Grid_card = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Customize duration and behavior
  }, []);
  return (
    <div>
      <div className="container">
        <div className="grid-cards" data-aos="fade-up" data-aos-duration="3000">
          <div className="left__grid">
            <div className="grid__card1">
              <img src={card1} alt="" />
            </div>
            <div className="grid__card1">
              <img src={card2} alt="" />
            </div>
          </div>
          <div className="right__grid">
            <div className="grid-card_top">
              <img src={card3} alt="" />
              <p>Logoipsum</p>
            </div>
            <div className="grid-card_bottom">
              <div className="grid-card4">
                <img src={card4} alt="" />
                <p>Logoipsum</p>
              </div>
              <div className="grid-card5">
                <img src={card5} alt="" />
                <p>Logoipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid_card;
