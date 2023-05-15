/*import React, { useContext } from 'react';
// import '@styles/Menu.scss';
import { Context } from '@context/AppContext';



function Menu() {
    const { setmenuModal } = useContext(Context);

    const onCancel = () => {
        setmenuModal(false);
    };

// const Menu = () => {
    return (
        <section class="menu">
            <div className='menu'>
                <div className="menu__list">
                    <ul>
                        <li>
                            <a href="/" class="menu__list--home">HOME</a>
                        </li>
                        <li>
                            <a href="/" class="menu__list--profile">PROFILE</a>
                        </li>
                        <li>
                            <a href="/" class="menu__list--discography">DISCOGRAPHY</a>
                        </li>
                    </ul>
                </div>
            </div>
    </section>
    );

}

export default Menu;*/


import React from 'react';
import '@styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="https://btsworld-home.netlify.app/" className="title">HOME</a>
				</li>
				<li>
					<a href="/profile">PROFILE</a>
				</li>
				<li>
					<a href="/">DISCOGRAPHY</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
