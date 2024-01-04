import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import supabase from "../../utils/client"

export default function History() {

    const [user, setUser] = useState("")

    const [transactions, setTransactions] = useState([])

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
            } catch (error) {
                console.log(error)
            }
        }

        const getTransactions = async function () {

            try {
                const { data, error } = await supabase
                    .from("transactions")
                    .select("*")
                    .eq("user_id", userToken)
                if (error) return console.log(error.message)
                setTransactions(data);
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }

        getData()

        getTransactions()

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
                                            {/* <Link to="#" className="dropdown-item text-danger">
                                                <i className="far fa-sign-out-alt" />
                                                <span>Logout</span>
                                            </Link> */}
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
                                        Transaction Records
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div></div> <div></div>{" "}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div style={{ minHeight: "70vh" }} className="card-body">
                                        <div className="tab-content" id="pills-tabContent">
                                            <div
                                                className="tab-pane fade show active"
                                                id="pills-home"
                                                role="tabpanel"
                                                aria-labelledby="pills-home-tab"
                                            >
                                                <div className="table-responsive">
                                                    <div
                                                        id="UserTable_wrapper"
                                                        className="dataTables_wrapper dt-bootstrap4 no-footer"
                                                    >
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-6">
                                                                <div
                                                                    className="dataTables_length"
                                                                    id="UserTable_length"
                                                                >
                                                                    <label>
                                                                        Show{" "}
                                                                        <select
                                                                            name="UserTable_length"
                                                                            aria-controls="UserTable"
                                                                            className="custom-select custom-select-sm form-control form-control-sm"
                                                                        >
                                                                            <option value={10}>10</option>
                                                                            <option value={25}>25</option>
                                                                            <option value={50}>50</option>
                                                                            <option value={100}>100</option>
                                                                        </select>{" "}
                                                                        entries
                                                                    </label>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <table style={{ height: "100%" }}
                                                                    id="UserTable"
                                                                    className="UserTable table table-hover text- dataTable no-footer"
                                                                    role="grid"
                                                                    aria-describedby="UserTable_info"
                                                                >
                                                                    <thead>
                                                                        <tr role="row">
                                                                            <th
                                                                                className="sorting_desc"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                aria-sort="descending"
                                                                                aria-label="Amount: activate to sort column ascending"
                                                                                style={{ width: "182.962px" }}
                                                                            >
                                                                                Amount
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                aria-label="Payment mode: activate to sort column ascending"
                                                                                style={{ width: "274.55px" }}
                                                                            >
                                                                                Payment mode
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                aria-label="Status: activate to sort column ascending"
                                                                                style={{ width: "195.95px" }}
                                                                            >
                                                                                Status
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                aria-label="Date created: activate to sort column ascending"
                                                                                style={{ width: "460.938px" }}
                                                                            >
                                                                                Date created
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {transactions && transactions.map((transaction)=> (
                                                                            <tr key={transaction.id} role="row" className="odd">
                                                                                <td className="sorting_1">${transaction.value}</td>
                                                                                <td>{transaction.payment_method}</td>
                                                                                <td>
                                                                                    <span className="badge badge-danger">{transaction.status}</span>
                                                                                </td>
                                                                                <td>{new window.Date(transaction.date).toLocaleString()}</td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-profile"
                                                role="tabpanel"
                                                aria-labelledby="pills-profile-tab"
                                            >
                                                <div className="table-responsive">
                                                    <div
                                                        id="UserTable_wrapper"
                                                        className="dataTables_wrapper dt-bootstrap4 no-footer"
                                                    >
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-6">
                                                                <div
                                                                    className="dataTables_length"
                                                                    id="UserTable_length"
                                                                >
                                                                    <label>
                                                                        Show{" "}
                                                                        <select
                                                                            name="UserTable_length"
                                                                            aria-controls="UserTable"
                                                                            className="custom-select custom-select-sm form-control form-control-sm"
                                                                        >
                                                                            <option value={10}>10</option>
                                                                            <option value={25}>25</option>
                                                                            <option value={50}>50</option>
                                                                            <option value={100}>100</option>
                                                                        </select>{" "}
                                                                        entries
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-6">
                                                                <div
                                                                    id="UserTable_filter"
                                                                    className="dataTables_filter"
                                                                >
                                                                    <label>
                                                                        Search:
                                                                        <input
                                                                            type="search"
                                                                            className="form-control form-control-sm"
                                                                            placeholder=""
                                                                            aria-controls="UserTable"
                                                                        />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <table
                                                                    id="UserTable"
                                                                    className="UserTable table table-hover text- dataTable no-footer"
                                                                    role="grid"
                                                                    aria-describedby="UserTable_info"
                                                                >
                                                                    <thead>
                                                                        <tr role="row">
                                                                            <th
                                                                                className="sorting_desc"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                style={{ width: 0 }}
                                                                                aria-sort="descending"
                                                                                aria-label="Amount requested: activate to sort column ascending"
                                                                            >
                                                                                Amount requested
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                style={{ width: 0 }}
                                                                                aria-label="Amount + charges: activate to sort column ascending"
                                                                            >
                                                                                Amount + charges
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                style={{ width: 0 }}
                                                                                aria-label="Recieving mode: activate to sort column ascending"
                                                                            >
                                                                                Recieving mode
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                style={{ width: 0 }}
                                                                                aria-label="Status: activate to sort column ascending"
                                                                            >
                                                                                Status
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                style={{ width: 0 }}
                                                                                aria-label="Date created: activate to sort column ascending"
                                                                            >
                                                                                Date created
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className="odd">
                                                                            <td
                                                                                valign="top"
                                                                                colSpan={5}
                                                                                className="dataTables_empty"
                                                                            >
                                                                                No data available in table
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-5">
                                                                <div
                                                                    className="dataTables_info"
                                                                    id="UserTable_info"
                                                                    role="status"
                                                                    aria-live="polite"
                                                                >
                                                                    Showing 0 to 0 of 0 entries
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-7">
                                                                <div
                                                                    className="dataTables_paginate paging_simple_numbers"
                                                                    id="UserTable_paginate"
                                                                >
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-contact"
                                                role="tabpanel"
                                                aria-labelledby="pills-contact-tab"
                                            >
                                                <div className="table-responsive">
                                                    <div
                                                        id="UserTable_wrapper"
                                                        className="dataTables_wrapper dt-bootstrap4 no-footer"
                                                    >
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-6">
                                                                <div
                                                                    className="dataTables_length"
                                                                    id="UserTable_length"
                                                                >
                                                                    <label>
                                                                        Show{" "}
                                                                        <select
                                                                            name="UserTable_length"
                                                                            aria-controls="UserTable"
                                                                            className="custom-select custom-select-sm form-control form-control-sm"
                                                                        >
                                                                            <option value={10}>10</option>
                                                                            <option value={25}>25</option>
                                                                            <option value={50}>50</option>
                                                                            <option value={100}>100</option>
                                                                        </select>{" "}
                                                                        entries
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-12 col-md-6">
                                                                <div
                                                                    id="UserTable_filter"
                                                                    className="dataTables_filter"
                                                                >
                                                                    <label>
                                                                        Search:
                                                                        <input
                                                                            type="search"
                                                                            className="form-control form-control-sm"
                                                                            placeholder=""
                                                                            aria-controls="UserTable"
                                                                        />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <table
                                                                    id="UserTable"
                                                                    className="UserTable table table-hover text- dataTable no-footer"
                                                                    role="grid"
                                                                    aria-describedby="UserTable_info"
                                                                >
                                                                    <thead>
                                                                        <tr role="row">
                                                                            <th
                                                                                className="sorting_desc"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                style={{ width: 0 }}
                                                                                aria-sort="descending"
                                                                                aria-label="Amount: activate to sort column ascending"
                                                                            >
                                                                                Amount
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                style={{ width: 0 }}
                                                                                aria-label="Type: activate to sort column ascending"
                                                                            >
                                                                                Type
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                style={{ width: 0 }}
                                                                                aria-label="Plan/Narration: activate to sort column ascending"
                                                                            >
                                                                                Plan/Narration
                                                                            </th>
                                                                            <th
                                                                                className="sorting"
                                                                                tabIndex={0}
                                                                                aria-controls="UserTable"
                                                                                rowSpan={1}
                                                                                colSpan={1}
                                                                                style={{ width: 0 }}
                                                                                aria-label="Date created: activate to sort column ascending"
                                                                            >
                                                                                Date created
                                                                            </th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr className="odd">
                                                                            <td
                                                                                valign="top"
                                                                                colSpan={4}
                                                                                className="dataTables_empty"
                                                                            >
                                                                                No data available in table
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12 col-md-5">
                                                                <div
                                                                    className="dataTables_info"
                                                                    id="UserTable_info"
                                                                    role="status"
                                                                    aria-live="polite"
                                                                >
                                                                    Showing 0 to 0 of 0 entries
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
                    </div>
                    {/* Footer */}
                    <div
                        className="pt-5 pb-4 footer footer-light sticky-bottom"
                        id="footer-main"
                    >
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