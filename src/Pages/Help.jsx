import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
    


function Help(){
  const [ name, setName ] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setName('MD Abu-bkker Siddik');
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

    return(
  <Layout>
    <h1>Hello {name ? name : 'Guest'}, I am Help</h1>
   </Layout>
    )
}

export default Help;