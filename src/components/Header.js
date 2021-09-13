import React from 'react'
import logo from "../media/logo.png"
export default function Header() {
    return (
        <header className="my20 pt-2">
            
            {/* vælger at tilføje 0.5rem padding top da det ser bedre ud at den ikke klæber til toppen */}
            

            <div className="flex">
                <img src={logo}/>
                <nav className="text-right m-auto z-10">
                         
                    <ul className="float-right pt-8 ">
                        <li className="navButton hover:text-red-600 ">
                            HOME
                        </li>
                        <li className="navButton">
                            ABOUT
                        </li>
                         <li className="navButton">
                            FEATURE
                        </li>
                        <li className="navButton">
                            SERVICE
                        </li>
                        <li className="navButton">
                            CONTACT
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
