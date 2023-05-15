import React from 'react';
import jk from '@BTS_members/member-jk.jpg';

import '@styles/MemberComponent.scss'

function JungkookComponent(props) {
    const handlejungkookModal = () => {
    props.setjungkookModal(prevState => !prevState);
};

    return (
        <div className="profilePictures-canvas--pictures">
            <img src={jk} className="onClickButtonJungkook" onClick={handlejungkookModal} alt="" />
            {/* <img src={suga} alt="" /> */}
        </div>
    )
}

export default JungkookComponent;