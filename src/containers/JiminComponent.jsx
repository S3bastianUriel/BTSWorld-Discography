import React from 'react';
import jimin from '@BTS_members/member-jimin.jpg';

import '@styles/MemberComponent.scss'

function JiminComponent(props) {
    const handlejiminModal = () => {
    props.setjiminModal(prevState => !prevState);
};

    return (
        <div className="profilePictures-canvas--pictures">
            <img src={jimin} className="onClickButtonJimin" onClick={handlejiminModal} alt="" />
            {/* <img src={suga} alt="" /> */}
        </div>
    )
}

export default JiminComponent;