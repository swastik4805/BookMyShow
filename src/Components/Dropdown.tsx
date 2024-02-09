
export function DropDown(){
    // const [listStatus, setListStatus]=useState("hidden")
    return(
        <div className="flex">
            <div className="relative w-16 lg:max-w-sm">
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>India</option>
                    <option>UAE</option>
                </select>
            </div>
            <div className="relative w-20 lg:max-w-sm">
                <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                    <option>English</option>
                    <option>Italian</option>
                    <option>Polish</option>
                    <option>Cestina</option>
                </select>
            </div>
        </div>
    )
}