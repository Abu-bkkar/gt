const InputGeoup = ( props)=>{
    const label = props.label;
    const type = props.type;
    return( <div style={{
            display:`flex`,
            flexDirection:`column`,
            gap:`0.25rem`,
            marginBottom:`1rem`
        }}>
            <label style={{
            fontFamily:`Arial`,
            fontSize:`1rem`,
            color:`#222`,
            fontWeight:`bold`

        }} htmlFor="name">{label}</label>
        <input type ={type} id="name" style={{
            padding:`0.30rem`,
            border:`1px solid #ddd`,
            borderRadius:`0.25rem`,
            outline:`none`,
            fontFamily:`Arial`,
            fontSize:`0.9rem`,
            color:`#666`
        }}/>
        </div>)
}

export default InputGeoup;