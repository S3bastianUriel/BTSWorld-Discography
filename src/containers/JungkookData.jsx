import React, { useContext } from 'react';
import '@styles/MemberData.scss';
//asfasfasfaf
import jk from '@BTS_members/member-jk.jpg';
import icon_close from '@icons/icon_close.png';
import { Context } from '@context/AppContext';

const JungkookData = () => {
        const { setjungkookModal } = useContext(Context);

        // const handlejungkookModal = () => {
        //     setjungkookModal(!jungkookmodal);
        // }

        const onCancel = () => {
            setjungkookModal(false)
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
                        <img src={jk} alt=""/>
                    </div>
            
                    <div class="member-container--data">
                        <div class="member-container--data---name">
                            <h1>Jung Kook</h1>
                        </div>
                
                        <div class="member-container--data---info">
                            <p>Jeon Jeong-guk (전정국), better known by his stage name Jung Kook (정국), is a South Korean singer-songwriter and record producer under Big Hit Music.</p>

                            <p>Jeon Jung-kook (Korean: 전정국) was born on September 1, 1997, in Busan, South Korea.{/*  His family consists of his parents and an elder brother. When he became a trainee, he transferred to Singu Middle School in Seoul. Jung Kook initially had dreams of becoming a badminton player when he was young, but after seeing G-Dragon perform "Heartbreaker" on television, it influenced him to want to become a singer.*/}</p>

                            {/* <p>As a solo artist, he has released two self-produced songs: "Still With You" in 2020 and "My You" in 2022.</p>  */}
                        </div>
                    </div>

                    <div className="secondclose-item">
                        <div class="secondclose-section"> 
                            <img src={icon_close} className="icon__close--jungkook" onClick={onCancel} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JungkookData;