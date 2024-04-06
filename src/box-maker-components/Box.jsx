import "./Box.css"

const Box = ({color, width = 100, height = 100}) => {

    return (
        <div className="Box" style={{
                backgroundColor: color, 
                width: `${width}px`,
                height: `${height}px`
            }}>
        </div>
    )
}

export default Box;