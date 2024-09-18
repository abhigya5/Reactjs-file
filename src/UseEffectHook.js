import React,{useEffect,useState} from 'react'

const UseEffecthook=()=>{
    const [users,setUser]=useState([])
    async function showApi (){
const res = await fetch ('https://dummyjson.com/users')
const data =await res.json()
// console.log(res)
// console.log(data.users)
console.table(data.users)
setUser(data.users)
    }
    useEffect(()=>{
        console.log("UseEffect Hook")
        showApi()

    })
    return (
        <>
        <div className='container table- table-responsive my-5'> 
            <table className='table table-hover tavle-stripped table-success'>
        <thead className='table-dark'>
        <tr>
        <th>SNo.</th>
        <th>Username</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Name</th>
        <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        {
             users.map((user, index) =>{
return (
    <tr key={index}>
        <td>{index+1}</td>
        <td>{user.username}</td>
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <td>{`${user.firstName}${user.lastName}`}</td>
        <td><img src={user.image}/></td>
    </tr>
) })
}
</tbody>
</table>
</div>
</>
)
}
export default UseEffecthook