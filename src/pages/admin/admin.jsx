import "./admin.css"
import supabase from "../../utils/client"
import {  useEffect, useState } from "react"

export default function Admin() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [edit, setEdit] = useState(false)
    const [balance, setBalance] = useState(0)
    const [id, setId] = useState("")
    const [transactions, setTransactions] = useState([])


    const getUsers = async function () {

        try {
            const { data, error } = await supabase
                .from("users")
                .select()
            if (error) return console.log(error.message)
            setUsers(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUsers() 
    },[])

    async function updateBalance(e){
        e.preventDefault()
        try {
            const { error } = await supabase
                .from('users')
                .update({ balance: balance })
                .eq('id', id )
                if(error) return console.log(error.message)
                getUsers()
                alert("balance updated")
        } catch (error) {
            console.log(error)
        }
    }

    async function updateStatus(e) {

        const id = e.target.getAttribute("data-id")
        console.log(id)
        try {
            const { error } = await supabase
                .from('transactions')
                .update({ status: "complete" })
                .eq('id', id)
            if (error) return console.log(error.message)
            getUsers()
            alert("Transaction status updated")
        } catch (error) {
            console.log(error)
        }
    }

    async function fecthUser(e) {

        const id = e.target.getAttribute("data-id")

        console.log(id)

        setId(id)

        try {
            const { data, error } = await supabase
                .from("users")
                .select("*")
                .eq("id", id)
            if (error) return console.log(error.message)
            setUser(data[0]);
            setEdit(true)
            setBalance(data[0].balance)
        } catch (error) {
            console.log(error)
        }

        try {
            const { data, error } = await supabase
                .from("transactions")
                .select("*")
                .eq("user_id", id)
            if (error) return console.log(error.message)
            setTransactions(data)
            console.log(transactions)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <p style={{textAlign:"center", fontWeight: "bold", padding: "1rem"}}>All users</p>

            <div className="users-container">
                <div className="wrapper">
                    {users.map((user)=> (
                        <div key={user.id} className="user-details">
                            <span><i className="fa-solid fa-circle-user fa-2x"></i></span>
                            <span className="user-name">{user.full_name}</span>
                            <span className="user-name">${user.balance}</span>
                            <button data-id={user.id} onClick={fecthUser} className="btn-success user-btn">Edit</button>
                        </div> 
                    ))}
                </div>
            </div>
           { edit ? ( <div className="control-panel">

                <form className="control-panel-form">

                    <span><i className="fa-solid fa-circle-user fa-4x"></i></span> 
                    
                    <span>{user.full_name}</span>

                    <i>{user.email}</i>

                    <div className="form-group">
                        <label htmlFor="">Balance</label>
                        <input onChange={(e)=> setBalance(e.target.value)} value={balance} type="text" />
                    </div>

                    <div style={{background: "#fff"}} className="transaction-list">
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
                                                aria-label="Status: activate to sort column ascending"
                                                style={{ width: "195.95px" }}
                                            >
                                                Status
                                            </th>
                                        
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions && transactions.map((transaction) => (
                                            <tr key={transaction.id} role="row" className="odd">
                                                <td className="sorting_1">${transaction.value}</td>
                                                <td>
                                                    <span onClick={updateStatus} data-id={transaction.id} className="badge badge-danger">{transaction.status}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <button onClick={updateBalance} className="btn-success confirm-btn">update</button>
                    <button onClick={()=> setEdit(false)} className="btn-success confirm-btn">done</button>
                    
                </form>

            </div>) : null}
        </>
    )
}