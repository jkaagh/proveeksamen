import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import logo from "../media/logo.png"

export default function Footer() {
    const [data, setData] = useState()

    useEffect(() => {
        Axios.get("http://localhost:5029/footer")
        .then((response) =>{
            setData(response.data)
            console.log(response.data)
        })
    }, [])

    return (
        <footer className="py-5 mt-12 bg-lightPink">
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="pr-7">
                    <img src={logo} />
                </div>
                {data != undefined &&
                    <>
                        <div className="text-customGray mr-12 mt-4">
                            <p>{data.name}</p>
                            <p>{data.address}</p>
                            <p>{data.zipncity}</p>
                        </div>
                        <div className="text-customGray mr-12 my-4">
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                        </div>
                        <div className="text-customGray">
                            <p>{data.openinghours}</p>
                            <p>CVR: {data.cvr}</p>
                        </div>
                    </>
                }
            </div>
        </footer>
    )
}
