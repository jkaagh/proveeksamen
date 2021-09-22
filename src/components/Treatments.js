import React, {useState, useEffect} from 'react'
import image1 from "../media/Treatments/1.jpg"
import image2 from "../media/Treatments/2.jpg"
import image3 from "../media/Treatments/3.jpg"
import image4 from "../media/Treatments/4.jpg"
import image5 from "../media/Treatments/5.jpg"
import image6 from "../media/Treatments/6.jpg"
import image7 from "../media/Treatments/7.jpg"
import Procedure from './Procedure'

import icon from "../media/Treatments/icon.png"

export default function Treatments() {

    useEffect(() => {
        let array = [image4, image5, image6, image7]
        array.sort(() => Math.random() - 0.5)
        setImages(array)

        let newProcedures = [
            {
                image: image1,
                title: "Massage Therapy",
                text: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."
            },
            {
                image: image2,
                title: "Beauty Care",
                text: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."
            },
            {
                image: image3,
                title: "Executive Reflexology",
                text: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place which."
            },
        ]
        newProcedures.sort(() => Math.random() - 0.5)
        setProcedures(newProcedures)

    }, [])

    const [images, setImages] = useState([])
    const [procedures, setProcedures] = useState([])

    return (
        <>
        <div className="flex gap-3">
            {
                images.length > 0 && images.map((asdf, index) => {
                    console.log(index)
                    return(
                        <>
                            <div className="treatment m-auto">
                                <div className="treatmentpic">
                                    <img src={icon} alt="icon" className="inline" />
                                    <span className="font-serif">
                                        Body Treatment
                                    </span>
                                </div>
                                <img src={images[index]}/>
                            </div>
                        </>
                    )
                })
            }           
        </div>

        <div className="container">
            <div className="text-center pt-24 mb-8">
                    <h2 className="text-3xl sm:text-5xl font-serif text-textGray">
                        Popular Procedures
                    </h2>
                    <p className="w-1/2 m-auto pt-14 text-thinGray">
                        To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin
                    </p>
            </div>
            {procedures.length > 0 &&

                <div className="row">
                    <div className="col-md-4">
                        <Procedure data={procedures[0]}/>
                    </div>
                    <div className="col-md-4">
                        <Procedure data={procedures[1]}/>
                    </div>
                    <div className="col-md-4">
                        <Procedure data={procedures[2]}/>
                    </div>
                </div>
            }
        </div>
        </>
    )
}
