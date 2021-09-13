import React, {useState, useEffect} from 'react'
import Header from "./Header"
import splashImage from "../media/spa.png"
import Axios from "axios"
export default function Splash() {

    const [heroData, setHeroData] = useState(undefined)

    useEffect(() => {
        Axios.get("http://localhost:5029/hero")
        .then((response) => {   
            setHeroData({
                content: response.data.content,
                title1: response.data.title1,
                title2: response.data.title2,
                link: response.data.link
            })
        })
    }, [])
    return (
        <div className="bannerbg">

            <div className="absolute top-0 right-0 w-2/5">
                <img src={splashImage} alt="Woman getting facecare."/>
            </div>

            <div className="my20 mt-36 w-1/3 ">
                {heroData != undefined &&
                    <p className="text-mainPink">
                        {heroData.title1}
                    </p>
                }

                {heroData != undefined &&
                    <h1 className="text-6xl pt-4">
                        {heroData.title2}
                    </h1>
                }

                {heroData != undefined &&
                    <p className="pt-4">
                         {heroData.content}
                    </p>
                }
                <div className="flex flex-row mt-2">

                    <button className="px-5 py-3 bg-mainPink font-bold text-white transition hover:text-black  ">
                        RESERVE NOW
                    </button>
                    
                    <div className="flex flex-row items-center">
                        <div className="w-10 h-10 rounded-full playColor ml-4">
                            
                        </div>
                    </div>
                    
                </div>

                <div className="bg-red-400 w-64 pt-64 lort">
                    <div className="bg-purple-500 w-36 h-36 m-auto transition hover:h-48 asdf">
                        
                    </div>
                </div>
            </div>

        </div>
    )
}
