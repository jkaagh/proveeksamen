import React from 'react'
import { Link } from 'react-router-dom'

export default function Procedure(props) {
    
    return (
        <div>
            <div className="border p-3 text-center transition duration-300 hover:shadow-2xl procedure">
                <img src={props.data.image} alt={props.data.title} className="w-full"/>
                <h3 className="font-serif text-textGray text-2xl my-4">{props.data.title}</h3>
                <p className="text-thinGray">
                    {props.data.text}
                </p>
                <Link to="/services">
                    <button className="procButton ">READ MORE</button>
                </Link>
            </div>
        </div>
    )
}
