import React from 'react'

export default function FeatureCard(props) {
    console.log(props)
    return (
        <div className="shadow-md  my-6">
            <div className="row">
                <div className="col-lg-4">
                    <img src={props.data.image} className="m-auto m-lg-0 rounded border shadow"/>
                </div>
                <div className="col m-4">

                    <h2 className="font-serif text-textGray text-2xl">
                        {props.data.title}
                    </h2>
                    <h3 className="text-lg text-gray-700">
                        By <span className="font-serif text-mainPink">{props.data.host}</span>
                    </h3>
                    <h3 className="text-gray-700">
                        Hosted on {props.data.date}
                    </h3>
                    <p className="pt-3 text-gray-800">
                        {props.data.content}
                    </p>
  
                </div>
                

            </div>

        </div>
    )
}
