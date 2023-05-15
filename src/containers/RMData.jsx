import React, { useContext } from 'react';
import '@styles/MemberData.scss'
//asfasfasfaf
import rm from '@BTS_members/member-rm.jpg';
import icon_close from '@icons/icon_close.png';
import { Context } from '@context/AppContext';



function RMData() {
    // const [sugamodal, setsugaModal] = useState(false);
    const { setrmModal } = useContext(Context);



        // const handlesugaModal = () => {
        //     setsugaModal(!sugamodal);
        // }

        const onCancel = () => {
            setrmModal(false);
        };


// const RMData = () => {
//      const [rmmodal, setrmModal] = useState(false);

//         const handlermModal = () => {
//             setrmModal(!rmmodal);
//         }

//         const onCancel = () => {
//             setrmModal(false)
//         } 

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
                        <img src={rm} alt=""/>
                    </div>

                    <div class="member-container--data">
                        <div class="member-container--data---name">
                            <p>RM</p>
                        </div>
                
                        <div class="member-container--data---info">
                            <p>Kim Nam-joon (김남준), better known by his stage name RM (short for Real Me, formerly known as Rap Monster (랩몬스터) and Runch Randa), is a South Korean rapper-songwriter and record producer under Big Hit Music. He is member of the boy group BTS, also he is notable for his large input in songwriting and production in the discography in the group.</p>

                            <p>Kim Nam-joon was born on September 12, 1994, in Dongjak-gu, South Korea. {/*, and grew up in Ilsan-gu, where his family moved when he was four or five.*/}</p>

                            {/* <p>As a solo artist, he has released two mixtapes: RM in 2015 and Mono in 2018. In 2020, RM was promoted to full member of the Korea Music Copyright Association.</p> */}
                
                        </div>
                    </div>
        
                    <div className="secondclose-item">
                        <div class="secondclose-section"> 
                            <img src={icon_close} className="icon__close--rm" onClick={onCancel} alt=""/>
                        </div>
                    </div>

                </div>
            </div>
       </section>
    );
}

export default RMData;