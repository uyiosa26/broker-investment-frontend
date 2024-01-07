import { Link, useNavigate } from "react-router-dom";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { useEffect } from "react";

export default function Home() {

    const navigate = useNavigate()

    const auth = localStorage.getItem("auth")

    useEffect(()=> {
        if(auth) return navigate("/dashboard")
    })

    return (
        <>  
            <>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="csrf-token" content="5afAv7w3xU1kzTYm1HcRaxUhndTvtCtjUq87rcZr" />
                <title>Value Trades | Welcome to Value Trades</title>
                <meta name="description" content="We are online" />
                {/* Google / Search Engine Tags */}
                <meta itemProp="name" content="Value Trades - Welcome to Value Trades" />
                <meta itemProp="description" content="We are online" />
                <meta
                    itemProp="image"
                    content="https://valuetrades.online/temp/images/meta.png"
                />
                <link
                    rel="icon"
                    href="https://valuetrades.online/storage/app/public/photos/LgdRs2mNck5LrxS9AaN9aIhtaLKfzoxGSswCqiv0.ico"
                    type="image/png"
                />
                <link
                    href="https://valuetrades.online/temp/css/bootstrap.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
                {/* Icons */}
                <link
                    href="https://valuetrades.online/temp/css/materialdesignicons.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
                {/* Magnific */}
                <link rel="stylesheet" href="https://valuetrades.online/temp/css/line.css" />
                <link
                    href="https://valuetrades.online/temp/css/flexslider.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://valuetrades.online/temp/css/magnific-popup.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css')}}"
                />
                {/* Slider */}
                <link
                    rel="stylesheet"
                    href="https://valuetrades.online/temp/css/owl.carousel.min.css"
                />
                <link
                    rel="stylesheet"
                    href="https://valuetrades.online/temp/css/owl.theme.default.min.css"
                />
                {/* Main Css */}
                <link
                    href="https://valuetrades.online/temp/css/style.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.css" integrity="sha512-/bZeHtNhCNHsuODhywlz53PIfvrJbAmm7MUXWle/f8ro40mVNkPLz0I5VdiYyV030zepbBdMIty0Z3PRwjnfmg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                {/*Start of Tawk.to Script*/}
                {/* Navbar STart */}
                <header id="topnav" className="sticky defaultscroll">
                    <div className="container">
                        {/* Logo container*/}
                        <div>
                            <Link className="logo" to="/">
                                <img
                                    src="https://valuetrades.online/temp/images/value.png"
                                    height={35}
                                    alt=""
                                    className="mr-2"
                                />
                            </Link>
                        </div>
                        <div className="buy-button">
                            <Link to="/login" className="mr-3 btn btn-primary login-btn-success">
                                login
                            </Link>
                            <Link to="/register" className="btn btn-primary login-btn-success ">
                                Get Started
                            </Link>
                        </div>
                        {/*end login button*/}
                        {/* End Logo container*/}
                        <div className="menu-extras">
                            <div className="menu-item">
                                {/* Mobile menu toggle*/}
                                <a className="navbar-toggle">
                                    <div className="lines">
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                </a>
                                {/* End mobile menu toggle*/}
                            </div>
                        </div>
                        <div id="navigation">
                            {/* Navigation Menu*/}
                            <ul className="navigation-menu">
                                <li>
                                    <Link to="/about">About us</Link>
                                </li>
                                <li>
                                    <Link to="#pricing">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/faq">Faq</Link>
                                </li>
                                <li className="last-elements">
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                            {/*end navigation menu*/}
                            <div className="buy-menu-btn d-none">
                                <Link
                                    to="/login"
                                    className="btn btn-success"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="btn btn-success"
                                >
                                    Get Started
                                </Link>
                            </div>
                            {/*end login button*/}
                        </div>
                        {/*end navigation*/}
                    </div>
                    {/*end container*/}
                </header>
                {/*end header*/}
                {/* Navbar End */}
                {/* Hero Start */}
                <section className="bg-half-170 bg-soft-primary d-table w-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-7">
                                <div className="mt-4 title-heading">
                                    <div
                                        className="shadow alert alert-primary-light alert-pills "
                                        role="alert"
                                    >
                                        <span className="content ">Trade Invest stock, and Bond</span>
                                    </div>
                                    <h1 className="mb-3 heading">
                                        The Better Way to Trade &amp; Invest
                                    </h1>
                                    <p className="para-desck text-dark">
                                        Value Trade helps over 2 million customers achieve their financial
                                        goals by helping them trade and invest with ease
                                    </p>
                                    <div className="mt-4">
                                        <Link
                                            to="/register"
                                            className="pt-3 pb-3 pl-4 pr-4 btn btn-primary"
                                        >
                                            Create Free Account
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="pt-2 mt-4 col-lg-6 col-md-5 mt-sm-0 pt-sm-0">
                                <div className="position-relative">
                                    <img
                                        src="https://valuetrades.online/storage/app/public/photos/eQZW9KTA66MfDXmmsM7VzwfBuleCSRBpoyjaivei.jpg"
                                        className="mx-auto roundedd img-fluid d-block"
                                        alt=""
                                    />
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                </section>
                {/*end section*/}
                {/* Hero End */}
                {/* TradingView Widget BEGIN */}
                <div
                    style={{
                        height: 62,
                        backgroundColor: "#FFFFFF",
                        overflow: "hidden",
                        boxSizing: "border-box",
                        border: "1px solid #FFFFFF",
                        borderRadius: 4,
                        textAlign: "right",
                        lineHeight: 14,
                        blockSize: 62,
                        fontSize: 12,
                        fontFeatureSettings: "normal",
                        textSizeAdjust: "100%",
                        padding: 0,
                        margin: 0,
                        width: "100%"
                    }}
                >
                    {/* <div style={{ height: 40, padding: 0, margin: 0, width: "100%" }}>
                        <iframe
                            src="https://widget.coinlib.io/widget?type=horizontal_v2&theme=light&pref_coin_id=1505&invert_hover="
                            width="100%"
                            height="36px"
                            scrolling="auto"
                            marginWidth={0}
                            marginHeight={0}
                            frameBorder={0}
                            border={0}
                            style={{ border: 0, margin: 0, padding: 0 }}
                        />
                    </div> */}
                    <div
                        style={{
                            color: "#FFFFFF",
                            lineHeight: 14,
                            fontWeight: 400,
                            fontSize: 11,
                            boxSizing: "border-box",
                            padding: "2px 6px",
                            width: "100%",
                            fontFamily: "Verdana, Tahoma, Arial, sans-serif"
                        }}
                    ></div>
                </div>
                {/* TradingView Widget END */}
                {/* Security Section Start */}
                <section className="overflow-hidden section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="text-center col-12">
                                <div className="pb-2 mb-4 section-title">
                                    <h4 className="mb-4 title">Security Comes First</h4>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                        <div className="row">
                            <div className="pt-2 mt-4 col-md-6 col-12">
                                <div className="text-center border-0 rounded card">
                                    <div className="card-body">
                                        <div className="p-3 shadow bg-soft-primary roundedd d-inline-block">
                                            <img
                                                src="https://valuetrades.online/temp/images/icon/key.svg"
                                                className="avatar avatar-small"
                                                alt=""
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h5>
                                                <a href="javascript:void(0)" className="text-dark">
                                                    Security
                                                </a>
                                            </h5>
                                            <p className="mt-3 mb-0 text-muted">
                                                Value Trade uses the highest levels of Internet Security, and
                                                it is secured by 256 bits SSL security encryption to ensure
                                                that your information is completely protected from fraud.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                            <div className="pt-2 mt-4 col-md-6 col-12">
                                <div className="text-center border-0 rounded card">
                                    <div className="card-body">
                                        <div className="p-3 shadow bg-soft-primary roundedd d-inline-block">
                                            <img
                                                src="https://valuetrades.online/temp/images/icon/locked.svg"
                                                className="avatar avatar-small"
                                                alt=""
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <h5>
                                                <a href="javascript:void(0)" className="text-dark">
                                                    Two Factor Auth
                                                </a>
                                            </h5>
                                            <p className="mt-3 mb-0 text-muted">
                                                Two-factor authentication (2FA) by default on all Value Trade
                                                accounts, to securely protect you from unauthorised access and
                                                impersonation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                </section>
                {/* End Security Section Start */}
                {/* Features Section Start */}
                <section className="overflow-hidden section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="text-center col-lg-7 col-md-7">
                                <div className="pb-2 mb-4 section-title">
                                    <h4 className="mb-4 title "> Explore Our Services</h4>
                                    <p className="mx-auto mb-0 text-muted para-desc">
                                        It’s our mission to provide you with a delightful and a successful
                                        trading experience!
                                    </p>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                        {/*end col*/}
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-8 col-md-8">
                                <div className="pt-2 mt-4 row">
                                    <div className="col-md-6 col-12">
                                        <div className="pt-4 pb-4 media features">
                                            <div className="mt-2 mr-3 text-center icon rounded-circle text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-activity fea icon-ex-md text-primary"
                                                >
                                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="title"> Powerful Trading Platforms</h4>
                                                <p className="mb-0 text-muted para">
                                                    Value Trade offers multiple platform options to cover the
                                                    needs of each type of trader and investors .
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-md-6 col-12">
                                        <div className="pt-4 pb-4 media features">
                                            <div className="mt-2 mr-3 text-center icon rounded-circle text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-credit-card fea icon-ex-md text-primary"
                                                >
                                                    <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
                                                    <line x1={1} y1={10} x2={23} y2={10} />
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="title">High leverage</h4>
                                                <p className="mb-0 text-muted para">
                                                    Chance to magnify your investment and really win big with
                                                    super-low spreads to further up your profits
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-md-6 col-12">
                                        <div className="pt-4 pb-4 media features">
                                            <div className="mt-2 mr-3 text-center icon rounded-circle text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-zap fea icon-ex-md text-primary"
                                                >
                                                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="title">Fast execution</h4>
                                                <p className="mb-0 text-muted para">
                                                    Super-fast trading software, so you never suffer slippage.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-md-6 col-12">
                                        <div className="pt-4 pb-4 media features">
                                            <div className="mt-2 mr-3 text-center icon rounded-circle text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-shield fea icon-ex-md text-primary"
                                                >
                                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="title">Ultimate Security</h4>
                                                <p className="mb-0 text-muted para">
                                                    With advanced security systems, we keep your account always
                                                    protected.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                    <div className="col-md-6 col-12">
                                        <div className="pt-4 pb-4 media features">
                                            <div className="mt-2 mr-3 text-center icon rounded-circle text-primary">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="feather feather-message-circle fea icon-ex-md text-primary"
                                                >
                                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                                </svg>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="title">24/7 live chat Support</h4>
                                                <p className="mb-0 text-muted para">
                                                    Connect with our 24/7 support and Market Analyst on-demand.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                            </div>
                            {/*end col*/}
                            <div className="pt-2 mt-4 text-center col-lg-4 col-md-4 col-12 text-md-right">
                                <img
                                    src="https://valuetrades.online/temp/images/app/phone.png"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end row*/}
                    {/*end container*/}
                </section>
                {/* End Features Section Start */}
                {/* INv Section Start */}
                <section className="overflow-hidden section bg-soft-primary">
                    <div className="container mt-100 mt-60 ">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <img
                                    src="https://valuetrades.online/temp/images/app/laptop.png"
                                    className="img-fluid "
                                    alt=""
                                />
                            </div>
                            {/*end col*/}
                            <div className="pt-2 mt-4 col-lg-6 col-md-6 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-5">
                                    <h4 className="mb-4 title">
                                        Always on the go? Mobile trading is easier than ever with Value
                                        Trade!
                                    </h4>
                                    <p className="text-muted">
                                        Get your hands on our customized Trading Platform with the comfort
                                        of freely trading on the move, to experience truly liberating
                                        trading sessions.
                                    </p>
                                    <Link
                                        to="https://valuetrades.online/about"
                                        className="mt-3 h6 text-primary"
                                    >
                                        Find Out More <i className="mdi mdi-chevron-right" />
                                    </Link>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                </section>
                {/* INv Section Start */}
                {/* Pricing Section Start */}
                <section className="mt-4 overflow-hidden section" id="pricing">
                    <div className="container mt-100 mt-60">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="pb-2 mb-4 text-center section-title">
                                    <h4 className="mb-4 title">
                                        <span className="text-primary">Our Investment Packages</span>
                                    </h4>
                                    <p className="mx-auto mb-0 para-desc text-muted">
                                        Choose how you want to invest with us
                                    </p>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                        <div className="row">
                            <div className="pt-2 mt-4 col-lg-4 col-md-6">
                                <div className="p-4 border-0 rounded-md shadow card pricing-rates business-rate">
                                    <div className="p-0 card-body">
                                        <span className="px-4 py-2 mb-0 rounded-lg d-inline-block bg-soft-primary h6 text-primary">
                                            Starter
                                        </span>
                                        <h2 className="mt-3 mb-0 font-weight-bold">$ 100</h2>
                                        <p className="text-muted">2 Days</p>
                                        <ul className="pt-3 list-unstyled border-top">
                                            <li className="mb-0 h6 text-muted">
                                                <span className="mr-2 text-primary h5">
                                                    <i className="align-middle uil uil-check-circle" />
                                                </span>
                                                Min. Possible deposit: $100
                                            </li>
                                            <li className="mb-0 h6 text-muted">
                                                <span className="mr-2 text-primary h5">
                                                    <i className="align-middle uil uil-check-circle" />
                                                </span>
                                                Max. Possible deposit: $100000
                                            </li>
                                            <li className="mb-0 h6 text-muted">
                                                <span className="mr-2 text-primary h5">
                                                    <i className="align-middle uil uil-check-circle" />
                                                </span>
                                                $250 Minimum return
                                            </li>
                                            <li className="mb-0 h6 text-muted">
                                                <span className="mr-2 text-primary h5">
                                                    <i className="align-middle uil uil-check-circle" />
                                                </span>
                                                $1000000 Maximum return
                                            </li>
                                            <li className="mb-0 h6 text-muted">
                                                <span className="mr-2 text-primary h5">
                                                    <i className="align-middle uil uil-check-circle" />
                                                </span>
                                                $10 Gift Bonus
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <a href="login" className="btn btn-block btn-primary">
                                                Buy Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end col*/}
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                </section>
                {/* End Pricing Section Start */}
                {/* Crypto price Section Start */}
                <section className="mt-5 overflow-hidden section bg-soft-primary">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="text-center col-12">
                                <div className="pb-2 mb-4 section-title">
                                    <h4 className="mb-4 title">Cryptocurrency</h4>
                                    <p className="mx-auto mb-0 text-muted para-desc">
                                        Trade and invest Top Cryptocurrency
                                    </p>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="market-box ">
                                    <div className="market-content">
                                        <coingecko-coin-ticker-widget
                                            coin-id="bitcoin"
                                            currency="usd"
                                            width={0}
                                            locale="en"
                                            background-color="#01395e"
                                            vce-ready=""
                                        />
                                    </div>
                                    {/*pattern end*/}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="market-box">
                                    <div className="market-content">
                                        <coingecko-coin-ticker-widget
                                            coin-id="ethereum"
                                            currency="usd"
                                            width={0}
                                            locale="en"
                                            background-color="#01395e"
                                            vce-ready=""
                                        />
                                    </div>
                                    {/*pattern start*/}
                                    {/*pattern end*/}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="market-box">
                                    <div className="market-content">
                                        <coingecko-coin-ticker-widget
                                            coin-id="litecoin"
                                            currency="usd"
                                            width={0}
                                            locale="en"
                                            background-color="#01395e"
                                            vce-ready=""
                                        />
                                    </div>
                                    {/*pattern start*/}
                                    {/*pattern end*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Crypto price Section Start  End*/}
                {/* Testimonial Section Start */}
                <section className="mt-5 overflow-hidden section">
                    <div className="container mt-100 mt-60">
                        <div className="row justify-content-center">
                            <div className="text-center col-12">
                                <div className="pb-2 mb-4 section-title">
                                    <h4 className="mb-4 title">What our Customer says!</h4>
                                    <p className="mx-auto mb-0 text-muted para-desc">
                                        Don't take our word for it, here's what some of our clients have
                                        to say about us
                                    </p>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                        <div className="mt-4 row justify-content-center">
                            <div className="col-lg-8 col-12">
                                <div
                                    id="single-owl"
                                    className="owl-carousel owl-theme owl-loaded owl-drag"
                                >
                                    {/* Review Start */}
                                    <div className="owl-stage-outer">
                                        <div className="owl-stage" />
                                    </div>
                                    <div className="owl-nav disabled">
                                        <button type="button" role="presentation" className="owl-prev">
                                            <span aria-label="Previous">‹</span>
                                        </button>
                                        <button type="button" role="presentation" className="owl-next">
                                            <span aria-label="Next">›</span>
                                        </button>
                                    </div>
                                    <div className="owl-dots disabled" />
                                </div>
                                {/* Review End */}
                            </div>
                            {/*end owl-fade*/}
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                    {/*end container*/}
                </section>
                {/*End Testimonial Section  */}
                {/* Sign up Section Start */}
                <section className="overflow-hidden section mt-60 bg-soft-primary">
                    <div className="container">
                        <div className="p-4 roundedd bg-primary p-lg-5">
                            <div className="row align-items-end">
                                <div className="col-md-8">
                                    <div className="text-center section-title text-md-left">
                                        <h4 className="mb-3 text-white title title-dark">
                                            The Better Way to Trade &amp; Invest
                                        </h4>
                                        <p className="mb-0 text-white">
                                            Value Trade helps over 2 million customers achieve their
                                            financial goals by helping them trade and invest with ease
                                        </p>
                                    </div>
                                </div>
                                {/*end col*/}
                                <div className="mt-4 col-md-4 mt-sm-0">
                                    <div className="text-center text-md-right">
                                        <Link
                                            to="https://valuetrades.online/register"
                                            className="pt-3 pb-3 pl-4 pr-4 btn btn-light"
                                        >
                                            Create Free Account
                                        </Link>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                    </div>
                    {/*end container*/}
                </section>
                {/* End Sign up Section  */}
                {/* Footer Start */}
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="pb-0 mb-0 col-lg-4 col-12 mb-md-4 pb-md-2">
                                <h5 className="text-light footer-head">Value Trades</h5>
                                <p className="mt-4">We are online</p>
                                <ul className="mt-4 mb-0 list-unstyled social-icon social">
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)" className="rounded">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-facebook fea icon-sm fea-social"
                                            >
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)" className="rounded">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-instagram fea icon-sm fea-social"
                                            >
                                                <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)" className="rounded">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-twitter fea icon-sm fea-social"
                                            >
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                                {/*end icon*/}
                            </div>
                            {/*end col*/}
                            <div className="pt-2 mt-4 col-lg-4 col-md-4 mt-sm-0 pt-sm-0">
                                <h5 className="text-light footer-head">Useful Links</h5>
                                <ul className="mt-4 list-unstyled footer-list">
                                    <li>
                                        <Link to="https://valuetrades.online" className="text-foot">
                                            <i className="mr-1 mdi mdi-chevron-right" />
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://valuetrades.online/about" className="text-foot">
                                            <i className="mr-1 mdi mdi-chevron-right" />
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="https://valuetrades.online/contact"
                                            className="text-foot"
                                        >
                                            <i className="mr-1 mdi mdi-chevron-right" />
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://valuetrades.online/faq" className="text-foot">
                                            <i className="mr-1 mdi mdi-chevron-right" />
                                            Faq
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <TawkMessengerReact
                                propertyId="659a7a298d261e1b5f506cc7"
                                widgetId="default" />
                            {/*end col*/}
                            <div className="pt-2 mt-4 col-lg-4 col-md-4 mt-sm-0 pt-sm-0">
                                <h5 className="text-light footer-head">Contact Details</h5>
                                <div className="mt-2">
                                    <h6 className="text-foot">
                                        <i className="mr-1 mdi mdi-home"> </i>
                                        Head Office
                                    </h6>
                                    <p>71 Cherry Court SOUTHAMPTON SO53 5PD UK</p>
                                    <h6>
                                        <i className="mr-1 mdi mdi-email"> </i>Email Address
                                    </h6>
                                    <p>support@valuetrade.live</p>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                </footer>
                {/*end footer*/}
                <footer className="footer footer-bar">
                    <div className="container text-center">
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="text-sm-left">
                                    <p className="mb-0">
                                        © Copyright 2024 Value Trades All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                            {/*end col*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container*/}
                </footer>
                {/*end footer*/}
                {/* Footer End */}
                {/* javascript */}
                {/* SLIDER */}
                {/* Icons */}
            </>

        </>
    )
}