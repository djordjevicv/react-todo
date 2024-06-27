import { useEffect, useState } from "react";
import InputForm from "./InputForm";
import ItemsList from "../components/ItemsList";
import colors from "../assets/colors";
import itemsListInitial from "../store/itemsListInitial";
import Footer from "../components/Footer";
import Scroll from "../components/Scroll";
import { HandleItemContext } from "../contexts/HandleItemContext";

function ToDo() {

    const [itemsList, setItemsList] = useState(() => {
        const initialItems = localStorage.getItem('itemsList');
        return !initialItems ? itemsListInitial : JSON.parse(initialItems);
    });

    useEffect(() => {
        localStorage.setItem('itemsList', JSON.stringify(itemsList))

        return () => {
            for (const key in localStorage) {
                if (!itemsList.map(item => item.id).includes(key) && key != 'itemsList')
                    localStorage.removeItem(key);
            }
        }
    }, [itemsList]);

    const addNewItem = (newItem) => {
        setItemsList((prevItemsList) => [...prevItemsList, { text: newItem, id: crypto.randomUUID() }]);
    }

    const handleItemDelete = (itemID) => {
        setItemsList((prevItemsList) => prevItemsList.filter((item) => item.id !== itemID));
    }

    const deleteAllItems = () => {
        setItemsList([]);
    }

    return (
        <div className="rounded-md p-4 text-center shadow-lg"
            style={{
                maxWidth: '380px',
                color: `${colors.black}`,
                backgroundColor: `${colors.white}`
            }}>
            <h1 className="text-3xl my-2">My Tasks</h1>
            <InputForm addNewItem={addNewItem} />
            <HandleItemContext.Provider value={{ handleItemDelete }}>
                <Scroll>
                    <ItemsList itemsList={itemsList}
                    />
                </Scroll>
            </HandleItemContext.Provider>
            <Footer itemsCount={itemsList.length}
                deleteAllItems={deleteAllItems}
            />
        </div>
    )
}

export default ToDo;