import { Nav, Hello, Knowledge} from '../../components/layout';
import Particles from "react-tsparticles";
import { SocialMedia } from '../../components/common';

import './styles.scss';

const Home = () => {
    return (
        <div className="home">
            <Particles
                id="tsparticles"
                options={{
                    background: {
                        color: {
                        value: "001219",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                        },
                        modes: {
                        bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                        },
                    },
                    particles: {
                        color: {
                            value: [
                                "#f891a3",
                                "#74e9e5",
                                "#a8f5bf",
                                "#FBE7C6",
                                "#f7b695",
                                "#FFAEE5",
                                "#A0C6E7",
                                "#A0E7C2",
                                "#B4F8EA",
                                "#C2F8B4",
                                "#F4FBC6",
                                "#FBCDC6"
                            ],
                        },
                        // links: {
                        // color: "#cacaca",
                        // distance: 150,
                        // enable: true,
                        // opacity: 0.5,
                        // width: 1,
                        // },//esto hace las lineas q uno los elementos
                        collisions: {
                        enable: true,
                        },
                        move: {
                        direction: "none",
                        enable: true,
                        outMode: "destroy",
                        random: false,
                        speed: 1,
                        straight: false,
                        },
                        number: {
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                        value: 80,
                        },
                        opacity: {
                        value: 0.5,
                        },
                        shape: {
                        type:  ["circle",
                        "line",
                        "edge",
                        "triangle",
                        "polygon",
                        "star"],
                        },
                        size: {
                        random: true,
                        value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />

            <Nav/>
            <SocialMedia/>
            <Hello/>
            <Knowledge/>
        </div>
    )
}

export {Home} 