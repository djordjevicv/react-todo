import colors from "../assets/colors";

function Footer({itemsCount, deleteAllItems}) {
    return (
        <>
            {
                !itemsCount ?
                    <p style={{color: colors.black}}
                        className="text-sm"
                    >
                        Congratulations! You've finished all of your tasks!
                    </p> :
                    <div className="w-full flex justify-between items-center">
                        <p className="m-0 text-base"> {itemsCount} tasks left </p>
                        <button className="p-2 text-base rounded-md"
                            style={{
                                fontFamily: 'inherit',
                                background: colors.purple,
                                color: colors.white,
                                border: 'none'
                            }}
                            onClick={() => deleteAllItems()}
                        >
                            Clear all
                        </button>
                    </div>
            }
        </>
    )
}

export default Footer;