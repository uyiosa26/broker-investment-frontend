/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export default function Header(props) {

    const pageDsc = props.login;

    return (
        
        <>
            <header id="topnav" className="sticky defaultscroll">
                <div className="container">

                    <div>
                        <Link className="logo" to="/">
                            <img src="https://valuetrades.online/temp/images/value.png" height="35" className="mr-2" />
                        </Link>
                    </div>
                    <div className="buy-button">

                        <Link to="/login" className="mr-3 btn btn-primary login-btn-success">Login</Link>
                        <Link to="/register" className="btn btn-primary login-btn-success">Get Started</Link>
                        
                    </div>

                    <div className="menu-extras">
                        <div className="menu-item">

                            <a className="navbar-toggle">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>

                        </div>
                    </div>

                    <div id="navigation">

                        <ul className="navigation-menu">

                            <li><a href="https://valuetrades.online/about">About us</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="https://valuetrades.online/faq">Faq</a></li>
                            <li className="last-elements"><a href="https://valuetrades.online/contact">Contact</a></li>

                        </ul>


                        <div className="buy-menu-btn d-none">
                            
                            {pageDsc ? <Link to="/register" className="btn btn-primary login-btn-success">Get Started</Link> : <Link to="/login" className="btn btn-primary login-btn-success">Login</Link>}

                        </div>

                    </div>

                </div>

            </header>
        </>
    )
}