import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import proof_wallpaper from '@covers/PROOF desktop wallpaper.png';
// import ptd_wallpaper from '@covers/PTD desktop wallpaper.png';
// import butter_wallpaper from '@covers/BUTTER desktop wallpaper.png';
// import be_wallpaper from '@covers/BE desktop wallpaper.png'


const items = [
  {
    src: require('../assets/covers/PROOF desktop wallpaper.png'),
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    key: 1,
  },
  {
    src: require('../assets/covers/PTD desktop wallpaper.png'),
    // altText: 'Slide 2',
    // caption: 'Slide 2',
    key: 2,
  },
  {
    src: require('../assets/covers/BUTTER desktop wallpaper.png'),
    // altText: 'Slide 3',
    // caption: 'Slide 3',
    key: 3,
  },
  {
    src: require('../assets/covers/BE desktop wallpaper.png'),
    // altText: 'Slide 1',
    // caption: 'Slide 1',
    key: 4,
  },
  
];

const ComponentCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous} /*{...args}*/ 
    >
      {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} /> */}
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
  );
}

export default ComponentCarousel  ;