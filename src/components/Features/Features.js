import React from 'react'
import Header from "../Header"
import Footer from "../Footer"
import butterfly from "../../media/butterfly.png"
import data from "./Features.json"
import FeatureCard from './FeatureCard'

export default function Features() {
    return (
        <div>
            <Header/>

            <div className="container relative pt-14">
                
                <div className="text-center">

                    <img className="m-auto" src={butterfly} alt="butterfly clip art"/>

                    <h3 className="font-serif text-gray-800 text-5xl my-8">
                        Upcoming events
                    </h3>
                    <p className="text-gray-600 lg:w-2/3 m-auto">
                        These are the upcoming events here at Leospa. Follow here for the newly updated events and upcoming events for leospa. 
                    </p>
                    
                </div>

            </div>           

            <div className="container">

            {
                data.map((data) => {
                    return(
                        <FeatureCard data={data}/>
                    )
                })
            }
            </div>

            <Footer/>
        </div>
    )
}
