import { Link, useNavigate } from "react-router-dom"
import { useState, useMemo } from "react"
import supabase from "../../utils/client"
import {toast} from "react-toastify"
import logo from "../../assets/img/value.png"

export default function Profile() {

    const [user, setUser] = useState("")
    const [address, setAddress] = useState("")
    const [userAddress, setUserAddress] = useState("")
  
    const userToken = localStorage.getItem("userToken")

    const navigate = useNavigate()

    useMemo(() => {

        const getData = async function () {

            try {
                const { data, error } = await supabase
                    .from("users")
                    .select("*")
                    .eq("id", userToken)
                if (error) return console.log(error.message)
                setUser(data[0]);
                setUserAddress(data[0].address)
            } catch (error) {
                console.log(error)
            }
        }


        const getProfile = async function(){

            try {
                const { data, error } = await supabase
                    .from("withdraw_address")
                    .select("*")
                    .eq("id", userToken)
                if (error) return console.log(error.message)
                setAddress(data[0].wallet);
            } catch (error) {
                console.log(error)
            }
        }

        getData()

        getProfile()

    }, [])

    async function Logout() {
        try {
            await supabase.auth.signOut();
            sessionStorage.removeItem("auth");
            sessionStorage.removeItem("userToken");
            sessionStorage.removeItem("amount");
            sessionStorage.removeItem("method");
            toast.info("Signed out successfully");
            navigate("/login")
        } catch (error) {
            console.error("Error signing out:", error.message);
        }
    }


    const handleProfile = async function (e) {

        e.preventDefault()

        try {
            const { data, error } = await supabase
                .from('users')
                .upsert(
                    [{
                        id: userToken,
                        username: user.username,
                        email: user.email,
                        country: user.country,
                        phone: user.phone,
                        full_name: user.full_name,
                        address: userAddress,
                    },
                    ],
                    { onConflict: ['id'], returning: ['*'] }
                )
                .select()
            if (error) return console.log(error.message)
            setAddress(data[0].wallet);
            toast.success("Profile updated")
        } catch (error) {
            console.log(error)
        }
    }



    const handleWallet = async function (e) {
        e.preventDefault()
        try {
            const {error} = await supabase
                .from('withdraw_address')
                .upsert(
                    [{
                            id: userToken,
                            wallet: address,
                        },
                    ],
                    { onConflict: ['id'], returning: ['*'] }
                )
                .select()
            if (error) return new Error(error)
            toast.success("Withdrawal address updated")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container-fluid container-application">
                {/* Sidenav */}
                <div className="sidenav" id="sidenav-main">
                    {/* Sidenav header */}
                    <div className="sidenav-header d-flex align-items-center">
                        <Link className="navbar-brand" to="/dashboard">
                            <img
                                src={logo}
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
                                        src={logo}
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
                                            <Link onClick={Logout} to="#" className="dropdown-item text-danger">
                                                <i className="fa fa-sign-out-alt" />
                                                <span>Logout</span>
                                            </Link>
                                            <form
                                                id="logout-form"
                                                action="#"
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
                                                action="#"
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
                    {/* Page content */}
                    <div className="page-content">
                        {/* Page title */}
                        <div className="page-title">
                            <div className="row justify-content-between align-items-center">
                                <div className="mb-3 col-md-6 mb-md-0">
                                    <h5 className="mb-0 text-white h3 font-weight-400">
                                        Account Settings
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div></div> <div></div> <div></div>{" "}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row profile">
                                            <div className="p-2 col-md-12 p-md-4">
                                                <ul className="mb-4 nav nav-pills">
                                                    <li className="nav-item">
                                                        <a
                                                            href="#per"
                                                            className="nav-link active"
                                                            data-toggle="tab"
                                                        >
                                                            Personal Settings
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#set" className="nav-link" data-toggle="tab">
                                                            Withdrawal Settings
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a href="#pas" className="nav-link" data-toggle="tab">
                                                            Password/Security
                                                        </a>
                                                    </li>
                                                </ul>
                                                <div className="tab-content">
                                                    <div className="tab-pane fade active show" id="per">
                                                        <form
                                                            onSubmit={handleProfile}
                                                            id="updateprofileform"
                                                        >
                                                            <input
                                                                type="hidden"
                                                                name="_token"
                                                                defaultValue="5afAv7w3xU1kzTYm1HcRaxUhndTvtCtjUq87rcZr"
                                                            />{" "}
                                                            <div className="form-row">
                                                                <div className="form-group col-md-6">
                                                                    <label className="">Fullname</label>
                                                                    <input
                                                                        type="text"
                                                                        value={user.full_name}
                                                                        className="form-control "
                                                                        name="name"
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label className="">Email Address</label>
                                                                    <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        name="email"
                                                                        value={user.email}
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label className="">Phone Number</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control "
                                                                        defaultValue={user.phone}
                                                                        name="phone"
                                                                    />
                                                                </div>
                                                                
                                                                <div className="form-group col-md-6">
                                                                    <label className="">Country</label>
                                                                    <input
                                                                        type="text"
                                                                        value={user.country}
                                                                        className="form-control "
                                                                        name="country"
                                                                        readOnly=""
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label className="">Address</label>
                                                                    <textarea
                                                                        onChange={(e)=> setUserAddress(e.target.value)}
                                                                        value={userAddress}
                                                                        className="form-control "
                                                                        placeholder="Full Address"
                                                                        name="address"
                                                                        row={3}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <button type="submit" className="btn btn-primary">
                                                                Update Profile
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <div className="tab-pane fade" id="set">
                                                        <form
                                                            id="updatewithdrawalinfo"
                                                        >
                                                            <input
                                                                type="hidden"
                                                                name="_token"
                                                                defaultValue="5afAv7w3xU1kzTYm1HcRaxUhndTvtCtjUq87rcZr"
                                                            />{" "}
                                                            <input
                                                                type="hidden"
                                                                name="_method"
                                                                defaultValue="PUT"
                                                            />{" "}
                                                        
                                                            <fieldset className="mt-2">
                                                                <div className="form-row">
                                                                    <div className="form-group col-md-6">
                                                                        <label className="">USDT</label>
                                                                        <input 
                                                                            onChange={(e)=> setAddress(e.target.value)}
                                                                            value={address}
                                                                            type="text"
                                                                            name="btc_address"
                                                                            className="form-control "
                                                                            placeholder="Enter USDT Address"
                                                                        />
                                                                        <small className="">
                                                                            Enter your USDT Address that will be used to
                                                                            withdraw your funds
                                                                        </small>
                                                                    </div>
                                                                   
                                                                </div>
                                                            </fieldset>
                                                            <button onClick={handleWallet} className="px-5 btn btn-primary">
                                                                Save
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <div className="tab-pane fade" id="pas">
                                                        <form
                                                            method="POST"
                                                            action="https://valuetrades.online/dashboard/updatepass"
                                                        >
                                                            <input
                                                                type="hidden"
                                                                name="_token"
                                                                defaultValue="5afAv7w3xU1kzTYm1HcRaxUhndTvtCtjUq87rcZr"
                                                            />{" "}
                                                            <input
                                                                type="hidden"
                                                                name="_method"
                                                                defaultValue="PUT"
                                                            />{" "}
                                                            <div className="form-row">
                                                                <div className="form-group col-md-6">
                                                                    <label className="">Old Password</label>
                                                                    <input
                                                                        type="password"
                                                                        name="current_password"
                                                                        className="form-control "
                                                                        required=""
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label className="">New Password</label>
                                                                    <input
                                                                        type="password"
                                                                        name="password"
                                                                        className="form-control "
                                                                        required=""
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-6">
                                                                    <label className="">Confirm New Password</label>
                                                                    <input
                                                                        type="password"
                                                                        name="password_confirmation"
                                                                        className=" form-control"
                                                                        required=""
                                                                    />
                                                                </div>
                                                            </div>
                                                            <button type="submit" className="btn btn-primary">
                                                                Update Password
                                                            </button>
                                                        </form>
                                                    </div>
                                                    <div className="tab-pane fade" id="sec">
                                                        <form
                                                            method="POST"
                                                            action="javascript:void(0)"
                                                            id="updateemailpref"
                                                        >
                                                            <input
                                                                type="hidden"
                                                                name="_token"
                                                                defaultValue="5afAv7w3xU1kzTYm1HcRaxUhndTvtCtjUq87rcZr"
                                                            />{" "}
                                                            <input
                                                                type="hidden"
                                                                name="_method"
                                                                defaultValue="PUT"
                                                            />{" "}
                                                            <div className="row">
                                                                <div className="mb-3 col-md-6">
                                                                    <label className="">
                                                                        Send confirmation OTP to my email when withdrawing
                                                                        my funds.
                                                                    </label>
                                                                    <div className="selectgroup">
                                                                        <label className="selectgroup-item">
                                                                            <input
                                                                                type="radio"
                                                                                name="otpsend"
                                                                                id="otpsendYes"
                                                                                defaultValue="Yes"
                                                                                className="selectgroup-input"
                                                                                defaultChecked=""
                                                                            />
                                                                            <span className="selectgroup-button">Yes</span>
                                                                        </label>
                                                                        <label className="selectgroup-item">
                                                                            <input
                                                                                type="radio"
                                                                                name="otpsend"
                                                                                id="otpsendNo"
                                                                                defaultValue="No"
                                                                                className="selectgroup-input"
                                                                            />
                                                                            <span className="selectgroup-button">No</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 col-md-6">
                                                                    <label className="">
                                                                        Send me email when i get profit.
                                                                    </label>
                                                                    <div className="selectgroup">
                                                                        <label className="selectgroup-item">
                                                                            <input
                                                                                type="radio"
                                                                                name="roiemail"
                                                                                id="roiemailYes"
                                                                                defaultValue="Yes"
                                                                                className="selectgroup-input"
                                                                                defaultChecked=""
                                                                            />
                                                                            <span className="selectgroup-button">Yes</span>
                                                                        </label>
                                                                        <label className="selectgroup-item">
                                                                            <input
                                                                                type="radio"
                                                                                name="roiemail"
                                                                                id="roiemailNo"
                                                                                defaultValue="No"
                                                                                className="selectgroup-input"
                                                                            />
                                                                            <span className="selectgroup-button">No</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="mb-3 col-md-6">
                                                                    <label className="">
                                                                        Send me email when my investment plan expires.
                                                                    </label>
                                                                    <div className="selectgroup">
                                                                        <label className="selectgroup-item">
                                                                            <input
                                                                                type="radio"
                                                                                name="invplanemail"
                                                                                id="invplanemailYes"
                                                                                defaultValue="Yes"
                                                                                className="selectgroup-input"
                                                                                defaultChecked=""
                                                                            />
                                                                            <span className="selectgroup-button">Yes</span>
                                                                        </label>
                                                                        <label className="selectgroup-item">
                                                                            <input
                                                                                type="radio"
                                                                                name="invplanemail"
                                                                                id="invplanemailNo"
                                                                                defaultValue="No"
                                                                                className="selectgroup-input"
                                                                            />
                                                                            <span className="selectgroup-button">No</span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-2 col-12">
                                                                    <button
                                                                        type="submit"
                                                                        className="px-5 btn btn-primary"
                                                                    >
                                                                        Save
                                                                    </button>
                                                                </div>
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
                        id="footer-main"
                    >
                        <div className="text-center row text-sm-left align-items-sm-center">
                            <div className="col-sm-6">
                                <p className="mb-0 text-sm">
                                    All Rights Reserved © Value Trades 2024
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}