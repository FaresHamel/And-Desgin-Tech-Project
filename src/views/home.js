import React from 'react';
import Hero from "../components/home/hero";
import About from "../components/home/about";
import Feature from "../components/home/feature";
import Works from "../components/home/works";
import Faq from "../components/home/faq";
import Pricing from "../components/home/pricing";
import Contact from "../components/home/contact";
const home = () => {
    return(
        <div className="main">
            <Hero/>
            <About/>
            <Feature/>
            <Works/>
            <Faq />
            <Pricing />
            <Contact />
        </div>
    );
};

export default home;