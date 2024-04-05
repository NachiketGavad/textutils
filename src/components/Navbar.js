import React from 'react'
import { Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/StringDivideUsers">{props.aboutText}</Link>
        </li>
      </ul>
        <div className={`navbar-nav form-check form-switch mt-2 bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input mx-2" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault">{props.togglebtn}</label>
      </div>
    </div>
  </div>
</nav>
  )
}
