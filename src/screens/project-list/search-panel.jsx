import {useState} from "react"
export const SearchPanel = ({param,setParam})=>{
    const [users,setUsers] = useState([])
    
    return <form>
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}></input>
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}>
            {
            users.map(user => <option value={user.id}>{user.name}</option>)
            }
            </select>
        </div>
    </form>
}