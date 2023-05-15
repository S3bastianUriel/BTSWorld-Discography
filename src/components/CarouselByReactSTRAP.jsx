import React from "react";
import '@styles/Home.scss';

import proof_wallpaper from '@covers/PROOF desktop wallpaper.png';
import ptd_wallpaper from '@covers/PTD desktop wallpaper.png';
import butter_wallpaper from '@covers/BUTTER desktop wallpaper.png';
import be_wallpaper from '@covers/BE desktop wallpaper.png'

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
          
            <div className="carousel-item active">
              <img src={proof_wallpaper} className="d-block w-100" alt="..." />
            </div>
    
            <div className="carousel-item">
              <img src={ptd_wallpaper} className="d-block w-100" alt="..." />
            </div>
      
            <div className="carousel-item">
              <img src={butter_wallpaper} className="d-block w-100" alt="..." />
            </div>

              <div className="carousel-item">
                <img src={be_wallpaper} className="d-block w-100" alt="..." />
              </div>
          </div>
  
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
  
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    );
}

export default Carousel;