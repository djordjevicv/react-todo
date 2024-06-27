import { useContext, useEffect, useState } from "react";
import colors from "../assets/colors";
import { HandleItemContext } from "../contexts/HandleItemContext";

function Item({id, text}){

    const {handleItemDelete} = useContext(HandleItemContext);

    const [isChecked, setIsChecked] = useState(() => {
        const initialValue = localStorage.getItem(id);
        return !initialValue ? false : JSON.parse(initialValue);
    });

    useEffect(() => localStorage.setItem(id, JSON.stringify(isChecked)), [isChecked]);

    const handleItemCheck = () => {
        setIsChecked((prevIsChecked) => !prevIsChecked);
    }

    return (
        <div className="w-full mb-3 p-2 flex justify-between items-center shadow-md rounded-md"
            style={{
                background: `${colors.gray}`
            }}
        >
            <div className="flex items-center"
                style={{
                    gap: '10px'
                }}
            >
                <input type="checkbox"
                    onChange={() => handleItemCheck()}
                    checked={isChecked}
                />
                <p style={{
                    textDecoration: isChecked ? 'line-through' : 'none',
                    color: isChecked ? '#999' : colors.black
                }}
                >
                    {text}
                </p>
            </div>
            <button className="px-2 py-1 rounded-md"
                style={{
                    fontFamily: 'inherit',
                    color: `${colors.white}`,
                    background: `${colors.red}`
                }}
                onClick={() => handleItemDelete(id)}
            >
                Delete
            </button>
        </div>
    )
}

export default Item;