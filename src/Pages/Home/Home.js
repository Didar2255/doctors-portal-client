import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ClientOpinion from '../ClientOpinion/ClientOpinion';
import Contact from '../Conteact/Contact';
import Doctors from '../Doctors/Doctors';
import Feature from '../Feacture/Feature';
import Services from '../Services/Services';
import Navigation from '../Shared/Navigation/Navigation';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Feature></Feature>
            <AppointmentBanner></AppointmentBanner>
            <Doctors></Doctors>
            <Testimonial></Testimonial>
            <ClientOpinion></ClientOpinion>
            <Contact></Contact>
        </div>
    );
};

export default Home;