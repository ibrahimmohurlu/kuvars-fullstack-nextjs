import React from "react";
import Image from "next/image";

export default function Nav() {
    const menuRef=React.createRef();
    const menuBtn=React.createRef();
    const toggleMobileMenu=()=>{
        menuRef.current.classList.toggle('hidden')
        menuRef.current.classList.toggle('navbar-open')
        menuBtn.current.classList.toggle('open')
    }
    return (
        <nav>
            {/* navbar */}
            <div className="h-full hidden md:block w-60 bg-darkerGrayish text-white fixed overflow-auto "
            id="menu"
            ref={menuRef}
            >
                <div className=" mt-6 py-12 px-2">
                    <Image width={640} height={163} src="/kuvars-logo.png" alt=""/>
                </div>
                <div className="w-full min-w-full text-left font-bold text-xl">
                    <a className="nav-button" href="#">Anasayfa</a>
                    <a className="nav-button" href="#about">Hakkımızda</a>
                    <a className="nav-button" href="#">Projelerimiz</a>
                    <a className="nav-button" href="#">İletişim</a>
                </div>

            </div>

            {/* mobile navbar */}
            <div className="md:hidden">
                <div className="w-full h-auto flex fixed bg-stone-700 p-4">
                    <button
                        id="menu-btn"
                        ref={menuBtn}
                        className="block place-self-center  hamburger md:hidden focus:outline-none my-2"
                        onClick={toggleMobileMenu}
                    >
                        <span className="hamburger-top"></span>
                        <span className="hamburger-middle"></span>
                        <span className="hamburger-bottom"></span>
                    </button>
                    <h3 className="text-white text-2xl pl-4">Kuvars Mühendislik</h3>
                </div>


            </div>


        </nav>

    );


}