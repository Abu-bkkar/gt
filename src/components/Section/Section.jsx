

function section({ title , items}){
    const ItemArray = items.map((item)=> <li>{item}</li>)
    
    return(
    <section>
        <h3>{title}</h3>
        <ul>
           {ItemArray}
        </ul>
    </section>
     
    )
}
export default section;