import React, { ReactNode, useState } from "react"
import * as auth from 'auth-provider'
import { User } from "screens/project-list/search-panel"
import { http } from "utils/http";
import { useMount } from "utils";

interface AuthForm {
    username: string,
    password: string
}
const AuthContext =  React.createContext<{ 
    user:User|null,
    login: (form:AuthForm)=>Promise<void>,
    register:(form:AuthForm)=>Promise<void>,
    logout:()=>Promise<void>
}|undefined>(undefined)

const bootstrapUser = async() => {
    let user = null
    const token = auth.getToken()//从localstorage读取token
    if(token){
        const data = await http('me', {token})//通过token请求me api 获取当前用户信息
        user = data.user
    }
    return user
}

AuthContext.displayName = 'AuthContext'
//children是传给子组件的jsx内容
export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user,setUser] = useState<User|null>(null) //刷新以后就是null

    const login = (form:AuthForm) => auth.login(form).then(setUser)
    const register = (form:AuthForm) => auth.register(form).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))
    
    useMount(()=>{
        bootstrapUser().then(setUser)
    })
    //children是 正文slot
    return <AuthContext.Provider children={children} value={{user,login,register,logout}} />
}

export const useAuth = () => {
    const context = React.useContext(AuthContext) //接受一个context对象（React.createContext的返回值）并返回该context的当前值
    //等价于 static contextType = AuthContext
    if(!context)
    {
        throw new Error("useAuth必须在AuthProvider中使用")
    }
    return context
}
