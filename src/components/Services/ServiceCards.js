import React, {useState} from 'react'
import Modal from './Modal'

export default function ServiceCards(props) {

    const [enabled, setEnabled] = useState(false)

    const disable = () => setEnabled(false)

    return (
        <>
            <div className="border p-3 text-center transition duration-300 hover:shadow-2xl procedure w-8/12 m-auto lg:w-3/12  relative flex-grow " >
                {/* <img src={props.data.image} className="w-full"/> */}
                <div className="relative">
                <h3 className="font-serif text-textGray text-2xl my-4">{props.data.title}</h3>

                    <article className="text-thinGray overflow-hidden" style={{height: "200px"}} dangerouslySetInnerHTML={{__html: props.data.content}}>
                        
                    </article>

                    <div className="w-auto bg-opacity-50 absolute right-0 left-0 bottom-0 h-8 serviceGradient">
        
                    </div>
                </div>
                <button className="procButton"
                onClick={() => setEnabled(true)}
                >READ MORE</button>

                
            </div>

            <Modal enabled={enabled} disable={disable} data={
            <> 
                <div>
                    <h3 className="font-serif text-textGray text-2xl my-4">{props.data.title}</h3>
                    <article className="text-thinGray" dangerouslySetInnerHTML={{__html: props.data.content}}>    
                    </article>

                </div>
            </>
            }/>
        </>
        
    )
}
