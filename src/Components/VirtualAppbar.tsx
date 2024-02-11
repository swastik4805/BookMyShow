import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa";

export function VirtualAppbar({title,rating}){
    const[showAppbar, setShowAppbar]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>200){
                setShowAppbar(true);
            }
            else setShowAppbar(false);
        }
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[]);

    return(<div className={`fixed top-0 w-full bg-gray-200 px-6
    transition-opacity ${showAppbar?"opacity-200":"opacity-0 -top-full"}`}>
        
        <div className="flex justify-between shadow-xl">
            <div>
                <div className="text-xl font-bold">
                    {title}
                </div>
                <div className="flex">
                    <FaStar style={{color:'red', height:'22px'}}/>
                    <div className="pl-2 text-gray-500 font-bold">{rating}/10</div>
                </div>
            </div>
            <div className="p-2">
                <div className="bg-red-500 rounded-md px-8 py-3 text-sm font-semibold text-white">
                    Book tickets
                </div>
            </div>
        </div>
    </div>
    )
}