import React, { useContext } from 'react';
import '@styles/MemberData.scss';
//asfasfasfaf
import jin from '@BTS_members/member-jin.jpg';
import icon_close from '@icons/icon_close.png';
import { Context } from '@context/AppContext';

// const JinData = () => {
function JinData() {
    const { setjinModal } = useContext(Context);

    // const handlejinModal = () => {
    //     setjinModal(!jinmodal);
    // }

    const onCancel = () => {
        setjinModal(false)
    } 

    // const {                 //Aca se va a consumir el estado
    //     setJinModal
    // } = React.useContext(TodoContext);

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
                        <img src={jin} alt=""/>
                    </div>

                    <div class="member-container--data">
                        <div class="member-container--data---name">
                            <h4>Jin</h4>
                        </div>
                
                        <div class="member-container--data---info">
                            <p>Kim Seok-jin (김석진), better known by his stage name Jin (진), is a South Korean singer-songwriter and record producer under Big Hit Music. He is a member of the boy group BTS.</p>

                            <p>Kim Seok-jin was born on December 4, 1992, in Gwacheon, Gyeonggi Province, South Korea. {/*His family consists of his mother, father, and older brother.*/}</p>

                            {/* <p>As a solo artist, he has released three self-produced songs: "Tonight" in 2019, "Abyss" in 2020 and "Super Tuna" in 2021.</p> */}
                        </div>
                    </div>

                    <div className="secondclose-item">
                        <div class="secondclose-section"> 
                            <img src={icon_close} className="icon__close--jin" onClick={onCancel} alt=""/>
                        </div>
                    </div>
                </div> 
            </div>  
        </section>
    );
}

export default JinData;