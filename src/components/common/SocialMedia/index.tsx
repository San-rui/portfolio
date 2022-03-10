import { Link } from 'react-router-dom';
import github from '../../../assets/icons/github.png';
import instagram from '../../../assets/icons/instagram.png';
import linkedin from '../../../assets/icons/linkedin.png';
import twitter from '../../../assets/icons/twitter.png'

import './styles.scss';

const SocialMedia = () => {
  return (
    <div>
      <div className="social-media">
        <ul>
          <li className="li-link">
            <Link to={''} onClick={() => window.open("https://github.com/San-rui")} >
              <img className="img-logo" src={github} alt=""/>
            </Link>
          </li>
          <li className="li-link">
            <Link to={''} onClick={() => window.open("https://www.linkedin.com/in/sandra-noelia-ruidiaz/")}>
              <img className="img-logo" src={linkedin} alt=""/>
            </Link>
          </li>
          <li className="li-link">
            <Link to={''} onClick={() => window.open("https://www.instagram.com/san_india1/?hl=en")}>
              <img className="img-logo" src={instagram} alt=""/>
            </Link>
          </li>
          <li className="li-link">
            <Link to={''} onClick={() => window.open("https://twitter.com/San_Ruidiaz")}>
              <img className="img-logo" src={twitter} alt=""/>
            </Link>
          </li>
        </ul>
        <div className="line"></div>
      </div>
      <div className="email">
        
        <Link
            to='#'
            className="link-email"
            onClick={(e) => {
                window.location.href = 'mailto:sruidiaz@hotmail.com';
                e.preventDefault();
            }}
        >
            sruidiaz@hotmail.com
        </Link>
        <div className="line"></div>
      </div>
    </div>
    
  )
}

export {SocialMedia} 
