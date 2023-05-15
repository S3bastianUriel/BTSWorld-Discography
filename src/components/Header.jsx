import React, { useContext } from 'react';
// import React from 'react';
import { Context } from '@context/AppContext';

import '@styles/Header.scss';
// import '../styles/Header.scss';
import menu from '@icons/align-justify.svg';
import logo from '@logos/logo.png';
import shoppingCart from '@icons/shopping-cart.svg';
import ModalMenu from '@components/ModalMenu'
import Menu from '@components/Menu';

function Header(props) {
    const onClickButton = () => {
        setmenuModal(prevState => !prevState);
    };
    
// function Header(props) {
//     const onClickButton = () => {
//     //   props.setmenuModal(prevState => !prevState);
//       setmenuModal(prevState => !prevState);  
//     };

const {
    menumodal,
    setmenuModal
} = useContext(Context)

    return (
        <nav className="header">

        <div className="header-list">
            <div className="header-menu" onClick={onClickButton}>
                {/* <img src={"../assets/icons/align-justify.svg"} alt=""/> */}
                <img src={menu}  alt=""/>
                
                {/* onClick={onClickButton} */}
            </div>

            <div className="header-logo">
                {/* <img src="../assets/logos/logo.png" alt=""/> */}
                <img src={logo} alt=""/>
            </div>

            <div className="header-store">
                {/* <img src="../assets/icons/shopping-cart.svg" alt=""/> */}
                <img src={shoppingCart} alt=""/>
            </div>
        </div>

        {!!menumodal && (
            <ModalMenu>
              <Menu />
            </ModalMenu>
        )}

    </nav>
    );
}

export default Header;