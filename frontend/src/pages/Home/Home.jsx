import { useEffect } from "react";

import Hero from "../../components/Hero/hero";
import About from "../../components/About/about";
import ServiceCard from "../../components/ServiceCard/serviceCard";
import WhyChooseUs from "../../components/WhyChooseUs/whyChooseUs";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import Contact from "../Contact/contact";

import { saveTrackingParams } from "../../utils/tracking";


function Home() {

    useEffect(() => {
        saveTrackingParams();
    }, []);


    return (

        <>

            <Hero />
            <About />
            <ServiceCard />
            <WhyChooseUs />
            <WorkProcess />
            <Contact />

        </>

    );

}

export default Home;