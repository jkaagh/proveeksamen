import React from 'react'
import image1 from "../media/Treatments/1.jpg"
import image2 from "../media/Treatments/2.jpg"
import image3 from "../media/Treatments/3.jpg"
import image4 from "../media/Treatments/4.jpg"
import icon from "../media/Treatments/icon.png"

export default function Treatments() {
    return (
        <div className="flex gap-3">
            
            <div className="treatment m-auto">
                <div className="treatmentpic">
                    <img src={icon} alt="icon" className="block" />
                    <span className="block">
                        deez
                    </span>
                </div>
                <img src={image1}/>
            </div>

            <div className="treatment hidden sm:block">
                <div className="treatmentpic">
                    asd
                </div>
                <img src={image2}/>
            </div>

            <div className="treatment hidden sm:block">
                <div className="treatmentpic">
                    asd
                </div>
                <img src={image3}/>
            </div>

            <div className="treatment hidden lg:block">
                <div className="treatmentpic">
                    asd
                </div>
                <img src={image4}/>
            </div>

        </div>
    )
}
