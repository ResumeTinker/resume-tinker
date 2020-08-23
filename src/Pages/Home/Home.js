import React from 'react';
import Header from '../../PageBlocks/Header/Header';

import RedBg from '../../assets/img/home_page_bg_red_person.webp';
import Logo from '../../assets/img/Logo/complete-logo-compressed.webp'

import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="home-red-bg hide-on-med-and-down">
                <div className="home-red-bg-div">
                    <img src={RedBg} alt="red background"/>
                </div>
            </div>
            <Header />
            <div className="hide-on-med-and-down">

                <div className="home-logo right-align">
                    <img src={Logo} alt={"Logo"} />
                    <h4 className="home-slogan">Sell Your <span className="home-slogan-skill">Skill</span></h4>
                </div>

                <div className="home-content-attraction-equation-div-desktop">
                    <div className="card-panel home-content-attraction-equation-card-panel">
                        <h6 className="home-content-attraction-equation-description">
                            Get your recruiters' attention with our beautiful resume design and your great career
                        </h6>
                        <div className="card-panel">
                            <h4 className="home-content-attraction-equation-title center-align">
                                Your Career <span>+</span> Our Design <span>=</span> <span>Attractive Resume</span>
                            </h4>
                        </div>
                    </div> 
                </div>

                <div className="row card-panel home-content-card-panel valign-wrapper">
                    <div className="col s12 m12 l6 card-panel">
                        <h4 className="home-content-title center-align"><span className="red-text">Redefine</span> Attraction</h4>
                    </div>
                    <div className="col s12 m12 l6">
                        <h6 className="home-content-description">
                            An Attractive resume should show off skill with eye catching design!
                        </h6>
                    </div>
                </div>

                <div className="row card-panel home-content-card-panel valign-wrapper">
                    <div className="col s6 m6 l6">
                        <h6 className="home-content-description">
                            Be creative right from creating resume
                        </h6>
                    </div>
                    <div className="col s6 m6 l6 card-panel home-content-title-card-panel">
                        <h4 className="home-content-title center-align">It All <span className="red-text">Begins</span> HERE</h4>
                    </div>
                </div>

                <div className="row card-panel home-content-card-panel valign-wrapper">
                    <div className="col s6 m6 l6 card-panel home-content-title-card-panel">
                        <h4 className="home-content-title home-content-begins-title">Your Resume <span className="red-text"><br/>Stays Yours*</span><br/>Forever</h4>
                    </div>
                    <div className="col s6 m6 l6">
                        <h6 className="home-content-description">
                            Your resume should feel unique through out your career!
                        </h6>
                    </div>
                </div>

                <div className="row card-panel home-content-card-panel">
                    <div className="col s12 m12 l12 card-panel home-content-title-card-panel">
                        <h4 className="home-content-title center-align">Cleaning Up the Mess</h4>
                    </div>
                    <div className="col s12 m12 l12">
                        <h6 className="home-content-description center-align">Your current social media profile may get your resume rejected! <br/>We will guide you to create a job profile.</h6>
                    </div>
                </div>

            </div>

            <div className="hide-on-large-only">

                <div className="home-logo center-align">
                    <img src={Logo} alt={"Logo"} />
                    <h4 className="home-slogan">Sell Your <span className="home-slogan-skill">Skill</span></h4>
                </div>

                <div className="card-panel home-content-attraction-equation-card-panel home-content-attraction-equation-description-panel">
                    <h6 className="home-content-attraction-equation-description">
                        Get your recruiters' attention with our beautiful resume design and your great career
                    </h6>
                    <div className="card-panel">
                        <h4 className="home-content-attraction-equation-title center-align">
                            Your Career <br/><span>Plus</span><br/> Our Design <br/><span>Equals</span><br/> <span>Attractive Resume</span>
                        </h4>
                    </div>
                </div>
                
                <div className="row card-panel home-content-card-panel">
                    <div className="col s12 m12 l6">
                        <h6 className="home-content-description">
                            An Attractive resume should show off skill with eye catching design!
                        </h6>
                    </div>
                    <div className="col s12 m12 l6 card-panel home-content-title-card-panel">
                        <h4 className="home-content-title center-align"><span className="red-text">Redefine</span> Attraction</h4>
                    </div>
                </div>

                <div className="row card-panel home-content-card-panel valign-wrapper">
                    <div className="col s6 m6 l6">
                        <h6 className="home-content-description">
                            Be creative right from creating resume
                        </h6>
                    </div>
                    <div className="col s6 m6 l6 card-panel home-content-title-card-panel">
                        <h4 className="home-content-title home-content-begins-title">It All <span className="red-text">Begins</span> HERE</h4>
                    </div>
                </div>

                <div className="row card-panel home-content-card-panel valign-wrapper">
                    <div className="col s6 m6 l6 card-panel home-content-title-card-panel">
                        <h4 className="home-content-title home-content-begins-title">Your Resume <span className="red-text"><br/>Stays Yours*</span><br/>Forever</h4>
                    </div>
                    <div className="col s6 m6 l6">
                        <h6 className="home-content-description">
                            Your resume should feel unique through out your career!
                        </h6>
                    </div>
                </div>

                <div className="row card-panel home-content-card-panel">
                    <div className="col s12 m12 l6 card-panel home-content-title-card-panel">
                        <h4 className="home-content-title center-align">Cleaning Up the Mess</h4>
                    </div>
                    <div className="col s12 m12 l6">
                        <h6 className="home-content-description center-align">Your current social media profile may get your resume rejected! <br/>We will guide you to create a job profile.</h6>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home;