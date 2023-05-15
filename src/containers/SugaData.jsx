// import React from 'react';
import React, { useContext } from 'react';

import '@styles/MemberData.scss';
//asfasfasfaf
import suga from '@BTS_members/member-suga.jpg';
import icon_close from '@icons/icon_close.png';
import { Context } from '@context/AppContext';
// import Context from '@context/AppContext';


// const SugaData = () => {

function SugaData() {
    // const [sugamodal, setsugaModal] = useState(false);
    const { setsugaModal } = useContext(Context);



        // const handlesugaModal = () => {
        //     setsuagaModal(!sugamodal);
        // }

        const onCancel = () => {
            setsugaModal(false);
        };

        // const {                 //Aca se va a consumir el estado
        //     handlesugaModal,
        // } = React.useContext(Provider);
        
    return (
        <section className="member">
            <div className="member-item">

                <div className="firstclose-item">
                    <div class="firstclose-section"> 
                        <img src={icon_close} className="icon__close--rm" onClick={onCancel} alt=""/>
                    </div>
                </div>

                <div className="member-container">
                    <div className="member-container--photo">
                        <img src={suga} alt=""/>
                    </div>

                    <div className="member-container--data">
                        <div className="member-container--data---name">
                            <h4>SUGA</h4>
                        </div>
                
                        <div className="member-container--data---info">
                            <p>Min Yoon-gi (민윤기), better known by his stage names SUGA (슈가) and Agust D is a South Korean rapper-songwriter and record producer under Big Hit Music. He is a rapper of BTS, also he is notable for his large input in songwriting and is the major music producer between the members.</p>

                            <p>Min Yoon-gi was born on March 9, 1993, in Daegu, South Korea. {/* , the younger of two sons. He attended Taejeon Elementary School, Gwaneum Middle School, and Apgujeong High School.*/}</p>

                            {/* <p>As a solo artist, he has released two mixtapes: Agust D in 2016 and D-2 in 2020. In 2018, Suga was promoted to full member of the Korea Music Copyright Association.</p> */}
                                
                        </div>
                    </div>

                <div className="secondclose-item">
                    <div class="secondclose-section"> 
                        <img src={icon_close} className="icon__close--suga" onClick={onCancel} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default SugaData;