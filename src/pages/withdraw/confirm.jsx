import { Link} from "react-router-dom"
import supabase from "../../utils/client"
import { useEffect, useState } from "react"

export default function Confirm() {

    const [user, setUser] = useState("")

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

    return (
        <>
            <div className="container-fluid container-application">
                {/* Sidenav */}
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
                                <h5 className="mb-0 text-white"> sunday adeleke</h5>
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
                                    <span className="btn-inner--text">${user.balance}</span>
                                </a>
                            </div>
                        </div>
                        {/* User info */}
                        {/* Actions */}
                        <div className="mt-4 w-100 actions d-flex justify-content-between"></div>
                    </div>
                    {/* Application nav */}
                    <div className="clearfix nav-application">
                        <a
                            to="/dashboard"
                            className="text-sm btn btn-square "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="far fa-home fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Home</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/deposits"
                            className="text-sm btn btn-square  "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="far fa-download fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Deposit</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/withdrawals"
                            className="text-sm btn btn-square  active"
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="fas fa-arrow-alt-circle-up fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Withdraw</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/tradinghistory"
                            className="text-sm btn btn-square "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="fal fa-history fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Profit History</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/accounthistory"
                            className="text-sm btn btn-square "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="fas fa-money-check-alt fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Transactions</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/asset-balance"
                            className="text-sm btn btn-square  "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="fab fa-stack-exchange fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Swap Crypto</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/transfer-funds"
                            className="text-sm btn btn-square "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="fas fa-exchange fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Transfer funds</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/subtrade"
                            className="text-sm btn btn-square "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="far fa-receipt fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Managed Accounts</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/account-settings"
                            className="text-sm btn btn-square "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="fas fa-address-card fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Profile</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/buy-plan"
                            className="text-sm btn btn-square "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="fas fa-hand-holding-seedling fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Trading Plans</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/myplans/All"
                            className="text-sm btn btn-square  "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="far fa-hand-holding-seedling fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">My Plans</span>
                        </a>
                        <a
                            href="https://valuetrades.online/dashboard/referuser"
                            className="text-sm btn btn-square "
                        >
                            <span className="btn-inner--icon d-block">
                                <i className="fas fa-retweet fa-2x" />
                            </span>
                            <span className="pt-2 btn-inner--icon d-block">Referrals</span>
                        </a>
                    </div>
                    {/* Misc area */}
                    <div className="card bg-gradient-warning">
                        <div className="card-body">
                            <h5 className="text-white">Need Help!</h5>
                            <p className="mb-4 text-white">
                                Contact our 24/7 customer support center
                            </p>
                            <a
                                href="https://valuetrades.online/dashboard/support"
                                className="btn btn-sm btn-block btn-white rounded-pill"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>{" "}
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
                                <a
                                    className="navbar-brand"
                                    to="/dashboard"
                                >
                                    <img
                                        src="https://valuetrades.online/storage/app/public/photos/6XnjHMDGr02c8SZKHkaNzl6aA4dEtvfvCjkntkgG.png"
                                        className="navbar-brand-img"
                                        alt="..."
                                    />
                                </a>
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
                                            <h6 className="px-0 dropdown-header">Hi, sunday adeleke!</h6>
                                            <a
                                                href="https://valuetrades.online/dashboard/account-settings"
                                                className="dropdown-item"
                                            >
                                                <i className="far fa-user" />
                                                <span>My profile</span>
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a
                                                className="dropdown-item text-danger"
                                                href="https://valuetrades.online/logout"
                                                onclick="event.preventDefault();
                  document.getElementById('logout-form').submit();"
                                            >
                                                <i className="far fa-sign-out-alt" />
                                                <span>Logout</span>
                                            </a>
                                            <form
                                                id="logout-form"
                                                action="https://valuetrades.online/logout"
                                                method="POST"
                                                style={{ display: "none" }}
                                            >
                                                <input
                                                    type="hidden"
                                                    name="_token"
                                                    defaultValue="7536KJUbxS10OC1e0YDD0woKFjM3PpdRK64C86vf"
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
                                                        sunday adeleke
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right dropdown-menu-arrow">
                                            <h6 className="px-0 dropdown-header">Hi, sunday adeleke!</h6>
                                            <a
                                                href="https://valuetrades.online/dashboard/account-settings"
                                                className="dropdown-item"
                                            >
                                                <i className="far fa-user" />
                                                <span>My profile</span>
                                            </a>
                                            <div className="dropdown-divider" />
                                            <a
                                                className="dropdown-item text-danger"
                                                href="https://valuetrades.online/logout"
                                                onclick="event.preventDefault();
                  document.getElementById('logout-form').submit();"
                                            >
                                                <i className="far fa-sign-out-alt" />
                                                <span>Logout</span>
                                            </a>
                                            <form
                                                id="logout-form"
                                                action="https://valuetrades.online/logout"
                                                method="POST"
                                                style={{ display: "none" }}
                                            >
                                                <input
                                                    type="hidden"
                                                    name="_token"
                                                    defaultValue="7536KJUbxS10OC1e0YDD0woKFjM3PpdRK64C86vf"
                                                />
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Page content */}
                    <div className="page-content">
                        {/* Page title */}
                        <div className="page-title">
                            <div className="row justify-content-between align-items-center">
                                <div className="mb-3 col-md-6 mb-md-0">
                                    <h5 className="mb-0 text-white h3 font-weight-400">
                                        Withdrawal Details
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div></div>
                        <div>
                            <div className="row">
                                <div className="col-lg-12"></div>
                            </div>
                        </div>{" "}
                        <div></div>{" "}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="mb-5 row">
                                            <div className="col-lg-8 offset-md-2">
                                                <div className="p-2 rounded p-md-4 card ">
                                                    <div className="card-body">
                                                        <div className="mb-3 alert alert-modern alert-success">
                                                            <span className="text-center badge badge-success badge-pill">
                                                                Your payment method
                                                            </span>
                                                            <span className="alert-content">USDT</span>
                                                        </div>
                                                        <form
                                                            action="https://valuetrades.online/dashboard/completewithdrawal"
                                                            method="post"
                                                        >
                                                            <input
                                                                type="hidden"
                                                                name="_token"
                                                                defaultValue="7536KJUbxS10OC1e0YDD0woKFjM3PpdRK64C86vf"
                                                            />{" "}
                                                            <div className="form-group">
                                                                <label className="">
                                                                    Enter Amount to withdraw($)
                                                                </label>
                                                                <input
                                                                    className="form-control "
                                                                    placeholder="Enter Amount"
                                                                    type="number"
                                                                    name="amount"
                                                                    required=""
                                                                />
                                                            </div>
                                                            <input
                                                                defaultValue="USDT"
                                                                type="hidden"
                                                                name="method"
                                                            />
                                                            <div className="form-group">
                                                                <button className="btn btn-primary" type="submit">
                                                                    Complete Request
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <div
                        className="pt-5 pb-4 footer footer-light sticky-bottom"
                        id="footer-main">
                        <div className="text-center row text-sm-left align-items-sm-center">
                            <div className="col-sm-6">
                                <p className="mb-0 text-sm">
                                    All Rights Reserved © Value Trades 2023
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}