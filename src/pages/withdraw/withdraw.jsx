import { Link, useNavigate } from "react-router-dom";
import supabase from "../../utils/client";
import { useEffect, useState } from "react";
import logo from "../../assets/img/value.png";

export default function Withdraw() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");

  const userToken = localStorage.getItem("userToken");

  useEffect(() => {
    const getData = async function () {
      try {
        const { data, error } = await supabase
          .from("users")
          .select("*")
          .eq("id", userToken);
        if (error) return console.log(error.message);
        setUser(data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="container-fluid container-application">
        {/* Sidenav */}
        <div className="sidenav" id="sidenav-main">
          {/* Sidenav header */}
          <div className="sidenav-header d-flex align-items-center">
            <Link className="navbar-brand" to="/dashboard">
              <img src={logo} className="navbar-brand-img" alt="logo" />
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
                <Link
                  to="#"
                  className="shadow custom-btn btn btn-sm btn-white btn-icon rounded-pill hover-translate-y-n3"
                >
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
              <span className="pt-2 btn-inner--icon d-block">
                Trading Plans
              </span>
            </Link>
          </div>
          {/* Misc area */}
          <div className="card bg-gradient-warning">
            <div className="card-body">
              <h5 className="text-white">Need Help!</h5>
              <p className="mb-4 text-white">
                Contact our 24/7 customer support center
              </p>
              <Link
                className="btn btn-sm btn-block btn-white rounded-pill"
                to="/contact"
              >
                Contact Us
              </Link>
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
                  <img src={logo} className="navbar-brand-img" alt="..." />
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
                      <h6 className="px-0 dropdown-header">
                        Hi, {user.full_name}!
                      </h6>
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
                      <h6 className="px-0 dropdown-header">
                        Hi, {user.full_name}!
                      </h6>
                      <Link className="dropdown-item" to="/account">
                        <i className="fa fa-user" />
                        <span>My profile</span>
                      </Link>
                      <div className="dropdown-divider" />
                      {/* <Link to="#" className="dropdown-item text-danger">
                                                <i className="fa fa-sign-out-alt" />
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
            </div>
          </nav>
          {/* Page content */}
          <div className="page-content">
            {/* Page title */}
            <div className="page-title">
              <div className="row justify-content-between align-items-center">
                <div className="mb-3 col-md-6 mb-md-0">
                  <h5 className="mb-0 text-white h3 font-weight-400">
                    Place a withdrawal request
                  </h5>
                </div>
              </div>
            </div>
            <div></div> <div></div>{" "}
            <div className="row">
              <div className="my-5 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="my-5 row d-flex nowrap">
                      <div className="mb-4 col-lg-4">
                        <div className="card-deck">
                          <div className="text-center border-0 rounded-lg shadow-lg card card-pricing hover-scale-110 bg-primary popular">
                            <div className="py-0 border-0 card-header">
                              <span className="px-4 py-1 mx-auto bg-white shadow-sm h6 d-inline-block rounded-bottom">
                                Bitcoin
                              </span>
                              <div className="py-5">
                                {/* <img
                                  src="https://valuetrades.online/dash2/img/svg/illustrations/method.svg"
                                  alt="withdrawal method image"
                                  srcSet=""
                                  className="img-fluid img-center"
                                  style={{ height: 90 }}
                                /> */}
                              </div>
                            </div>
                            <hr className="my-0 divider divider-fade divider-dark" />
                            <div className="card-body">
                              <ul className="mb-4 text-white list-unstyled">
                                <li>
                                  <small>Minimum withdrawable amount</small>
                                  <p className="text-white h5">$100</p>
                                </li>
                                <li>
                                  <small>Maximum withdrawable amount</small>
                                  <p className="text-white h5">$10,000</p>
                                </li>
                                <li>
                                  Charge Type: <strong>percentage</strong>
                                </li>
                                <li>
                                  Charges Amount:
                                  <strong>0%</strong>
                                </li>
                                <li>
                                  Duration: <strong>Instant</strong>
                                </li>
                              </ul>
                              <form
                                action="https://valuetrades.online/dashboard/enter-amount"
                                method="POST"
                              >
                                <input
                                  type="hidden"
                                  name="_token"
                                  defaultValue="7536KJUbxS10OC1e0YDD0woKFjM3PpdRK64C86vf"
                                />{" "}
                                <div className="form-group">
                                  <input
                                    type="hidden"
                                    defaultValue="Bitcoin"
                                    name="method"
                                  />
                                  <button
                                    onClick={() => navigate("/confirm-withraw")}
                                    className="mb-3 btn btn-sm btn-neutral"
                                  >
                                    <i className="fa fa-plus" /> Request
                                    withdrawal
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Withdrawal Modal */}
                    <div
                      id="withdrawdisabled"
                      className="modal fade"
                      role="dialog"
                    >
                      <div className="modal-dialog">
                        {/* Modal content*/}
                        <div className="modal-content">
                          <div className="modal-header ">
                            <h6 className="modal-title">Withdrawal Status</h6>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body ">
                            <h6 className="">
                              Withdrawal is Disabled at the moment, Please check
                              back later
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Withdrawals Modal */}
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
  );
}
