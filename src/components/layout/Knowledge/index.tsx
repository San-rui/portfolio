import { RiHtml5Line, RiCss3Line, RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript, IoLogoSass } from "react-icons/io";
import { SiMaterialui, SiBootstrap, SiTypescript, SiRedux } from "react-icons/si";


import './styles.scss';
import { useEffect, useState } from "react";

const Knowledge = () => {

    const [movement, setMovement]= useState(false);

    useEffect ( ()=>{
        const moveBlock=()=>{
            console.log(window.scrollY)
            if(window.scrollY >= 350){
                setMovement(true);
            } else{
                setMovement(false);
            }
        }
    
        window.addEventListener('scroll', moveBlock);

        return()=>{
            window.removeEventListener('scroll', moveBlock);
        }
    }, [movement])

    return (
        <div className={movement ? 'knowledge knowledge-scroll': 'knowledge'}>
            <div className="knowledge-title-container">
                <h2 className="knowledge-title">Knowledge</h2>
                <div className="knowledge-line"></div>
            </div>
            <div className="container">
                <p className="text-knowledge">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit qui sit nulla consectetur tempora ullam, delectus commodi! Natus repudiandae sunt dolorum soluta. Ipsam, vitae totam nihil ipsa magnam repellendus harum.
                </p>
                <div className="container-knowledge">
                    <div className="logo">
                        <RiHtml5Line className="icon"/>
                    </div>
                    <div className="logo">
                        <RiCss3Line className="icon"/>
                    </div>
                    <div className="logo">
                        <IoLogoJavascript className="icon"/>
                    </div>
                    <div className="logo">
                        <IoLogoSass className="icon"/>
                    </div>
                    <div className="logo">
                        <SiMaterialui className="icon"/>
                    </div>
                    <div className="logo">
                        <SiBootstrap className="icon"/>
                    </div>
                    <div className="logo">
                        <SiTypescript className="icon"/>
                    </div>
                    <div className="logo">
                        <RiReactjsLine className="icon"/>
                    </div>
                    <div className="logo">
                        <SiRedux className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Knowledge}