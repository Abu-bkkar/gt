function Buttons({increnet,decrenet}){
    return(
        <div>
            <button onClick={increnet}>Increment</button>
            <button onClick={decrenet}>Decrement</button>
        </div>
    )
}

export default Buttons;