
import Layout from "../components/layout/Layout";
import DisplayCount from "../components/DisplayCount/DisplayCount";
import UpdateIncrementDecrement from "../components/Update-inc/UpdateIncrementDecrement";
import Buttons from "../components/buttons/Buttons"

import { useState } from "react";

function About(){
    let [count, setCount] = useState(0)
   const [incrementValue, setIncrementValue] = useState(10)
   const [decrementValue, setDecrementValue] = useState(5)
    function increnet(){
       setCount(count + incrementValue)
       
    }
    function decrenet(){
       setCount(count - decrementValue)
       
    }
    function headleIncrementChange(e){
      setIncrementValue(parseInt(e.target.value))
    }
    function headleDecrementChange(e){
      setDecrementValue(parseInt(e.target.value))
    }
    return(
   <Layout>
    <DisplayCount count={count} />
    <UpdateIncrementDecrement incrementValue={incrementValue} decrementValue={decrementValue}
    headleIncrementChange={headleIncrementChange}
    headleDecrementChange={headleDecrementChange}
    />
    <Buttons increnet={increnet} decrenet={decrenet} />
    
   </Layout>
    )
}

export default About;