import React from 'react';
import '@styles/Discography.scss';
// import Header from '../components/Header';
import proof_cover from '@covers/Proof.png'
import butter_ptd_cover from '@covers/BUTTER Album Cover 2.jpg'
import butter_cover from '@covers/BUTTER Album Cover.jpg'
import be_cover from '@covers/BE Album Cover.jpg'
import dynamite_cover from '@covers/DYNAMITE Album Cover.jpg'
import map_of_the_soul_7_cover from '@covers/MAP OF THE SOUL - 7 Album Cover.jpg'
import map_of_the_soul_persona_cover from '@covers/MAP OF THE SOUL - PERSONA Album Cover.jpg'
import love_yourself_answer_cover from '@covers/LOVE YOURSELF Answer Album Cover.jpg'
import love_yourself_tear_cover from '@covers/LOVE YOURSELF Tear Album Cover.jpg'
import love_yourself_her_cover from '@covers/LOVE YOURSELF Her Album Cover.jpg'
import you_never_walk_alone_cover from '@covers/YOU NEVER WALK ALONE Album Cover.jpg'
import wings_cover from '@covers/WINGS Album Cover.jpg'
import hwwh_special_cover from '@covers/The most beautiful moment in life - Young Forever Album Cover.jpg'
import hwwh_2_cover from '@covers/The most beautiful moment in life pt.2 Album Cover.jpg'
import hwwh_1_cover from '@covers/The most beautiful moment in life pt.1. Album Cover.jpg'
import dark_and_wild_cover from '@covers/DARK & WILD Album Cover.jpg'
import skool_luv_afair_cover from '@covers/Skool Luv Affair Album Cover.jpg'
import orul82_cover from '@covers/ORUL8,2 Album Cover.jpg'
import twocool_4skool_cover from '@covers/2 COOL 4 SKOOL Album cover.jpg'

import Footer from '@components/Footer';



const Discography = () => {
    return (
    <section className="discography">

    <div className="discography-title">
        <h2>DISCOGRAPHY</h2>
    </div>
        
        <div className="discography-container">
        
            <div className="discography-covers">
                <img className="discography-covers-img" src={proof_cover} alt=""/>
                {/* <img className="discography-covers-img" src="../assets/covers/Proof.png" alt=""/> */}
                <div className="discography-covers--details">
                    <p className="discography-project">ANTHOLOGY ALBUM</p>
                    <p className="discography-name">PROOF</p>
                    <p className="discography-artist">BTS</p>
                </div>
            </div>

            <div className="discography-covers">
                <img className="discography-covers-img" src={butter_ptd_cover} alt=""/>
                <div className="discography-covers--details">
                    <p className="discography-project">SINGLE</p>
                    <p className="discography-name">BUTTER/PERMISSION TO DANCE</p>
                    <p className="discography-artist">BTS</p>
                </div>
            </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={butter_cover} alt=""/>
                    <div className="discography-covers--details">
                        <p className="discography-project">DIGITAL SINGLE</p>
                        <p className="discography-name">BUTTER</p>
                        <p className="discography-artist">BTS</p>
                   

                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={be_cover} alt=""/>
                    <div className="discography-covers--details">
                        <p className="discography-project"></p>
                        <p className="discography-name">BE</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={dynamite_cover} alt=""/>
                    <div className="discography-covers--details">
                        <p className="discography-project">DIGITAL SINGLE</p>
                        <p className="discography-name">DYNAMITE</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={map_of_the_soul_7_cover} alt=""/>
                    <div className="discography-covers--details">
                        <p className="discography-project">4TH FULL-LENGTH ALBUM</p>
                        <p className="discography-name">MAP OF THE SOUL : 7</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={map_of_the_soul_persona_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/MAP OF THE SOUL- PERSONA Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">THE 6TH MINI ALBUM</p>
                        <p className="discography-name">MAP OF THE SOUL : Persona</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={love_yourself_answer_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/LOVE YOURSELF 結 'Answer' Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">REPACKAGE ALBUM</p>
                        <p className="discography-name">LOVE YOURSELF 結 'Answer'</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={love_yourself_tear_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/LOVE YOURSELF 轉 'Tear' Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">3RD FULL-LENGTH ALBUM</p>
                        <p className="discography-name">LOVE YOURSELF 轉 'Tear'</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={love_yourself_her_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/LOVE YOURSELF 承 'Her' Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">THE 5TH MINI ALBUM</p>
                        <p className="discography-name">LOVE YOURSELF 承 'Her'</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={you_never_walk_alone_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/YOU NEVER WALK ALONE Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">2ND SPECIAL ALBUM</p>
                        <p className="discography-name">YOU NEVER WALK ALONE</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={wings_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/WINGS Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">2ND FULL-LENGTH ALBUM</p>
                        <p className="discography-name">WINGS</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={hwwh_special_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/The most beautiful moment in life - Young Forever Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">1ST SPECIAL ALBUM</p>
                        <p className="discography-name">The most beautiful moment in life - Young Forever</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={hwwh_2_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/The most beautiful moment in life pt.2 Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">THE 4TH MINI ALBUM</p>
                        <p className="discography-name">The most beautiful moment in life pt.2</p>
                        <p className="discography-artist">LOOΠΔ</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={hwwh_1_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/The most beautiful moment in life pt.1. Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">THE 3RD MINI ALBUM</p>
                        <p className="discography-name">The most beautiful moment in life pt.1</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={dark_and_wild_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/DARK & WILD Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">1ST FULL-LENGHTH ALBUM</p>
                        <p className="discography-name">DARK & WILD</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={skool_luv_afair_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/Skool Luv Affair Album Cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">THE 2ND MINI ALBUM</p>
                        <p className="discography-name">SKOOL LUV AFFAIR</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={orul82_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/O!RUL8,2 Album Cover .jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">THE 1ST MINI ALBUM</p>
                        <p className="discography-name">O!RUL8,2?</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

                <div className="discography-covers">
                    <img className="discography-covers-img" src={twocool_4skool_cover} alt=""/>
                    {/* <img className="discography-covers-img" src="../assets/covers/2 COOL 4 SKOOL Album cover.jpg" alt=""/> */}
                    <div className="discography-covers--details">
                        <p className="discography-project">THE 1ST SINGLE ALBUM</p>
                        <p className="discography-name">2 COOL 4 SKOOL</p>
                        <p className="discography-artist">BTS</p>
                    </div>
                </div>

            </div>
        
        <div/>
        <Footer />

    </section>
    );
}

export default Discography;