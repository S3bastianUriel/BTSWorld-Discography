import React from 'react';
import ReactDOM from 'react-dom';
// import '@styles/Profile.scss';
// import './Modal.css'
import '@styles/Modal.scss';

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='ModalBackgroundMember'>
        {children}
        </div>,
        document.getElementById('modal')
    );
}

export default Modal;