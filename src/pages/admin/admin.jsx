import "./admin.css"
import supabase from "../../utils/client"
import {  useEffect, useState } from "react"

export default function Admin() {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [edit, setEdit] = useState(false)
    const [balance, setBalance] = useState(0)
    const [id, setId] = useState("")
    // const [loading, setLoading] = useState(false)


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

    async function fecthUser(e) {

        const id = e.target.getAttribute("data-id")

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
                    
                    <button onClick={updateBalance} className="btn-success confirm-btn">update</button>
                    <button onClick={()=> setEdit(false)} className="btn-success confirm-btn">done</button>
                    
                </form>

            </div>) : null}
        </>
    )
}