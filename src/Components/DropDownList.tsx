
export function DropDownList(){
    // const [listStatus, setListStatus]=useState("hidden")
    return(
        <div className="flex">
            <div className="pr-2">
                <select className="text-gray-500 bg-white border rounded-md shadow-sm outline-none">
                    <option>Kolkata</option>
                    <option>Delhi-NCR</option>
                    <option>Noida</option>
                    <option>Bangalore</option>
                    <option>Hydrabad</option>
                    <option>Chandigarh</option>
                </select>
            </div>
        </div>
    )
}