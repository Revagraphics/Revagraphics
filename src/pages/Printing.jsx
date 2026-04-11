import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Printing = () =>{

    return(
        <div className="bg-#fff min-h-screen">
            <Navbar/>
            <div className="h-screen w-full bg-cyan-500 flex items-center justify-center">
                <h1 className="text-5xl font-bold   ">Printing</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Printing;