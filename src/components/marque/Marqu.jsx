import React from "react";
import client1 from "../../assets/client1.png";
import client2 from "../../assets/client2.png";
import client3 from "../../assets/client3.png";
import client4 from "../../assets/client4.png";
import "./marqu.css";

const Marqu = () => {
  const logos = [client1, client2, client3, client4];

  return (
    <div>
      <div className="marquee_section">
        <div className="marquee">
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div className="marquee_item" key={index}>
              <img src={logo} alt={`client-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marqu;
