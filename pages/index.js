import Head from "next/head"
import Image from "next/image"
export default function Home() {
  return (
       <div className="container mx-auto mt-6" >

       <button className="bg-purple-500 sm:bg-red-400 lg:bg-yellow-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded " >
Boton
       </button>
       <h1 className="mt-5 text-purple-500 text-5xl text-center">hola uwu</h1>
       <h2 className="uppercase">hola uwu</h2>
       <h4 className=" w-48 rounded-lg bg-purple-500 text-white text-center py-10 px-5 m-10">hola uwu</h4>
       
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full"  src="https://b-static.besthdwallpaper.com/genshin-impact-kamisato-ayato-premyslivy-tapeta-na-zed-2048x1536-91513_26.jpg" alt="genshin" />
         
         <div className="px-6 py-5">

            <div className="font-bold underline text-xl mb-2 text-center text-purple-600" >Ayato Kamisato</div>


                <p className=" text-blue-600 text-base">
                Si lanzas unas flores marchitas al fuego de un horno, el calor abrasador las imbuye con una última chispa de vitalidad y, por un efímero momento, brillan con más esplendor que el propio fuego. 
                Aunque fue una vida corta, en absoluto fue en vano.</p>

            </div>
            </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#genshin</span>
    <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#ayato</span>
    <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#history</span>
  </div>
</div>

        
       

      
  )
}
//max-w-sm altura maxima