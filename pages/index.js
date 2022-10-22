import Head from 'next/head'
import Image from 'next/image'
import Nav from "../components/Nav";
import Home from "../components/Home";
import About from "../components/About";

export default function Index() {
    return (

        <div>
            <Head>
                <title>Kuvars Mühendislik</title>
                <meta name="kuvars" content="Kuvars Mühendislik"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="">
                <Home/>
                <About/>
            </main>

        </div>
    )
}
