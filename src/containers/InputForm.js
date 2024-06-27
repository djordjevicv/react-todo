import { useState } from 'react';
import colors from '../assets/colors'

function InputForm({addNewItem}){

    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!newItem)
            return;

        addNewItem(newItem);

        setNewItem('');
    }

    return(
        <form className="w-full"
            onSubmit={handleSubmit}
        >
            <div className="w-full flex justify-center items-center">
                <input
                    placeholder="New Item goes here..."
                    type="text"
                    id="ItemInput"
                    maxLength={20}
                    value={newItem}
                    className="p-2 mr-3 rounded-md"
                    style={{
                        font: 'inherit',
                        border: `1px solid ${colors.black}`,
                        background: `${colors.white}`
                    }}
                    onChange={(event) => {
                        setNewItem(event.target.value);
                    }}
                />
                <button className="p-2 px-3 rounded-md"
                    style={{
                        font:'inherit',
                        color: '#f6f6f6',
                        background: `${colors.purple}`,
                        border: 'none'
                    }}
                >
                    Add
                </button>
            </div>
        </form>
    )
}

export default InputForm;