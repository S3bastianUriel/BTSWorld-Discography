// import React from 'react';
// import React, { useState } from 'react';
// import React, { useContext } from 'react';
import React, { useContext } from 'react';



// import Header from '@components/Header';
// import '../styles/Profile.scss';
import '@styles/Profile.scss';
import { Context } from '@context/AppContext';
// import Context from '@context/AppContext';

// import { Provider } from '@context/AppContext';
import Footer from '@components/Footer';

import Modal from '@components/Modal';

//MemberComponent
import RMComponent from '@containers/RMComponent';
import JinComponent from '@containers/JinComponent';
import JhopeComponent from '@containers/JhopeComponent';
import JiminComponent from '@containers/JiminComponent';
import SugaComponent from '@containers/SugaComponent';
import VComponent from '@containers/VComponent';
import JungkookComponent from '@containers/JungkookComponent';


// profilePictures
import BTS_PROOF from '@covers/BTS_PROOF.jpg';

// Modal de los miembros
import RMData from '@containers/RMData';
import JinData from '@containers/JinData';
import SugaData from '@containers/SugaData';
import JhopeData from '@containers/JhopeData';
import JiminData from '@containers/JiminData';
import VData from '@containers/VData';
import JungkookData from '@containers/JungkookData';


// const Profile = () => {

function Profile() {
    const {
            rmmodal,
            setrmModal,
            // handlermModal,

            jinmodal,
            setjinModal,
            // handlejinModal,

            sugamodal,
            setsugaModal,
            // handlesugaModal,

            jhopemodal,
            setjhopeModal,
            // handlejhopeModal,

            jiminmodal,
            setjiminModal,
            // handlejiminModal,

            vmodal,
            setvModal,
            // handlevModal,

            jungkookmodal,
            setjungkookModal,
            // handlejungkookModal

            // menumodal,
            // setmenuModal
    } = useContext(Context)


    return (
        <React.Fragment>
        {/* <main> */}
        <section className="cover">

            <div className="cover-container">
                <div className="cover-content">
                    {/* <img src="../BTS_PROOF.jpg" alt="" /> */}
                    <img src={BTS_PROOF} className="cover__img" alt="BTS_PROOF"/>
                    {/* <!-- <div className=""></div> --> */}
                </div>
            </div>

        </section>


        <section className="profile">
            <div className="profile-container">

                <div className="profile-data">
                    <div className="profile-data--title">
                        <h1>ABOUT BTS</h1>
                    </div>

                    <div className="profile-data--text">
                        <p>BTS, an acronym of Bangtan Sonyeondan or “Beyond the Scene,” is a 
                        Grammy-nominated South Korean group that has been capturing the hearts
                        of millions of fans globally since its debut in June 2013.
                            The members of BTS are RM, Jin, SUGA, j-hope, Jimin, V, and Jung Kook. 
                        Gaining recognition for their authentic and self-produced music, top-notch 
                        performances, and the way they interact with their fans, BTS has 
                        established themselves as “21st century Pop Icons” breaking countless world 
                        records. While imparting a positive influence through activities such as the 
                        LOVE MYSELF campaign and the UN ‘Speak Yourself’ speech, the band has mobilized
                         millions of fans across the world (named ARMY), collected four No. 1 songs 
                         in a span of 9 months, performed multiple sold-out stadium shows across the 
                         world, and been named TIME’s Entertainer of the Year 2020. BTS has been 
                         nominated for Best Pop Duo/Group Performance for the 63rd Grammy Awards and 
                         recognized with numerous prestigious awards like the Billboard Music Awards, 
                         American Music Awards and MTV Video Music Awards.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="intersection-sections"></section>


        <section className="profilePictures">
            <div className="profilePictures-canvas">

                <div className="profilePictures-canvas--pictures">
                    <h3 className="miembros">MEMBERS</h3>
                </div>

                <RMComponent 
                    setrmModal={setrmModal}
                />

                <div className="intersection">
                </div>

                    {/* 4 */}
                <JinComponent 
                    setjinModal={setjinModal}
                />

                <div className="intersection">
                </div>

                <SugaComponent 
                    setsugaModal={setsugaModal}
                />

                <div className="intersection">
                </div>

                    {/* 8a */}
                <JhopeComponent 
                    setjhopeModal={setjhopeModal}
                />

                <div className="intersection">
                </div>

                <JiminComponent 
                    setjiminModal={setjiminModal}
                />

                <div className="intersection">
                </div>
                
                    {/* 12 */}
                <VComponent 
                    setvModal={setvModal}
                />

                <div className="intersection">
                </div>

                <JungkookComponent 
                    setjungkookModal={setjungkookModal}
                />

                <div className="intersection">
                </div>
                
            </div>
            
            {/*{!!sugamodal && (
                <Modal>
                    {/* <JhopeData/>
                    <JiminData/>
                    <JinData/>
                    <JungkookData/>
                    <RMData/> 
                    <SugaData setsugaModal={setsugaModal}/>
                    {/* <VData/> 
                </Modal>
            )}  */}
            

            {/* {!!sugamodal && (
                <Modal>
                    {/* <JhopeData/> */}
                    {/* <JiminData/> */}
                    {/* <JinData/> */}
                    {/* <JungkookData/> */}
                    {/* <RMData/> */}

                    {/* <SugaData setsugaModal={setsugaModal}/> *
                    <SugaData />

                    {/* <VData/> 
                </Modal>
            )} */}


                    {/* MODAL inicializado de acuerdo al CURSO REACT PRACTICO */}
           
            {/* {!!sugamodal && (
                <Modal>
                    <SugaData setsugaModal={setsugaModal}/> 
                    <SugaData />
                </Modal>
            )} */}

		    
        

                    {/* MODAL inicializado de acuerdo al CURSO REACT INTRO */}
        {!!rmmodal && (
            <Modal>
              <RMData />
            </Modal>
        )}

          {!!jinmodal && (
            <Modal>
              <JinData />
            </Modal>
          )}

            {!!sugamodal && (
                <Modal>
                    <SugaData />
                </Modal>
            )}

            {!!jhopemodal && (
            <Modal>
              <JhopeData />
            </Modal>
          )}

          {!!jiminmodal && (
            <Modal>
              <JiminData />
            </Modal>
          )}

          {!!vmodal && (
            <Modal>
              <VData />
            </Modal>
          )}

          {!!jungkookmodal && (
            <Modal>
              <JungkookData />
            </Modal>
          )}



            </section>

            <section className="intersection-sections"></section>

            <section></section>
       
        {/* </main> */}

            <Footer />
    </React.Fragment>
    );
}

export default Profile;
