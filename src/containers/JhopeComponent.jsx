import React from 'react';
import jhope from '@BTS_members/member-jhope.jpg';

import '@styles/MemberComponent.scss'

function JhopeComponent(props) {
    const handlejhopeModal = () => {
    props.setjhopeModal(prevState => !prevState);
};

    return (
        <div className="profilePictures-canvas--pictures">
                    <img src={jhope} onClick={handlejhopeModal} alt="" />
                    {/* <img src={jhope} alt="" /> */}
        </div>
    )
}

export default JhopeComponent;