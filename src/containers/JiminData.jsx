import React, { useContext } from 'react';
import '@styles/MemberData.scss';
//asfasfasfaf
import jimin from '@BTS_members/member-jimin.jpg';
import icon_close from '@icons/icon_close.png';
import { Context } from '@context/AppContext';

const JiminData = () => {

    const { setjiminModal } = useContext(Context);

    // const handlejiminModal = () => {
    //     setjiminModal(!jiminmodal);
    // }

    const onCancel = () => {
        setjiminModal(false)
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
                        <img src={jimin} alt=""/>
                    </div>

                    <div class="member-container--data">
                        <div class="member-container--data---name">
                            <h4>Jimin</h4>
                        </div>
                
                        <div class="member-container--data---info">
                            <p>Park Ji-min (박지민), better known by his stage name Jimin (지민), is a South Korean singer-songwriter and record producer under Big Hit Music. He is a member of the boy group BTS.</p>

                            <p>Jimin was born on October 13, 1995 in Geumjeong District, Busan, South Korea.{/*  His immediate family includes mother, father, and a younger brother. During middle school, he attended Just Dance Academy and learned popping and locking dance. Prior to becoming a trainee, Jimin studied contemporary dance at Busan High School of Arts and was a top student in the modern dance department. After a teacher suggested he audition with an entertainment company, it led him to Big Hit Entertainment.*/}</p>

                            {/* <p>As a solo artist, he has released two self-produced songs: "Promise" in 2018 and "Christmas Love" in 2020.</p> */}
                        </div>
                    </div>

                    <div className="secondclose-item">
                        <div class="secondclose-section"> 
                            <img src={icon_close} className="icon__close--jimin" onClick={onCancel} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JiminData;