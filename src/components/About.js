import React from 'react'
import butterfly from "../media/butterfly.png"
import rose from "../media/china-rose.png"
import jasmine from "../media/jasmine.png"
export default function About() {
    return (
        <div className="container relative">
            <img src={rose} alt="chinese rose" className="absolute -top-12"/>
            <img src={jasmine} alt="chinese rose" className="absolute right-0 bottom-28"/>
            <div className="text-center">

                <img className="m-auto" src={butterfly} alt="butterfly clip art"/>
                <h4 className="text-gray-500 text-lg font-medium mt-2">
                    ABOUT OUR SPA CENTER
                </h4>
                <h3 className="font-serif text-gray-800 text-5xl my-8">
                    Come and you will be Inspired!
                </h3>
                <p className="text-gray-400 lg:w-2/3 m-auto">
                    It’s the end of summer the sweltering heat makes human sweat in the night and makes the plants and trees wilt even in the moonlit nights. The eastern wind breeze brings an eerie feeling, that the monsoon clouds are soon coming, there is a strange silence in the ears, the sky gets darker and darker
                </p>
                <button className="mainButton my-8 px-12">READ MORE</button>
            </div>

        </div>
    )
}
