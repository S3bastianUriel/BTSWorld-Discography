import React from 'react';
import suga from '@BTS_members/member-suga.jpg';
import '@styles/MemberComponent.scss'
// import { Context } from '@context/AppContext';
// import { ConstProvider } from '@context/AppContext';


// const {   
//     sugamodal,              //Aca se va a consumir el estado
//     setsugaModal
// } = React.useContext(Context);


/*Fragmento que de momento "venia funcionando bien"*/
function SugaComponent(props) {
// function SugaComponent() {
    const handlesugaModal = () => {
        props.setsugaModal(prevState => !prevState);
        // const SugaComponent = () => {
        // const handlesugaModal = () => {
        // setsugaModal(prevState => !prevState);
        // const SugaComponent = () => {
        //     const handlesugaModal = () => {
        //         setsugaModal(!sugamodal);
};

    return (
        <div className="profilePictures-canvas--pictures" onClick={handlesugaModal}>
            <img src={suga} className="onClickButtonSuga"  alt="" />
            {/* <img src={suga} alt="" /> */}
        </div>
    )
}

export default SugaComponent;