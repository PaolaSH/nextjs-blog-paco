import { data } from "autoprefixer"
import Layout from "../../components/Layout"
import Image from "next/image"
export default function Segundo({data}){
return(
    <Layout>
    <h1>hola mundo</h1>
    {
     data.map(({id, title, thumbnail}) => (
        <div className="mt-5" key={id}>
        <h3 className="text-purple-500">{title}</h3>
        <h4>{id}</h4>
         <img src={ thumbnail}/>     


        </div>
     ))

    }
    </Layout>
)}

export async function getStaticProps (){
try{
    const res = await fetch ("https://www.freetogame.com/api/games")
    const data= await res.json()
    return{

    props:{
        data
                    
    }
    }
} catch (error){
    console.error(error)
}
}