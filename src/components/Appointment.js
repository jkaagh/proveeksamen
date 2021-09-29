import Axios from 'axios'
import React, {useState, useEffect} from 'react'
import image from "../media/appointment-img.jpg"
export default function Appointment() {

    const [name, setName]           = useState("")
    const [email, setEmail]         = useState("")
    const [service, setService]     = useState("")
    const [phone, setPhone]         = useState("")
    const [date, setDate]           = useState("")
    const [time, setTime]           = useState("")
    const [notes, setNotes]         = useState("")

    const [select, setSelect]                  = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5029/treatment")
        .then((response) => {
            let newArray = []
            response.data.forEach(element => {
                newArray.push(element.title)
            });
            setSelect(newArray)
        })
    }, [])

    const handleSubmit = () => {
        if(name == ""){
            alert("Please enter your name")
            return
        }
        if(email == ""){
            alert("Please enter your email")
            return 
        }
        if(service == "" || service == "SELECT TREATMENT"){
            alert("Please select treatment")
            return 
        }
        if(phone == ""){
            alert("Please enter your phone number")
            return 
        }
        if(date == ""){
            alert("Please chose a date")
            return 
        }
        if(time == ""){
            alert("Please chose the time")
            return 
        }
        
        Axios.post("http://localhost:5029/appointment/", {name: name, email: email, phone: phone, treatment: service, date: date, time: time, notes: notes})
        .then((response) => {
            console.log(response.data)
        })

        
    }

    return (
        <>
            <div className="bg-lightPink flex flex-row mt-24">
                <div className="w-9/12 hidden xl:block">
                    <img src={image}/>
                </div>

                <div className="p-10 w-full">
                    <div className="flex my-3">
                        <input 
                        className="appointmentInput flex-grow mx-7" 
                        placeholder="NAME"
                        onChange={(e) => {setName(e.target.value)}}
                        ></input>
                        
                        <input 
                        className="appointmentInput flex-grow mx-7" 
                        placeholder="EMAIL ADDRESS"
                        onChange={(e) => {setEmail(e.target.value)}}
                        ></input>
                    </div>

                    <div className="flex my-3">
                        <select
                        className="appointmentInput flex-grow mx-7"
                        onChange={(e) => {setService(e.target.value)}}
                        > 
                        <option value={undefined}>SELECT TREATMENT</option>
                            {
                                select.length > 0 && select.map((option, index) => {
                                    return(
                                        <option key={index}>{option}</option>
                                    )
                                })
                            }
                        </select>

                        <input 
                        className="appointmentInput flex-grow mx-7" 
                        placeholder="PHONE NUMBER"
                        onChange={(e) => {setPhone(e.target.value)}}
                        ></input>
                    </div>

                    <div className="flex my-3">
                        <input 
                        type="date"
                        className="appointmentInput flex-grow mx-7" 
                        placeholder="DATE"
                        onChange={(e) => {setDate(e.target.value)}}
                        ></input>
                        
                        <input 
                        type="time"
                        className="appointmentInput flex-grow mx-7" 
                        placeholder="TIME"
                        onChange={(e) => {setTime(e.target.value)}}
                        ></input>
                    </div>
                    <div className="flex my-3">
                        <textarea 

                        className="appointmentInput flex-grow mx-7" 
                        placeholder="NOTES"
                        onChange={(e) => {setNotes(e.target.value)}}
                        ></textarea>
                        
                    
                    </div>
                    <button onClick={handleSubmit} className="mainButton mt-4">MAKE AN APPOINTMENT</button>
                </div>
            </div>
        </>
    )
}
