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

    
