import Head from "next/head"
export default function Layout({children,title, description}){
return(
<div>
<Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
    </Head>

<nav>{children}</nav>
<main>
    owo
</main>
<footer>uwu</footer>
</div>
)}


Layout.defaultProps = {
    title:"Next.js| mi sitio web",
    description: "mi sitio uwu"
}