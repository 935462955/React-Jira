import {SearchPanel} from './search-panel'
import {List} from './list'
import {useState,useEffect} from 'react'

export const ProjectListScreen = () => {
    const [param,setParam] = useState({
        name: '',
        personId: ''
    })
    const [list,setList] = useState([])
    useEffect(() => {
        fetch('').then(async response => {
            if(response.ok){
                setList(await response.json())
            }
            
        })
    },[param])//第二个参数是依赖，当这个参数改变时才触发钩子
    return <div>
        <SearchPanel param = {param} setParam = {setParam}/>
        <List list = {list}/>
    </div>
}