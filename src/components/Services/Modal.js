import React, {useState, useEffect} from 'react'

export default function Modal(props) {

    const [enabled, setEnabled] = useState(false)



    
    return (
        <>
            {props.enabled &&
                <div className=" flex justify-center items-center fixed z-50 top-0 right-0 bottom-0 left-0 bg-black bg-opacity-30">

                    <div className="bg-white rounded-md p-16 relative shadow-md w-3/4">
                        <button className="px-1 absolute top-2 right-2 font-bold text-xl"
                            onClick={() => {props.disable()}}
                        >
                            X
                        </button>
                        {props.data}
                      

                    </div>
                    
                    
                   
                </div>
            
            }
        </>
    )
}
