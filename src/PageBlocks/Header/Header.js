import React, { useEffect } from 'react';

import M from 'materialize-css';

import AnchorWithLi from '../../Utilities/Link/AnchorWithLi/AnchorWithLi';

import './Header.css';

import RedBg from '../../assets/img/home_page_bg_red_person.webp';
import Logo from '../../assets/img/Logo/complete-logo-compressed.webp'


const Header = () => {

    useEffect (() => {
        let elems = document.getElementById('designs');
        let instances = M.Modal.init(elems);
    }, []);

    return (
        <header>
            <nav className="transparent z-depth-0">
            <div className="nav-wrapper">
                {/* <a href="#" className="brand-logo">Logo</a> */}
                <ul id="nav-mobile" className="right">
                    <AnchorWithLi
                        using_router={false} 
                        href="#designs"
                        li_class_name="design-button"
                        class_name={"black-text modal-trigger"} 
                        name={"View Designs"}
                    />
                </ul>
            </div>
            </nav>
            <div className="header-red-bg hide-on-med-and-down">
                <div className="header-red-bg-div">
                    <img src={RedBg} alt="red background"/>
                </div>
            </div>

            <div className="hide-on-med-and-down">
                <div className="header-logo right-align">
                    <img src={Logo} alt={"Logo"} />
                    <h4 className="header-slogan">Sell Your <span className="header-slogan-skill">Skill</span></h4>
                </div>
            </div>

            <div className="hide-on-large-only">

                <div className="header-logo center-align">
                    <img src={Logo} alt={"Logo"} />
                    <h4 className="header-slogan">Sell Your <span className="header-slogan-skill">Skill</span></h4>
                </div>

            </div>            
        </header>
    );
}

export default Header;