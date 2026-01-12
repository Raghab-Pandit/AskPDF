import React, { useEffect, useMemo, useState } from "react"
import { RiArrowDropDownLine } from "react-icons/ri";

const Chatbot= ({ docName }) =>{

    const [Expand, setExpand] = useState(false)
    //bg-black/30 blur-[5px]
    
    useEffect(()=>{
        setExpand(!!docName);
    }, [docName])

    return(
    <div className="flex flex-col justify-center w-full">
           <div className={`w-full bg-blue-600 h-[calc(10vh-0.6rem)] rounded-t-xl px-3 flex items-center justify-between`}>
                <h1 className="font-bold text-2xl text-white">{docName ? docName : "AskPDF"}</h1>
                <RiArrowDropDownLine className={`${Expand ? "rotate-180" : "rotate-0"} transition-all duration-300 font-bold text-3xl text-white cursor-pointer`} onClick={()=> setExpand(prev => !prev)} />
            </div> 
        <div className={`w-full ${Expand ? "h-[calc(90vh-5.4rem)]" : "h-0"} transition-all p-3 duration-300 shadow-2xl bg-white flex flex-col justify-between items-center rounded-b-xl relative`}>
            <div className={`${Expand ? "opacity-100": "opacity-0"} h-full w-full px-5 py-3`}></div>
            <div className={`${Expand ? "opacity-100 delay-100": "opacity-0 delay-0"} transition-all duration-300 w-[50%] border-[3px] rounded-3xl h-20 p-3`}>
                <input
                 type="text"
                 placeholder="Ask anything about your Document"
                 className="border-none outline-none w-full h-full"
                 />
            </div>
        </div>
    </div>
    )
}

export default Chatbot