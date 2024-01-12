import {Link} from "react-router-dom"
import { useState } from "react"
import supabase from "../../utils/client"
import {toast} from "react-toastify"

export default function Reset() {

    const [email, setEmail] = useState("")
    
async function handleReset(e) {
    e.preventDefault()
    await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://www.valuetrades.site/reset-password',
    })
    toast.success("A password reset link has been sent to your email")

}

    return (
        
        <>

            <section className=" auth">
                <div className="container">
                    <div className="pb-3 row justify-content-center">
                        <div className="col-12 col-md-6 col-lg-6 col-sm-10 col-xl-6">
                            <div className="bg-white shadow card login-page roundedd border-1 ">
                                <div className="card-body">
                                    <h4 className="text-center card-title">Password Reset</h4>
                                    <form onSubmit={handleReset} className="mt-4 login-form">
                                        <input
                                            type="hidden"
                                            name="_token"
                                            defaultValue="fn1rbdhSeyCUY0rs3fuadwnTt6oP9IhwQvhIFUOq"
                                        />{" "}
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>
                                                        Your Email <span className="text-danger">*</span>
                                                    </label>
                                                    <div className="position-relative">
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
                                                            className="feather feather-mail fea icon-sm icons"
                                                        >
                                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                            <polyline points="22,6 12,13 2,6" />
                                                        </svg>
                                                        <input
                                                            onChange={(e)=> setEmail(e.target.value)}
                                                            type="email"
                                                            className="pl-5 form-control"
                                                            name="email"
                                                            value={email}
                                                            id="email"
                                                            placeholder="name@example.com"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/*end col*/}
                                            <div className="mb-0 col-lg-12">
                                                <button
                                                    className="btn btn-primary btn-block pad"
                                                    type="submit"
                                                >
                                                    Email Password Reset Link
                                                </button>
                                            </div>
                                            {/*end col*/}
                                            <div className="text-center col-12">
                                                <p className="mt-3 mb-0">
                                                    <small className="mr-2 text-dark">Repeat Login ?</small>{" "}
                                                    <Link
                                                        to="/login"
                                                        className="text-dark font-weight-bold"
                                                    >
                                                        Login
                                                    </Link>
                                                </p>
                                            </div>
                                            {/*end col*/}
                                            <div className="text-center col-12">
                                                <p className="mt-4 mb-0">
                                                    <small className="mr-2 text-dark">
                                                        © Copyright 2024 &nbsp; Value Trades &nbsp; All Rights
                                                        Reserved.
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                        {/*end row*/}
                                    </form>
                                </div>
                            </div>
                            {/**/}
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                {/*end container*/}
            </section>


        </>
    )
}