import { FC } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss'

const Nav: FC = () => {
    return (
        <div className='nav'>
            <p className='sn'>SN</p>
            <ul className="list">
                <li>
                    <Link to={''} className="link">About me</Link>
                </li>
                <li>
                    <Link to={''} className="link">Knowledge</Link>
                </li>
                <li>
                    <Link to={''} className="link">Projects</Link>
                </li>
                <li>
                    <Link to={''} className="link">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export {Nav}


