import React, { useState } from 'react'

function Home() {
    const [width, setWidth] = useState("600")
    return (
        <div className="my-20">
           <div className="container mx-auto  border border-gray-300 rounded-sm ">
                <div className="top-bar flex flex-row justify-between p-4">
                    <div className="flex space-x-4">
                        <button onClick={()=>{setWidth("360")}}>xs</button>
                        <button onClick={()=>{setWidth("576")}}>sm</button>
                        <button onClick={()=>{setWidth("768")}}>md</button>
                        <button onClick={()=>{setWidth("992")}}>lg</button>
                        <button onClick={()=>{setWidth("1200")}}>xl</button>
                    </div>
                    <div>
                        hd
                    </div>
                </div>
                <div className="h-96 bg-gray-200 overflow-x-auto">
                    <iframe src="https://www.w3schools.com" 
                    className="h-full mx-auto"
                    style={{width:`${width}px`}}></iframe>
                </div>
           </div>
        </div>
    )
}

export default Home
