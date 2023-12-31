import { Link } from "react-router-dom"

export default function Login() {


    return (
        <>
            <section className=" auth">
                <div className="container">
                    <div className="pb-3 row justify-content-center">

                        <div className="col-12 col-md-6 col-lg-6 col-sm-10 col-xl-6">
                            <div className="text-center">
                                <a href="/"><img
                                    src="https://valuetrades.online/storage/app/public/photos/6XnjHMDGr02c8SZKHkaNzl6aA4dEtvfvCjkntkgG.png"
                                    alt="" className="mb-3 img-fluid auth__logo"/></a>
                            </div>

                            <div className="bg-white shadow card login-page roundedd border-1 ">
                                <div className="card-body">
                                    <h4 className="text-center card-title">User Login</h4>
                                    <form method="POST" action="https://valuetrades.online/login" className="mt-4 login-form">
                                        <input type="hidden" name="_token" value="KOrGxEGcpVCxXYPvVkB5mwg1aVuLv0Z3wMB3OSSi"/>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Your Email <span className="text-danger">*</span></label>
                                                        <div className="position-relative">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                                className="feather feather-mail fea icon-sm icons">
                                                                <path
                                                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                                                                </path>
                                                                <polyline points="22,6 12,13 2,6"></polyline>
                                                            </svg>
                                                            <input type="email" className="pl-5 form-control" name="email" value=""
                                                                id="email" placeholder="name@example.com" required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Password <span className="text-danger">*</span></label>
                                                        <div className="position-relative">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                                className="feather feather-key fea icon-sm icons">
                                                                <path
                                                                    d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
                                                                </path>
                                                            </svg>
                                                            <input type="password" className="pl-5 form-control" name="password"
                                                                id="password" placeholder="Enter Password" required=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                                <div className="col-lg-12">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="form-group">
                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                    id="customCheck1" name="remember"/>
                                                                    <label className="custom-control-label" for="customCheck1">Remember
                                                                        me</label>
                                                            </div>
                                                        </div>
                                                        <p className="mb-0 forgot-pass"><a
                                                            href="https://valuetrades.online/forgot-password"
                                                            className="text-dark font-weight-bold">Forgot password ?</a></p>
                                                    </div>
                                                </div>

                                                <div className="mb-0 col-lg-12">
                                                    <button className="btn btn-primary btn-block pad" type="submit">Sign in</button>
                                                </div>

                                                <div className="mt-4 text-center col-lg-12">
                                                </div>
                                                
                                                <div className="text-center col-12">
                                                    <p className="mt-3 mb-0"><small className="mr-2 text-dark">Don't have an account
                                                        ?</small> <a href="https://valuetrades.online/register"
                                                            className="text-dark font-weight-bold">Sign Up</a></p>
                                                </div>
                                                

                                                <div className="text-center col-12">
                                                    <p className="mt-4 mb-0"><small className="mr-2 text-dark">© Copyright 2023 &nbsp; Value
                                                        Trades &nbsp; All Rights Reserved.</small>
                                                    </p>
                                                </div>
                                            </div>
                                           
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                
            </section>
        </>
    )
}