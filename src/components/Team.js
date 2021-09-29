import Axios from 'axios'
import React, {useState, useEffect} from 'react'
// import image1 from "/img/Team/1.jpg"
export default function Team() {
    useEffect(() => {
        Axios.get("http://localhost:5029/team")
        .then((response) => {
            
            setData(response.data)
        })
    }, [])

    const [data, setData] = useState()

    return (
        <>
        
            <div className="container">

                <div className="row ">
                    { data != undefined && data.map((data, index) => {
                        return(
                            <div key={index} className=" col-md-4 p-4 relative">
                                <div className="absolute bg-white shadow-xl p-2 bottom-0 left-0 right-0 sm:mx-10 text-center ">
                                     <h2 className="pt-2 text-xl font-serif">
                                         {data.firstname}&nbsp;{data.lastname}
                                     </h2>
                                     <h5 className="text-thinGray pb-4">
                                         {data.role}
                                     </h5>
                                </div>
                                
                                <img 
                                src={"/img/Team/" + data.image} 
                                alt={data.firstname + " " + data.lastname}
                                className="w-full"
                                />

                            </div>
                        )
                    })  
                    }
                    

                </div>
            </div>

        </>
    )
}
