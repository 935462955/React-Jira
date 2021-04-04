import { useEffect,useState} from 'react';
function isFalsy(x){
    return x === 0 ? false : !x
}
export const cleanObject = (obj) => {
    const result = {...obj}
    const keys = Object.keys(result)
    for(let key of keys)
    {
        if(isFalsy(result[key]))
        delete result[key]
    }
    return result
}


export const useDebounce  = (value,delay) => {
    const [debouncedValue , setDebouncedValue] = useState(value)
    useEffect(()=>{
        //每次在value变化以后，设置一个定时器
       const timeout = setTimeout(() => setDebouncedValue(value), delay)
       return  () => clearTimeout(timeout)
    },[value,delay])
    return debouncedValue
}

export const useMount = (callback) => {
    useEffect(()=>{
       callback() 
    },[])
}
    
