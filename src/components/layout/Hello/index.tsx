
import './styles.scss';
import Lottie from 'react-lottie'
import girl from '../../../assets/animations/81966-girl-listening-to-music.json'

const Hello = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: girl,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="hello">
            <div className="about-card">
                <div className="hello-card">
                    <h2 className="title">Hello, I'm San</h2>
                    <p className="about-me">ABOUT ME</p>
                </div>
                <div className="content-card">
                    <p className="text-about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam saepe iusto labore? Dolorum nobis vitae aliquid sed, aperiam dignissimos sapiente voluptate numquam et sit. Magnam debitis rerum molestias architecto sed.
                    </p>
                </div>

            </div>
            <Lottie 
            options={defaultOptions}
            height={400}
            width={400}
            />
        </div>
    )
}

export {Hello} 
