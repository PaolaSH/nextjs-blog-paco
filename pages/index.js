import Head from "next/head"
import Image from "next/image"
export default function Home() {
  return (
       <div className="container mx-auto mt-6" >

       <button className="bg-purple-500 sm:bg-red-400 lg:bg-yellow-500  hover:bg-purple-700 text-white font-bold py-2 px-4 rounded " >
        namur
       </button>
       <h1 className="mt-5 text-purple-500 text-5xl text-center"></h1>
       <h2 className="uppercase">El namur de mi vida</h2>
       <h4 className=" w-48 rounded-lg bg-purple-500 text-white text-center py-10 px-5 m-10">poke es tan guapo mi namur?</h4>
       
       <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full"  src="https://scontent-prg1-1.xx.fbcdn.net/v/t39.30808-6/309214449_578094374059341_2475737536532934781_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wtED_hLky4gAX_6lDui&_nc_ht=scontent-prg1-1.xx&oh=00_AT-PuyMFuJd0IbSYm-ey5FKQDD1va2C3Uj8jdI0TOMKFRQ&oe=6336176F" alt="genshin" />
         
         <div className="px-6 py-5">

            <div className="font-bold underline text-xl mb-2 text-center text-purple-600" >Francisco Barrios</div>


                <p className=" text-blue-600 text-base">
                Francisco Barrios es mi Namur es el namur mas namur que exista , me encantaria que mi namur supiera lo mucho
                que lo amo y se que aguanta todo el tiempo mis enojos y no es facil aguantarme pero mi namur lo hace y quiero que sepa 
                que trato de mejor un poco cada dia para que mis enojos no sean tan enojones, y que esta paguina seria la wikipedia si explicara lo tan perfecto que es mi namur
                y aunque piense que no me hace feliz, el no sabe que yo me siento como la chica mas afortunada 
                de todo el universo por haberte encontrado te amo...
                pd: joder tu voz me mata uwu </p>

            </div>
            </div>
  <div className="px-6 py-4">
    <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#dime</span>
    <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">#te quitare la inocencia</span>
    <span className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker">#y pensaras todas las noches en mi</span>
  </div>
</div>

        
       

      
  )
}
//max-w-sm altura maxima