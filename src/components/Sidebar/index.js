import './index.scss'
import LogoS1 from '../../assets/images/logo-s1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faMedium,


} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS1} alt="Logo" />

      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#121217" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#121217" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#121217" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="project-link"
          to="/project"
        >
          <FontAwesomeIcon icon={faProjectDiagram} />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/surya-m-b882101bb/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/surya196"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@surya.sh"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar
