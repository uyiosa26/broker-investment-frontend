import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import supabase from "../../utils/client"

export default function Plan() {

    const [user, setUser] = useState("")
    const [value, setValue] = useState(200)

    const wallet = user.balance;

    const userToken = sessionStorage.getItem("userToken")

    useEffect(() => {

        const getData = async function () {

            try {
                const { data, error } = await supabase
                    .from("users")
                    .select("*")
                    .eq("id", userToken)
                if (error) return console.log(error.message)
                setUser(data[0]);
                console.log(user)
            } catch (error) {
                console.log(error)
            }
        }
        getData()

    }, [])

    const handlePayment = async function(e) {

        e.preventDefault()

        if(wallet < value || wallet === undefined) return alert("Please Fund account to continue");
  
    }

    return (
        <>
            <div className="container-fluid container-application">

                <div className="sidenav" id="sidenav-main">
                    {/* Sidenav header */}
                    <div className="sidenav-header d-flex align-items-center">
                        <Link className="navbar-brand" to="/dashboard">
                            <img
                                src="https://valuetrades.online/storage/app/public/photos/6XnjHMDGr02c8SZKHkaNzl6aA4dEtvfvCjkntkgG.png"
                                className="navbar-brand-img"
                                alt="logo"
                            />
                        </Link>
                        <div className="ml-auto">
                            {/* Sidenav toggler */}
                            <div
                                className="sidenav-toggler sidenav-toggler-dark d-md-none"
                                data-action="sidenav-unpin"
                                data-target="#sidenav-main"
                            >
                                <div className="sidenav-toggler-inner">
                                    <i className="bg-white sidenav-toggler-line" />
                                    <i className="bg-white sidenav-toggler-line" />
                                    <i className="bg-white sidenav-toggler-line" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* User mini profile */}
                    <div className="text-center sidenav-user d-flex flex-column align-items-center justify-content-between">
                        {/* Avatar */}
                        <div>
                            <a href="#" className="avatar rounded-circle avatar-xl">
                                <i className="fas fa-user-circle fa-4x" />
                            </a>
                            <div className="mt-4">
                                <h5 className="mb-0 text-white">{user.full_name}</h5>
                                <span className="mb-3 text-sm text-white d-block opacity-8">
                                    online
                                </span>
                                <Link to="#" className="shadow custom-btn btn btn-sm btn-white btn-icon rounded-pill hover-translate-y-n3">
                                    <i className="fa fa-coins"></i>
                                    <span className="btn-inner--text">${user.balance}</span>
                                </Link>
                            </div>
                        </div>
                        {/* User info */}
                        {/* Actions */}
                        <div className="mt-4 w-100 actions d-flex justify-content-between"></div>
                    </div>
                    {/* Application nav */}
                    <div className="clearfix nav-application">
                        <Link className="text-sm btn btn-square active" to="/dashboard">

                            <span className="btn-inner--icon d-block">
                                <i className="fa-solid fa-house fa-2x"></i>
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Home</span>

                        </Link>
                        <Link className="text-sm btn btn-square  " to="/deposit">

                            <span className="btn-inner--icon d-block">
                                <i className="fa-solid fa-circle-dollar-to-slot fa-2x"></i>
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Deposit</span>
                        </Link>
                        <Link className="text-sm btn btn-square" to="/withdraw">
                            <span className="btn-inner--icon d-block">
                                <i className="fas fa-arrow-alt-circle-up fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Withdraw</span>

                        </Link>
                        <Link className="text-sm btn btn-square" to="/transactions">
                            <span className="btn-inner--icon d-block">
                                <i className="fas fa-money-check-alt fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Transactions</span>
                        </Link>
                        <Link className="text-sm btn btn-square" to="/account">
                            <span className="btn-inner--icon d-block">
                                <i className="fas fa-address-card fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Profile</span>
                        </Link>
                        <Link className="text-sm btn btn-square" to="/buy-plan">
                            <span className="btn-inner--icon d-block">
                                <i className="fa-solid fa-chart-pie fa-2x"></i>
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Trading Plans</span>
                        </Link>
                    </div>
                    {/* Misc area */}
                    <div className="card bg-gradient-warning">
                        <div className="card-body">
                            <h5 className="text-white">Need Help!</h5>
                            <p className="mb-4 text-white">
                                Contact our 24/7 customer support center
                            </p>
                            <Link className="btn btn-sm btn-block btn-white rounded-pill" to="/contact">Contact Us</Link>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="main-content position-relative">
                    {/* Main nav */}
                    {/* Main nav */}
                    <nav
                        className="navbar navbar-main navbar-expand-lg navbar-dark bg-primary navbar-border"
                        id="navbar-main"
                    >
                        <div className="container-fluid">
                            {/* Brand + Toggler (for mobile devices) */}
                            <div className="pl-4 d-block d-md-none">
                                <Link to="/dashboard" className="navbar-brand">
                                    <img
                                        src="https://valuetrades.online/storage/app/public/photos/6XnjHMDGr02c8SZKHkaNzl6aA4dEtvfvCjkntkgG.png"
                                        className="navbar-brand-img"
                                        alt="..." />
                                </Link>
                            </div>
                            {/* User's navbar */}
                            <div className="ml-auto navbar-user d-lg-none">
                                <ul className="flex-row navbar-nav align-items-center">
                                    <li className="nav-item">
                                        <a
                                            href="#"
                                            className="nav-link nav-link-icon sidenav-toggler"
                                            data-action="sidenav-pin"
                                            data-target="#sidenav-main"
                                        >
                                            <i className="fa fa-bars" />
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown dropdown-animate">
                                        <a
                                            className="nav-link pr-lg-0"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <span className="avatar avatar-sm rounded-circle">
                                                <i className="fas fa-user-circle fa-2x" />
                                            </span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                                            <h6 className="px-0 dropdown-header">Hi, {user.full_name}!</h6>
                                            <Link className="dropdown-item" to="/account">
                                                <span>My profile</span>
                                            </Link>
                                            <div className="dropdown-divider" />
                                            <Link to="#" className="dropdown-item text-danger">
                                                <i className="fa fa-sign-out-alt" />
                                                <span>Logout</span>
                                            </Link>
                                            <form
                                                id="logout-form"
                                                action="https://valuetrades.online/logout"
                                                method="POST"
                                                style={{ display: "none" }}
                                            >
                                                <input
                                                    type="hidden"
                                                    name="_token"
                                                    defaultValue="5afAv7w3xU1kzTYm1HcRaxUhndTvtCtjUq87rcZr"
                                                />
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* Navbar nav */}
                            <div
                                className="collapse navbar-collapse navbar-collapse-fade"
                                id="navbar-main-collapse"
                            >
                                {/* Right menu */}
                                <ul className="navbar-nav ml-lg-auto align-items-center d-none d-lg-flex">
                                    <li className="nav-item">
                                        <a
                                            href="#"
                                            className="nav-link nav-link-icon sidenav-toggler"
                                            data-action="sidenav-pin"
                                            data-target="#sidenav-main"
                                        >
                                            <i className="fa fa-bars" />
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown dropdown-animate">
                                        <a
                                            className="nav-link pr-lg-0"
                                            href="#"
                                            role="button"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <div className="media media-pill align-items-center">
                                                <span className="avatar rounded-circle">
                                                    <i className="fas fa-user-circle fa-2x" />
                                                </span>
                                                <div className="ml-2 d-none d-lg-block">
                                                    <span className="mb-0 text-sm font-weight-bold">
                                                        {user.full_name}
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                                            <h6 className="px-0 dropdown-header">Hi, {user.full_name}!</h6>
                                            <Link className="dropdown-item" to="/account">
                                                <i className="fa fa-user" />
                                                <span>My profile</span>
                                            </Link>
                                            <div className="dropdown-divider" />
                                            <Link to="#" className="dropdown-item text-danger">
                                                <i className="fa fa-sign-out-alt" />
                                                <span>Logout</span>
                                            </Link>
                                            <form
                                                id="logout-form"
                                                action="https://valuetrades.online/logout"
                                                method="POST"
                                                style={{ display: "none" }}
                                            >
                                                <input
                                                    type="hidden"
                                                    name="_token"
                                                    defaultValue="5afAv7w3xU1kzTYm1HcRaxUhndTvtCtjUq87rcZr"
                                                />
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <div className="page-content">

                        <div className="page-title">
                            <div className="row justify-content-between align-items-center">
                                <div className="mb-3 col-md-6 mb-md-0">
                                    <h5 className="mb-0 text-white h3 font-weight-400">Get started with your investment.</h5>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div>
                                            <div className="mt-4 row">
                                                <div className="col-md-8">

                                                    <div className="mt-5">
                                                        <div className="">
                                                            <p>Choose Quick Amount to Invest</p>
                                                        </div>
                                                        <div className="flex-wrap mb-1 d-flex justify-content-start align-items-center">
                                                            <button onClick={()=> setValue(100)} className="mb-2 border-black rounded-none btn btn-light" >$100</button>
                                                            <button onClick={() => setValue(250)} className="mb-2 border-black rounded-none btn btn-light" >$250</button>
                                                            <button onClick={() => setValue(500)} className="mb-2 border-black rounded-none btn btn-light" >$500</button>
                                                            <button onClick={() => setValue(1000)} className="mb-2 border-black rounded-none btn btn-light" >$1,000</button>
                                                            <button onClick={() => setValue(1500)} className="mb-2 border-black rounded-none btn btn-light" >$1,500</button>
                                                            <button onClick={() => setValue(2000)} className="mb-2 border-black rounded-none btn btn-light" >$2,000</button>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <div className="">
                                                            <p>Or Enter Your Amount</p>
                                                            <div>
                                                                <input type="number" value={value} required name="" id="" className="form-control d-block w-100" placeholder="1000" min="1000" max="100000" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-5">
                                                        <p>Choose Payment Method</p>
                                                    </div>
                                                    <div className="select-menu2">
                                                        <ul className="options2 d-block">
                                                            <li className="mb-3 shadow option2 bg-light border border-primary" id="acnt">
                                                                <i className="fas fa-wallet"></i>
                                                                <span className="option-text2 d-block">Balance</span> <br />
                                                                <span className="small">${user.balance}</span>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <p>Your Investment Details</p>
                                                    <div className="row">
                                                        <div className="mb-3 col-md-6">
                                                            <p className="mb-0 small">Name of plan</p>
                                                            <span className="text-primary small">Starter</span>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <p className="mb-0 small">Plan Price</p>
                                                            <span className="text-primary small">$1000</span>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <p className="mb-0 small">Duration</p>
                                                            <span className="text-primary small">1 Days</span>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <p className="mb-0 small">Profit</p>
                                                            <span className="text-primary small">
                                                                1000%
                                                                Daily
                                                            </span>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <p className="mb-0 small">Minimum Deposit</p>
                                                            <span className="text-primary small">$1000</span>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <p className="mb-0 small">Maximum Deposit</p>
                                                            <span className="text-primary small">$100000</span>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <p className="mb-0 small">Minimum Return</p>
                                                            <span className="text-primary small">10000%</span>
                                                        </div>
                                                        <div className="mb-3 col-md-6">
                                                            <p className="mb-0 small">Maximum Return</p>
                                                            <span className="text-primary small">1000000%</span>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className="justify-content-between d-md-flex">
                                                        <span className="small d-block d-md-inline">Payment method:</span>
                                                        <span className="small text-primary">Account Balance</span>
                                                    </div>
                                                    <hr />
                                                    <div className="justify-content-between d-md-flex">
                                                        <span className="d-block d-md-inline font-weight-bold">Amount to Invest:</span>
                                                        <span className="text-primary font-weight-bold">$0</span>
                                                    </div>
                                                    <div className="mt-3 text-center">
                                                        <form onSubmit={handlePayment}>
                                                            {<button className="px-3 btn btn-primary" type="submit">
                                                                Confirm &amp; Invest
                                                            </button>}
                                                        </form>
                                                        <span className="mt-2 small text-primary">
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}