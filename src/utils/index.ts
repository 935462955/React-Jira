import { useEffect,useState} from 'react';

function isFalsy(x : any){ //判断是否为Falsy 是则返回true（排除0，因为0可能是正常的取值） 
    return x === 0 ? false : !x
}

export const cleanObject = (obj : Object) => { //去除URL search部分没有值的参数
    const result : Object = {...obj}
    const keys : string[] = Object.keys(result)
    for(let key of keys)
    {
        //@ts-ignore
        if(isFalsy(result[key]))
        //@ts-ignore
        delete result[key]
    }
    return result
}


export const useDebounce  = <V>(value : V, delay ?: number):V => {
   
    const [debouncedValue , setDebouncedValue] = useState(value)
   
    useEffect(()=>{
        //每次在value变化以后，设置一个定时器
       const timeout = setTimeout(() => setDebouncedValue(value), delay)
       return  () => clearTimeout(timeout)
    },[value,delay])
    return debouncedValue
}

export const useMount = (callback : ()=> void) => {
    useEffect(()=>{
       callback() 
    },[])
}
    
