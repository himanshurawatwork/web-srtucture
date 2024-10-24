import React from "react";
import "./Home.css";
import Carouselset from "../Components/Carousel/Carousel";

const Home = () => {
  return (
   

    <>
     {/* home page start */}
      {/* hero section start */}
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row home-image">
          <div className="col-md-7 flex-column hero-content border d-flex align-items-center justify-content-center">
            <h1 className="hero-heading border">heading About Something</h1>
              <p className="hero-para border">The Growth of Business</p>
          </div>
          <div className="col-md-5 "></div>
        </div>
      </div>
    </section>
     {/* hero section end */}

    <section className="client-carousel ">
        <div className="container">
            <div className="row">
                <div className="col">
        <Carouselset/>

                </div>
            </div>
        </div>

    </section>
    
    </>
  );
};

export default Home;
