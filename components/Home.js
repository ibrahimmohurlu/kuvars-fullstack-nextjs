import Image from "next/image";
import {Card, Carousel} from "flowbite-react";

export default function Home() {

    return (<section className="overflow-auto">
            <div className="flex flex-col pt-20 md:pt-0 items-center  rounded-2xl">
                <img src="/kuvars-logo-dark.png" alt=""/>
                <p className="px-auto py-4 text-2xl text-center font-semibold">Jeoloji Mühendisliği alanında her ihtiyacınız için buradayız.</p>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4 items-center space-y-4 w-full ">
                <div className="w-full  px-4 hover:default md:w-1/2 ">
                    <Card href="#" >
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Jeoloji Mühendisliği Alanında Kaliteli Hizmet ve Danışmanlık
                        </h1>
                            <div className="font-normal sm:text-sm md:text-2xl text-darkerGrayish dark:text-gray-400">
                                <ul>
                                    <li>Zemin Etüdü</li>
                                    <li>İmar Planına Esas Jeoteknik Etüd</li>
                                    <li>Yer Altı Suyu Arama - Kullanma Ruhsatı</li>
                                    <li>Sondaj Hizmetleri</li>
                                    <li>Presiyometre Deneyi</li>
                                    <li>Danışmanlık</li>
                                </ul>
                                <p className="text-center font-semibold">A. Agah Pektezel</p>
                                <p className="text-center text-lg">Jeoloji Mühendisi</p>
                                <p className="text-center text-lg">+90 (541) 320 92 52</p>
                            </div>
                    </Card>
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