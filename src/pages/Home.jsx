import React from 'react';
// import Header from '@components/Header';
// import Carousel from '@components/Carousel'
// import Example from '@components/Example'
// import ComponentCarousel from '@components/ComponentCarousel'


import '@styles/Home.scss';
// import arrow from '@icons/flechita.svg';
// import proof_wallpaper from '@covers/PROOF desktop wallpaper.png';
// import ptd_wallpaper from '@covers/PTD desktop wallpaper.png';
// import butter_wallpaper from '@covers/BUTTER desktop wallpaper.png';
// import be_wallpaper from '@covers/BE desktop wallpaper.png'
// import RMComponent from '@containers/RMComponent';
import Carousel from '@components/Carousel';

import Footer from '@components/Footer';

// import BTS_PROOF from '@covers/BTS_PROOF.jpg';

// import proof_cover from '@covers/Proof.png'
// import ptd_cover from '@covers/BUTTER Album Cover 2.jpg'
// import butter_cover from '@covers/BUTTER Album Cover.jpg'
// import be_cover from '@covers/BE Album Cover.jpg'


const Home = () => {
    return (
        <main> 
            <section>
                <div className='carousel'>
                    <div className="carousel-title">
                        <h2> NEW RELEASES!</h2>
                    </div>
                    <div className='carousel__inner'>
                        <Carousel />
                        {/* <div className='carousel__img'>
                            <img src={BTS_PROOF}></img>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* <Carousel /> */}
            {/* <ComponentCarousel /> */}
{/* 
            <section className='footer'>
                <div className='footer-div'>
                </div>
            </section> */}


            <Footer />
            {/* <footer className='footer'>
                <div>
                </div>
            </footer> */}
        </main>
    );
}

export default Home;