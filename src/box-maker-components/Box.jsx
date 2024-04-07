import "./Box.css"

const Box = ({color, width = 100, height = 100, deleteBox, id}) => {

    const handleClick = (e) => {
        deleteBox(e.target.parentElement.id)
    }

    return (
        <div className="Box" id={id}>
            <div style={{
                backgroundColor: color, 
                width: `${width}px`,
                height: `${height}px`
            }}>
            </div>  
            <button onClick={handleClick}>X</button>
        </div>
        
    )
}

export default Box;