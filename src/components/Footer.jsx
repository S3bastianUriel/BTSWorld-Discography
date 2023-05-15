import React from 'react';


import '@styles/Footer.scss';
// import '../styles/Header.scss';
// import menu from '@icons/menu.png';


import github from '@logos/github-icon-white-6.jpg';
import platzi from '@logos/platzi-bd.png';
import linkedin from '@logos/linkedin-white.png';


function Footer() {
	// const [toggle, setToggle] = useState(false);


    return (
        <footer className="footer">

            <div className="footer-content">

                <div className="footer-socialmedia" >
                    <div className="footer-socialmedia--item" >
                        
                        <a href="https://github.com/S3bastianUriel"  target="_blank" >
                            <img src={github} className="" alt="socialmedia__icon"/>
                        </a>


                    </div>

                    <div className="footer-socialmedia--item">
                        

                        <a href="https://platzi.com/p/sebastianuriel/"  target="_blank" >                    
                            <img src={platzi} alt="socialmedia__icon"/>
                        </a>


                    </div>

                    <div className="footer-socialmedia--item">
                        <a href="https://www.linkedin.com/in/sebastian-uriel-santivanez/"  target="_blank" >
                            <img src={linkedin} alt="socialmedia__icon" />
                        </a>

                        
                    </div>

                </div>

                <div className="footer-contact">
                    {/* <img src={logo} alt=""/> */}
                    <ul className="footer-contact--list">
                    {/* <ul> */}

                    {/* nicolas94santivanez94@gmail.com */}


                        <span><strong>Email</strong>: sebastianurielsantivanez@gmail.com</span>
                        <span><strong>WhatsApp</strong>: +54 9 11 3051-4762</span>
                    </ul>
                </div>

            </div>
        </footer>
    );
}

export default Footer;