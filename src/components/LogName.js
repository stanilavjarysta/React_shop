const Color = (props) => {
    const color = "red"
    const bg = "backgroundColor:"+color

    return (
        <div>
            <h1 style={bg} >This comp name is {props.myName}</h1>

        </div>
    )
}
export default Color