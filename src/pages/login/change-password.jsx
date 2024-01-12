import supabase from "../../utils/client"
import { useState } from "react"
import {toast} from "react-toastify"
import { Link } from "react-router-dom"

export default function Change(){

    const [password, setPassword] = useState("")
    const [pass, setPass] = useState("")

    async function updatePassword(e) {
        e.preventDefault()
        if(pass !== password) return toast.warn("Passwords do not match")
        await supabase.auth.updateUser({ password: password })
        toast.success("password updated")
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
                                    <div className="" id="pas">
                                        <form onSubmit={updatePassword}>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label className="">New Password</label>
                                                    <input
                                                        onChange={(e)=> setPassword(e.target.value)}
                                                        value={password}
                                                        type="password"
                                                        name="password"
                                                        className="form-control"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label className="">Confirm New Password</label>
                                                    <input
                                                        onChange={(e)=> setPass(e.target.value)}
                                                        value={pass}
                                                        type="password"
                                                        name="password_confirmation"
                                                        className=" form-control"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Update Password
                                            </button>
                                        </form>

                                        <Link
                                            to="/login"
                                            className="text-dark font-weight-bold"
                                        >
                                            Login
                                        </Link>
                                    </div>
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