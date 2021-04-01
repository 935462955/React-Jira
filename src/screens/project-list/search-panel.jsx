import {useState} from "react"
export const SearchPanel = ()=>{
    const [param,setParam] = useState({
        name: '',
        personId: ''
    })
    const [users,setUsers] = useState([])
    const [list,setList] = useState([])
    useEffect(() => {
        fetch('').then(async response => {
            if(response.ok){
                setList(await response.json())
            }
            
        })
    },[param])//第二个参数是依赖，当这个参数改变时才触发钩子
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