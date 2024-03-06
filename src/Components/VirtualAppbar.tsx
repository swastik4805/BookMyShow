import { useEffect, useState } from "react"
import { FaStar } from "react-icons/fa";

export function VirtualAppbar({title,rating}:{title:string,rating: string}){
    const[showAppbar, setShowAppbar]=useState(false);

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>200){
                setShowAppbar(true);
                document.body.style.paddingTop = "40px";
            }
            else{
                setShowAppbar(false);
                document.body.style.paddingTop = "0";
            }
        }
        window.addEventListener("scroll",handleScroll);
        return()=>{
            window.removeEventListener("scroll",handleScroll)
        }
    },[]);

    return(
        <div className={`fixed top-0 w-full bg-gray-200 px-6 py-2 shadow-xl
        transition-opacity ${showAppbar?"opacity-200":"opacity-0 -top-full"}`}
        style={{ zIndex: showAppbar ? 10 : -1 }}>
        
        <div className="flex justify-between">
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
                <div className="bg-red-500 rounded-md px-8 py-3 text-sm font-semibold text-white cursor-pointer"
                onClick={()=>{
                    alert("Well this is just a dummy! We will surely notify you once we are able to do so....")
                }}>
                    Book tickets
                </div>
            </div>
        </div>
    </div>
    )
}