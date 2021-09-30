import React from 'react'
import Splash from "./Splash"
import Header from "./Header"
import Treatments from "./Treatments";
import Reviews from "./Reviews";
import Team from "./Team";
import Appointment from "./Appointment";
import Footer from "./Footer";
import About from "./About";

export default function FrontPage() {
    return (
       <>
            <Header/>
            <Splash/>
            <About/>
            <Treatments/>
            <Reviews/>
            <Team/>
            <a id="AppointmentJumplink"></a>
            <Appointment/>
            <Footer/>
       </>
    )
}
