import React, { useContext } from 'react';
import '@styles/MemberData.scss';
//asfasfasfaf
import jhope from '@BTS_members/member-jhope.jpg';
import icon_close from '@icons/icon_close.png';
import { Context } from '@context/AppContext';

// const JhopeData = () => {
    function JhopeData() {
    const { setjhopeModal } = useContext(Context);

        // const handlejhopeModal = () => {
        //     setjhopeModal(!jhopemodal);
        // }
        //*QUIZA HAYA QUE CAMBIARLE EL NOMBRE A OnCancel
        const onCancel = () => {
            setjhopeModal(false)
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
                        <img src={jhope} alt=""/>
                    </div>

                <div class="member-container--data">
                    <div class="member-container--data---name">
                        <h4>j-hope</h4>
                    </div>
                
                    <div class="member-container--data---info">
                        <p>Jung Ho-seok (정호석), better known by his stage name j-hope (제이홉), is a South Korean rapper-songwriter and record producer under Big Hit Music. He is a rapper and a dancer of BTS, also he is notable for his large input in songwriting and production in the discography in the group.</p>
    
                        <p>Jung Ho-seok was born on February 18, 1994, in Gwangju, South Korea{/*, where he lived with his parents and older sister. Before debuting with BTS, he was part of the underground dance team Neuron. He won various local prizes for dance, including placing first in a national dance competition in 2008. As a trainee, j-hope was featured as a rapper in Jo Kwon's song "Animal", which was released in 2012 */}.</p>

                        {/* <p>As a solo artist, he has released first mixtape Hope World, on March 2, 2018. He will then make his official solo debut with his first solo album Jack In The Box on July 15, 2022.</p> */}
                    </div>
                </div>

                <div className="secondclose-item">
                    <div class="secondclose-section"> 
                        <img src={icon_close} className="icon__close--jhope" onClick={onCancel} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default JhopeData;