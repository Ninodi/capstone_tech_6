import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../assets/styles/backToTop.css'
import arrow from "../assets/icons/arrow_back_ios.png"
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollFunction = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="vertical-shaking">
      {isVisible && (
            <Link to ="/"  className="scrollTop" onClick={scrollToTop}> <img src={arrow} alt="backtotop" /> </Link>
      )}
    </div>
  );
};

export default BackToTop;
