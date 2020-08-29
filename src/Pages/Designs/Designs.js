import React, { useEffect, useState } from 'react';
import SimpleStarterImage from '../../assets/img/ResumeTemplatesPreviews/SimpleStarter/SimpleStarter.webp';

import M from 'materialize-css';

import './Designs.css';

const Designs = () => {

    const [designSliderInstance, setDesignSliderInstance] = useState("");

    useEffect (() => {
        let options = {
            fullWidth: true,
            indicators: true,
            duration: 50,
        };
        let designsSliderElem = document.querySelectorAll(".designs-slider");

        const designsSlider = () => {
            setDesignSliderInstance( M.Carousel.init(designsSliderElem, options) );
        }
        window.addEventListener('load', designsSlider);
        window.addEventListener('resize', designsSlider);
    }, []);

    return (
            <div className="carousel carousel-slider designs-slider">
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