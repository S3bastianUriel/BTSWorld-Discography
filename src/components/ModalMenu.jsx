import React from 'react';
import ReactDOM from 'react-dom';
// import '@styles/Profile.scss';
// import './Modal.css'
import '@styles/ModalMenu.scss';

function ModalMenu ({ children }) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
        {/* <div className='ModalMenu'> */}

        {children}
        </div>,
        document.getElementById('modalmenu')
    );
}

export default ModalMenu;