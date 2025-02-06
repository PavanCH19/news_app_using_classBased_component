import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Nav(props) {

    return (
        <>

            <nav className={`navbar navbar-expand-lg `} style={props.mode}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={props.mode}><h3>{props.title}</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={props.mode} >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={props.mode}>{props.about}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={props.mode} >
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={props.mode} >
                                    <li><Link className="dropdown-item" to="#" style={props.mode}>Action</Link></li>
                                    <li><Link className="dropdown-item" to="#" style={props.mode}>Another action</Link></li>
                                    <li><hr className="dropdown-divider" style={props.mode} /></li>
                                    <li><Link className="dropdown-item" to="#" style={props.mode} >Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="#" tabIndex="-1" aria-disabled="true" style={props.mode}>Disabled</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable darkMode</label>
                    </div>
                </div>

            </nav>

        </>
    );
}

Nav.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired,
    mode: PropTypes.object.isRequired,

};

export default Nav;