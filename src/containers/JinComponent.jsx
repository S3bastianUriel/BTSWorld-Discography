import React from 'react';
import jin from '@BTS_members/member-jin.jpg';

import '@styles/MemberComponent.scss'

function JinComponent(props) {
    const handlejinModal = () => {
    props.setjinModal(prevState => !prevState);
};

    return (
        <div className="profilePictures-canvas--pictures">
            <img src={jin} className="onClickButtonJin" onClick={handlejinModal} alt="" />
            {/* <img src={suga} alt="" /> */}
        </div>
    )
}

export default JinComponent;