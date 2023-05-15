import React from 'react';
import rm from '@BTS_members/member-rm.jpg';

import '@styles/MemberComponent.scss'

function RMComponent(props) {
    const handlermModal = () => {
    props.setrmModal(prevState => !prevState);
};

    return (
        <div className="profilePictures-canvas--pictures">
            <img src={rm} className="onClickButtonRM" onClick={handlermModal} alt="" />
            {/* <img src={suga} alt="" /> */}
        </div>
    )
}

export default RMComponent;