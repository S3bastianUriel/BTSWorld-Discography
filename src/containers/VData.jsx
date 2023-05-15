import React, { useContext } from 'react';
import '@styles/MemberData.scss';
//asdasdadsasdasdas
import v from '@BTS_members/member-v.jpg';
import icon_close from '@icons/icon_close.png';
import { Context } from '@context/AppContext';

const VData = () => {
    const  { setvModal } = useContext(Context);

        // const handlevModal = () => {
        //     setvModal(!vmodal);
        // }

        const onCancel = () => {
            setvModal(false)
        }

    return (
        <section class="member">
            <div className="member-item">

                <div className="firstclose-item">
                    <div class="firstclose-section"> 
                        <img src={icon_close} className="icon__close--rm" onClick={onCancel} alt=""/>
                    </div>
                </div>

                <div class="member-container">
                    <div class="member-container--photo">
                        <img className="" src={v} alt="" />
                    </div>

                    <div class="member-container--data">
                        <div class="member-container--data---name">
                            <h4>V</h4>
                        </div>
                
                        <div class="member-container--data---info">
                            <p>Kim Tae-hyung (김태형), better known by his stage name V (뷔), is a South Korean singer-songwriter, record producer and actor under Big Hit Music. He is a vocalist, a dancer and a visual of BTS.</p>

                            <p>V was born Kim Tae-hyung on December 30, 1995 in Daegu, South Korea{/*, and grew up in Geochang County. He is the eldest of three children, with a younger brother and sister. V first aspired to be a professional singer in elementary school,and eventually began taking saxophone lessons in early middle school as a means of pursuing the career. V initially became a trainee for Big Hit Entertainment after passing an audition in Daegu */}.</p>

                            {/* <p>As a solo artist, he has released three self-produced songs: "Scenery", "Winter Bear" and "Sweet Night". He made his acting debut under his birth name on 2016 with the drama Hwarang: The Poet Warrior Youth.</p> */}
                        </div>
                    </div>

                    <div className="secondclose-item">
                        <div class="secondclose-section"> 
                            <img src={icon_close} className="icon__close--v" onClick={onCancel} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default VData;