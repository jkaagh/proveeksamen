import React, {useState, useEffect} from 'react'
import quote from "../media/quote.png"
import Axios from "axios"

export default function Reviews() {

    const [data, setData] = useState(undefined);
    let imgAdress = "/img/Reviewers/"
    useEffect(() => {
        console.log("deez")
        Axios.get("http://localhost:5029/recommendation")
        .then((response) => {
            let chosenRecommendation = Math.floor(Math.random() * response.data.length);
            setData(response.data[chosenRecommendation])
        })       
    }, [])

    return (
        <>
        
            <div className="bg-lightPink container-fluid my-24 text-center flex flex-col justify-center p-4">
                <div className="container ">

                    <img src={quote} alt="quote" className="my-4 mx-auto"/>
                </div>
                <div className="m-auto sm:w-8/12 ">
                    <p className="text-xl font-serif text-textGray">
                        {data != undefined && data.content}
                    </p>
                </div>

                <div className="container">

                    <img 
                    src={data != undefined && imgAdress + data.image} 
                    alt={data != undefined && data.name} 
                    className="my-4 mx-auto rounded-full"
                    />
                    <span className=" text-xl font-serif text-textGray">
                        {data != undefined && data.name},&nbsp;
                    </span> 

                    <span className="text-textGray">
                        {data != undefined && data.title}
                    </span>
                </div>
            </div>
        </>
    )
}
