import React from 'react';
import v from '@BTS_members/member-v.jpg';

import '@styles/MemberComponent.scss'

function VComponent(props) {
    const handlevModal = () => {
    props.setvModal(prevState => !prevState);
};

    return (
        <div className="profilePictures-canvas--pictures">
            <img src={v} className="onClickButtonV" onClick={handlevModal} alt="" />
            {/* <img src={suga} alt="" /> */}
        </div>
    )
}

export default VComponent;