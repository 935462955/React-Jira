//未登录状态界面
import { useAuth } from "context/auth-context"
import { ChangeEvent, FormEvent,MouseEvent, useState} from "react"
const apiUrl = process.env.REACT_APP_API_URL

export const LoginScreen = ()=>{
    const {login,register,user} = useAuth() //全局登录信息和方法
    const handleSubmit = (event: FormEvent<HTMLFormElement> )=>{
         event.preventDefault()
         const username = (event.currentTarget.elements[0] as HTMLInputElement).value
         const password = (event.currentTarget.elements[1] as HTMLInputElement).value
         login({username,password})
    }
    
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    return (
        <form onSubmit={handleSubmit}>
           
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id='username' value={username} onChange={(e:ChangeEvent<HTMLInputElement>)=> setUsername(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="password" id="password" value={password} onChange={(e:ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}/>
            </div>
            <button type="submit">登录</button>
          
        </form>
    )
}