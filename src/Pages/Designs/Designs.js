import React, { useEffect } from 'react';
import SimpleStarterImage from '../../assets/img/ResumeTemplatesPreviews/SimpleStarter/SimpleStarter.webp';

import M from 'materialize-css';

import './Designs.css';

const Designs = () => {

    useEffect ( () => {
        let options = {
            fullWidth: true,
            indicators: true,
            duration: 50,
        };
        let designsSliderElem = document.getElementById("designs-slider");
        let designsSliderInstance = M.Carousel.init(designsSliderElem, options);        
    });

    return (
            <div className="carousel carousel-slider" id="designs-slider">
                <div className="carousel-item">
                    <img className={"designs-simple-starter"} src={SimpleStarterImage} alt="SimpleStarterImage" />
                </div>
                <div className="carousel-item">
                    <img className={"designs-simple-starter"} src={SimpleStarterImage} alt="SimpleStarterImage" />
                </div>
            </div>
    );
}

export default Designs;