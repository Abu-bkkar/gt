

function UpdateIncrementDecrement({incrementValue, decrementValue, headleIncrementChange, headleDecrementChange}){
    return(
        <div>
            <label>Increment</label>
            <input type="number" value={incrementValue} onChange={headleIncrementChange}/>
            <label>Decrement</label>
            <input type="number" value={decrementValue } onChange={headleDecrementChange} />
        </div>
    )
}



export default UpdateIncrementDecrement;