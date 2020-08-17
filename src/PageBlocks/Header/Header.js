import React from 'react';

import AnchorWithLi from '../../Utilities/Link/AnchorWithLi/AnchorWithLi';

import './Header.css';

const Header = () => {
    return (
        <header>
            <nav className="transparent z-depth-0">
            <div className="nav-wrapper">
                {/* <a href="#" className="brand-logo">Logo</a> */}
                <ul id="nav-mobile" className="right">
                    <AnchorWithLi 
                        using_router={true} 
                        href="#design" 
                        li_class_name="design-button"
                        class_name={"black-text"} 
                        name={"View Designs"}
                    />
                </ul>
            </div>
            </nav>
        </header>
    );
}

export default Header;