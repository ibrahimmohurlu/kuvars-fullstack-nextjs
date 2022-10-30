import {Tabs} from "flowbite-react";

export default function About() {
    return (
        <section id="about" className="relative md:max-h-screen">
            {/*heading*/}
            <div className="flex flex-col md:pt-6 p-8 md:p-12  border-2 border-blue-700 rounded-2xl text-center">
                <h1 className="text-xl md:text-4xl ">Hakkımızda</h1>
            </div>
            {/*About*/}
            <div className="w-1/3 md:text-xl my-3 mx-4 rounded-xl">
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos magnam neque odit unde. Consequatur ipsam itaque labore quia quis. Ab illo illum minus nam officia pariatur reprehenderit voluptatibus voluptatum?
                </article>
                <br/>
                <article>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae cupiditate eius excepturi, incidunt iusto, natus nisi placeat possimus quas quasi quod reprehenderit, suscipit tempora totam vitae voluptatem. Cum, dolorem.
                </article>
            </div>
        </section>
    )
}