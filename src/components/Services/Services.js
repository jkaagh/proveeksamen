import React, {useState, useEffect} from 'react'
import Header from '../Header'
import butterfly from "../../media/butterfly.png"
import Axios from "axios"
import ServiceCards from './ServiceCards'
import Footer from '../Footer'



export default function Services() {

    const [services, setServices] = useState()

    

    useEffect(() => {
        Axios.get("http://localhost:5029/treatment")
        .then((response) => {
            setServices(response.data)
            
        })
    }, [])



    return (
        <div>
            

            <Header/>

            <div className="container relative pt-14">
                
                <div className="text-center">

                    <img className="m-auto" src={butterfly} alt="butterfly clip art"/>

                    <h3 className="font-serif text-gray-800 text-5xl my-8">
                        Services we offer
                    </h3>
                    <p className="text-gray-600 lg:w-2/3 m-auto">
                        These are the services we offer at Leospa. Check them out, and we are sure you will like what you see. Services are individualized to specific needs and guaranteed to please.
                    </p>
                    
                </div>

            </div>            
            
            <div className="container mt-16">
                <div className="flex lg:flex-wrap flex-col lg:flex-row gap-6 lg:gap-12 ">
                    {
                        services !== undefined && services.map((service, index) => {
                            return(
                                <ServiceCards key={index} data={service}/>
                            )
                        })
                    }
                </div>
            </div>
            

            <Footer/>    


            
           
        </div>
    )
}
