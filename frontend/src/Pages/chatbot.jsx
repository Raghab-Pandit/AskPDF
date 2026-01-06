import React from "react"

const Chatbot= () =>{
    return(
        <div className='bg-white min-h-screen w-full flex flex-col justify-between items-center p-3'>
            <h1 className="font-bold text-4xl">ChatPDF</h1>
            <div className="h-full px-5 py-3 border"></div>
            <div className="w-[50%] border-3 rounded-3xl h-20 p-3">
                <input
                 type="text"
                 placeholder="Ask anything about your Document"
                 className="border-none outline-none w-full h-full"
                 />
            </div>
        </div>
    )
}

export default Chatbot