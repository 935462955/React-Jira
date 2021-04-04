import {SearchPanel} from './search-panel'
import {List} from './list'
import {useState,useEffect} from 'react'
import * as qs from 'qs'//url参数处理
import {cleanObject,useMount,useDebounce} from '../../utils'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users,setUsers] = useState([])
    const [param,setParam] = useState({
        name: '',
        personId: ''
    })
    const [list,setList] = useState([])
    const debouncedParam = useDebounce(param , 2000)//当我们调用setParam React会再次渲染组件
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
            
            if(response.ok){
                setList(await response.json())
            }
            
        })
    },[debouncedParam])
    
    

    useMount(()=>{
        fetch(`${apiUrl}/users`).then( async response=>{
            if(response.ok){
                setUsers(await response.json())
            }
        })
    })
    return <div>
        <SearchPanel users = {users} param = {param} setParam = {setParam}/>
        <List list = {list} users={users} />
    </div>
}