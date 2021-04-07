import {SearchPanel} from './search-panel'
import {List} from './list'
import {useState,useEffect} from 'react'
import * as qs from 'qs'//url参数处理
import {cleanObject,useMount,useDebounce} from '../../utils'
import { useHttp } from 'utils/http'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users,setUsers] = useState([])
    const [param,setParam] = useState({
        name: '',
        personId: ''
    })
    const [list,setList] = useState([])
    const debouncedParam = useDebounce(param , 2000)//当我们调用setParam React会再次渲染组件
    const client = useHttp()//异步请求fetch钩子
    useEffect(() => { 
        client('projects',{data:cleanObject(debouncedParam)}).then(setList) 
    },[debouncedParam])
    

    useMount(()=>{
        client('users').then(setUsers)
    })
    return <div>
        <SearchPanel users = {users} param = {param} setParam = {setParam}/>
        <List list = {list} users={users} />
    </div>
}