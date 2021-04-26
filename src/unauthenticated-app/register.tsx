//未登录状态界面
import { useAuth } from "context/auth-context"
import { ChangeEvent,  useState} from "react"
import { Form , Input,Button} from 'antd';
const apiUrl = process.env.REACT_APP_API_URL

export const RegisterScreen = ()=>{
    const {register,user} = useAuth() //全局登录信息和方法
    
    const handleRegistor = (values:{username:string,password:string}) => {
         register(values)
    }
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    return (
        <Form onFinish={handleRegistor}>
           
            <Form.Item name="username" rules={[{required:true,message:"请输入用户名"}]}>{/* name属性用于函数的参数类型推断 */}
                
                <Input placeholder='用户名' type="text" id='username' value={username} onChange={(e:ChangeEvent<HTMLInputElement>)=> setUsername(e.target.value)}/>
            </Form.Item>
            <Form.Item  name="password" rules={[{required:true,message:"请输入密码"}]}>
                
                <Input placeholder="密码" type="password" id="password" value={password} onChange={(e:ChangeEvent<HTMLInputElement>)=> setPassword(e.target.value)}/>
            </Form.Item>
            <Form.Item>
            <Button htmlType="submit" type="primary">注册</Button>
            </Form.Item>
            
          
        </Form>
    )
}