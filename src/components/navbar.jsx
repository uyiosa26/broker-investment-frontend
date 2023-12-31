import { Link } from "react-router-dom"
import supabase from "../utils/client"
import { useEffect, useState } from "react"

export default function Navbar() {

    const [user, setUser] = useState("")

    const userToken = localStorage.getItem("userToken")

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


    return (
        <>
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
                            <a
                                href="#"
                                className="shadow btn btn-sm btn-white btn-icon rounded-pill hover-translate-y-n3"
                            >
                                <span className="btn-inner--icon">
                                    <i className="far fa-coins" />
                                </span>
                                <span className="btn-inner--text">{user.balance}</span>
                            </a>
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
                            <i className="far fa-home fa-2x" />
                        </span>
                        <span className="pt-2 btn-inner--icon d-block">Home</span>

                    </Link>
                    <Link className="text-sm btn btn-square  " to="/deposit">

                        <span className="btn-inner--icon d-block">
                            <i className="far fa-download fa-2x" />
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
                            <i className="fas fa-hand-holding-seedling fa-2x" />
                        </span>
                        <span className="pt-2 btn-inner--icon d-block">Trading Plans</span>
                    </Link>
                    <Link className="text-sm btn btn-square" to="/">
                        <span className="btn-inner--icon d-block">
                            <i className="far fa-hand-holding-seedling fa-2x" />
                        </span>
                        <span className="pt-2 btn-inner--icon d-block">My Plans</span>
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
                                        <i className="far fa-bars" />
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
                                            <i className="far fa-sign-out-alt" />
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
                                        <i className="far fa-bars" />
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
                                            <i className="far fa-user" />
                                            <span>My profile</span>
                                        </Link>
                                        <div className="dropdown-divider" />
                                        <Link to="#" className="dropdown-item text-danger">
                                            <i className="far fa-sign-out-alt" />
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
            </div>
        </>
    )
}