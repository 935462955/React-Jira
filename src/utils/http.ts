import qs from "qs"
import * as auth from '../auth-provider'
import { useAuth } from 'context/auth-context';

const apiUrl = process.env.REACT_APP_API_URL

interface Config extends RequestInit{
    data?:object,
    token?:string
}
//封装fetch请求包含token验证 但是还是需要手动将token传入所以需要再弄一个hook
//第二个参数给一个默认值就是可选参数了
export const http =  async(endpoint:string,{data,token,headers,...customConfig}:Config = {}) => {
    const config = {
        method: 'GET' , //这是默认值，会被customConfig覆盖
        headers:{
            Authorization: token ? `Bearer ${token}` : '',
            'Content-Type' : data? 'application/json' : '',
        },
        ...customConfig
    }
    if(config.method.toUpperCase() === 'GET')
    {
        endpoint += `?${qs.stringify(data)}`
    }
    else{
        config.body = JSON.stringify(data || {})
    }
    //axios 和 fetch 的表现不一样，axios可以直接在返回状态不为2xx的时候抛出异常
    return window.fetch(`${apiUrl}/${endpoint}`,config).then(async response=>{
        if(response.status === 401)//未授权
        {
            await auth.logout()
            window.location.reload()//退出登录重新加载
            return Promise.reject({message:'请重新登录'})
        }
        const data = await response.json()
        if(response.ok)
        {
            return data
        }
        else
        {
            return Promise.reject(data)
        }
    })
}

export const useHttp = ()=>{
    const {user} = useAuth()
    //参数类型是和http函数一样
    return (...[endpoint,config]:Parameters<typeof http>) => http(endpoint,{...config,token:user?.token})
}
