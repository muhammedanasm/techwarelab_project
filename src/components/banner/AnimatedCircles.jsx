import { useEffect } from "react";
import gsap from "gsap";

const AnimatedCircles = () => {
  useEffect(() => {
    const banner = document.querySelector(".banner");
    const circles = document.querySelectorAll(".circle");

    const handleMove = (e) => {
      const rect = banner.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const moveX = (x - rect.width / 2) * 0.03;
      const moveY = (y - rect.height / 2) * 0.03;

      gsap.to(circles, {
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    banner.addEventListener("mousemove", handleMove);

    return () => banner.removeEventListener("mousemove", handleMove);
  }, []);
  return (
    <div className="circles_wrapper">
      <div className="circle delay1"></div>
      <div className="circle delay2"></div>
      <div className="circle delay3"></div>
      <div className="circle delay4"></div>
    </div>
  );
};

export default AnimatedCircles;
