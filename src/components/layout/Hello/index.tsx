import Lottie from 'react-lottie';
import girl from '../../../assets/animations/81966-girl-listening-to-music.json';
import Sound , { ReactSoundProps }from "react-sound";
import { useState } from 'react';

import './styles.scss';

const Hello = () => {

    const song = require('../../../assets/music/coldheart.mp3')

    const [status, setStatus] = useState<ReactSoundProps['playStatus']>('PLAYING');
    const [animation, setAnimation] = useState(true);

    function togglePlayStatus() {
        setStatus(status => status === 'STOPPED' ? 'PLAYING' : 'STOPPED');
        setAnimation(!animation)
    }

    const size = window.innerWidth >= 720? '38vw': '25rem';

    console.log(size)

    function statusLabel(status: ReactSoundProps['playStatus']): string {
        switch(status) {
        case 'STOPPED':
            return 'PLAY';
        case 'PLAYING':
            return 'STOP';
        default:
            return 'STOP';
        }
    }

    return (
        <div className="hello">
            <Sound
                url={song}
                autoLoad={true}
                playStatus={status}
                playFromPosition={0}
            />

            <button className="button-music" onClick={(click) => togglePlayStatus()}>
                <Lottie
                    options={{
                        loop: animation,
                        autoplay: animation,
                        animationData: girl,
                        rendererSettings: {
                        preserveAspectRatio: "xMidYMid slice"
                        }
                    }}
                    height={size}
                    width={size}
                />
                {statusLabel(status)} MUSIC
            </button>

            <div className="about-card">
                <div className="hello-card">
                    <h2 className="title">Hi, I'm San</h2>
                    <p className="about-me">ABOUT ME</p>
                </div>
                <div className="content-card">
                    <p className="text-about">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam saepe iusto labore? Dolorum nobis vitae aliquid sed, aperiam dignissimos sapiente voluptate numquam et sit. Magnam debitis rerum molestias architecto sed.
                    </p>
                </div>

            </div>
            
            
        </div>
    )
}

export {Hello} 
