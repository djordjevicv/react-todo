function Scroll(props){
    return(
        <div style={{
            overflowY: 'scroll',
            maxHeight: '300px'
        }}
            className="my-3"
        >
            { props.children }
        </div>
    )
}

export default Scroll;