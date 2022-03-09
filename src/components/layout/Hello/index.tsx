
import './styles.scss';
import Lottie from 'react-lottie';
import girl from '../../../assets/animations/81966-girl-listening-to-music.json';
import Sound , { ReactSoundProps }from "react-sound";
import { useState } from 'react';

const Hello = () => {

    const song = require('../../../assets/music/coldheart.mp3')

    const [status, setStatus] = useState<ReactSoundProps['playStatus']>('PLAYING');

    function togglePlayStatus() {
        setStatus(status => status === 'STOPPED' ? 'PLAYING' : 'STOPPED')
    }

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
            <Sound
                url={song}
                autoLoad={true}
                playStatus={status}
                playFromPosition={0}
            />
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
            
            <button className="button-music" onClick={(click) => togglePlayStatus()}>
                <Lottie 
                    options={defaultOptions}
                    height={400}
                    width={400}
                />
                {statusLabel(status)} MUSIC
            </button>
        </div>
    )
}

export {Hello} 
