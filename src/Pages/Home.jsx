import Layout from "../components/layout/Layout";
import Section from "../components/Section/Section";

const Education = [
    `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quas alias expedita? Magni totam rerum numquam cupiditate voluptas! Nihil nesciunt dignissimos quis laborum minima quibusdam sed inventore temporibus eaque unde!`,
    `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quas alias expedita? Magni totam rerum numquam cupiditate voluptas! Nihil nesciunt dignissimos quis laborum minima quibusdam sed inventore temporibus eaque unde!`,
    `  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quas alias expedita? Magni totam rerum numquam cupiditate voluptas! Nihil nesciunt dignissimos quis laborum minima quibusdam sed inventore temporibus eaque unde!`

];
const Experices = [`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quas alias expedita? Magni totam rerum numquam cupiditate voluptas! Nihil nesciunt dignissimos quis laborum minima quibusdam sed inventore temporibus eaque unde!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quas alias expedita? Magni totam rerum numquam cupiditate voluptas! Nihil nesciunt dignissimos quis laborum minima quibusdam sed inventore temporibus eaque unde!`,
    `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quas alias expedita? Magni totam rerum numquam cupiditate voluptas! Nihil nesciunt dignissimos quis laborum minima quibusdam sed inventore temporibus eaque unde!`
   
]

function Home(){
    
    return(
   <Layout>
         <Section title='test section' items={Experices} />
         <Section title='two section' items={Education} />
 
   </Layout>
    )
}

export default Home;