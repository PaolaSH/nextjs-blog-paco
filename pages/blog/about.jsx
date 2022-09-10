import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
export default function Primer (){
return(
<div>
    <Head>
        <title>Mi primer post</title>
        <meta name="description" content="description del post"/>
    </Head>
<h1>mi primer next</h1>
<Image src="/img/maxresdefault.jpg"
width={500}
height={400}>    
</Image>
<br></br>
<Link href="/">
    <a>volver al inicio</a>
</Link>


</div>


)


}