import { useState } from "react";

function DropdownMenu(props){
    const { dropdownItems, filterHandler } = props;

    return (
        // absolute
        <ul className="background-box overflow-hidden absolute right-0 top-12 w-max grid grid-cols-2">
            {   
                dropdownItems.map((item, index) => {
                    return (
                        <li key={`dropdown-${index}`} className="flex">
                            <a className="dropdown-btn w-full inline-block text-center" onClick={() => filterHandler(item)}>{item}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

function Dropdown(props){
    const { dropdownText, dropdownItems, filterHandler } = props;

    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    
    return (
        <div className="z-20 mx-3 mt-3 relative">
            <div>
                <a className="background-box link-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                    {dropdownText}
                </a>
            </div>
            { dropdownOpen && <DropdownMenu filterHandler={filterHandler} dropdownItems={dropdownItems} /> }
        </div>
    )
}

export default Dropdown;