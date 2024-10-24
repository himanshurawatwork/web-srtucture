import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import "./Carousel.css";

const Carouselset = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
  return (
      <Carousel responsive={responsive}>
        <div className="carousel-client-logo border">
            <img src="ani-news-acoworlds.png" alt="" srcSet="" />
        </div>
        <div className=" carousel-client-logo border">
            <img src="ani-news-acoworlds.png" alt="" srcSet="" />
        </div>
        <div className="carousel-client-logo border">
            <img src="ani-news-acoworlds.png" alt="" srcSet="" />
        </div>
        <div className="carousel-client-logo border">
            <img src="ani-news-acoworlds.png" alt="" srcSet="" />
        </div>
      
      </Carousel>
  )
}

export default Carouselset


