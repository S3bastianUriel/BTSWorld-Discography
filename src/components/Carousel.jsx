import React from "react";
// import '@styles/Carousel.scss';
// import Slider from '@components/Slider';
// import Slider from '@slider/Slider';
import Slider from './Slider';


import proof_wallpaper from '@covers/Proof.png';
import ptd_wallpaper from '@covers/PTD Cover.png';
import butter_wallpaper from '@covers/BUTTER Album Cover.jpg';
import be_wallpaper from '@covers/BE Album Cover.jpg'


function Carousel() {

  const covers = [
    // "../assets/covers/",
    proof_wallpaper,
    ptd_wallpaper,
    butter_wallpaper,
    be_wallpaper,
    // "../assets/covers/PROOF desktop wallpaper.png",
    // "../assets/covers/PTD desktop wallpaper.png",
    // "../assets/covers/BUTTER desktop wallpaper.png",
    // "../assets/covers/BE desktop wallpaper.png",

    // "proof_wallpaper",
    // "ptd_wallpaper",
    // "butter_wallpaper",
    // "be_wallpaper"
  ];

  return <Slider className="Carousel" imagenes={covers}/>

}

export default Carousel