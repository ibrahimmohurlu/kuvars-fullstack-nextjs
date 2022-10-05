import Image from "next/image";
import {Carousel} from "flowbite-react";

export default function Home() {

    return (<section className="">
            <div className="flex flex-col  items-center">
                <h1 className="mx-auto py-4 text-4xl">Kuvars Mühendislik</h1>
                <p className="px-auto py-4 text-2xl">Jeoloji Mühendisliği alanında her ihtiyacınız için buradayız.</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 items-center space-y-4 w-full h-96">
                <div className="w-full md:w-1/2 ">
                    <h2 className="text-center text-2xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium amet corporis, cumque dolorum earum exercitationem fugit id ipsam iste
                        molestias nemo perspiciatis quam quasi quisquam saepe suscipit, unde, vitae voluptate?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi consectetur debitis
                    </h2>
                </div>
                {/*{Carousel}*/}
                <div className="w-full h-64 md:w-1/2 sm:h-64 md:h-72 xl:h-80 2xl:h-96">
                    <Carousel slideInterval={2000}>
                        <img
                            className="object-scale-down"
                            src="/carousel-1.jpg"
                            alt="..."
                        />
                        <img
                            src="/carousel-2.jpg"
                            alt="..."
                        />
                        <img
                            src="/carousel-3.jpg"
                            alt="..."
                        />
                        <img
                            src="/carousel-4.jpg"
                            alt="..."
                        />
                        <img
                            src="/carousel-5.jpg"
                            alt="..."
                        />
                    </Carousel>
                </div>



            </div>

        </section>)
}