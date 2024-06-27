import Item from "../containers/Item";

function ItemsList({itemsList}){

    return(
        <div className="w-full mt-3 mb-1 flex flex-col justify-center items-center rounded-md">
            {
                itemsList.map( (item) => 
                    <Item key={item.id}
                        text={item.text}
                        id={item.id}
                    />
                )
            }
        </div>
    )
}

export default ItemsList;