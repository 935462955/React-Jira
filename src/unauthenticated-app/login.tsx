//未登录状态界面
import { useAuth } from "context/auth-context"
import React, { ChangeEvent, FormEvent,MouseEvent, useState} from "react"
import {Form,Input,Button} from "antd"
import FormItem from "antd/lib/form/FormItem"
const apiUrl = process.env.REACT_APP_API_URL

export const LoginScreen = ()=>{
    const {login,user} = useAuth() //全局登录信息和方法
    const handleSubmit = (values:{username:string,password:string})=>{
         login(values)
    }
    
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    return (
        <Form onFinish={handleSubmit}>
           
            <Form.Item name="username" rules={[{required:true,message:"请输入用户名"}]}>{/* name属性用于函数的参数类型推断 */}
                
                <Input placeholder='用户名' type="text" id='username' value={username} onChange={(e:ChangeEvent<HTMLInputElement>)=> setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item  name="password" rules={[{required:true,message:"请输入密码"}]}>
                
                <Input placeholder="密码" type="password" id="password" value={password} onChange={(e:ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item>
            <Button htmlType="submit" type="primary">登录</Button>
            </Form.Item>
            
          
        </Form>
    )
}