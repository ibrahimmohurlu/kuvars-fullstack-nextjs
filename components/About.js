import {Grid} from "@mui/material";

export default function About() {

    return (
        <section id="about" className="relative md:max-h-screen">
            <Grid container spacing={1}>
                {/*heading*/}
                <Grid item xs={12}>
                    <div className="flex flex-col md:pt-6 p-4 md:p-8 rounded-2xl text-center">
                        <h1 className="text-xl md:text-4xl ">Hakkımızda</h1>
                    </div>
                </Grid>
                {/*About*/}
                <Grid item xs={5}>
                    <div className=" md:text-xl my-3 mx-4 rounded-xl">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos magnam neque odit
                            unde.
                            Consequatur ipsam itaque labore quia quis. Ab illo illum minus nam officia pariatur
                            reprehenderit voluptatibus voluptatum?
                        </div>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos magnam neque odit
                            unde.
                            Consequatur ipsam itaque labore quia quis. Ab illo illum minus nam officia pariatur
                            reprehenderit voluptatibus voluptatum?
                        </div>
                    </div>
                </Grid>
                {/*Photo section*/}
                <Grid item xs={7}>
                    <div className="relative w-full h-full ">
                        <div>
                            <img className="p-2 w-[320px] h-[320px]"
                                 src="/about-photo.jpg" alt=""/>
                        </div>
                        <img className=" mt-[-30%] p-2 float-right  w-[320px] h-[320px]"
                             src="/carousel-4.jpg" alt=""/>
                    </div>


                </Grid>
            </Grid>
        </section>
    )
}