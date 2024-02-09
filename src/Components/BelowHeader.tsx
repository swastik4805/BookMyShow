import { NavLink } from "react-router-dom";

export function BelowHeader(){
    return(
        <div className="flex justify-between bg-gray-100 py-3">
            <div className={`flex justify-between`}>
                <div className="px-3 text-sm"><NavLink to="/">Home</NavLink> </div>
                <div className="px-3 text-sm"><NavLink to="/movies/popular">Popular</NavLink></div>
                <div className="px-3 text-sm"><NavLink to="/movies/top">Top</NavLink></div>
                <div className="px-3 text-sm"><NavLink to="/movies/upcoming">Upcoming</NavLink></div>
            </div>

            <div className="flex justify-between">
                <div className="px-3 text-sm">ListYourShow</div>
                <div className="px-3 text-sm">Corporates</div>
                <div className="px-3 text-sm">Offers</div>
                <div className="px-3 text-sm">Gift Cards</div>
            </div>
        </div>
    )
}