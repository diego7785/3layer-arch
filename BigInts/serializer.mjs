function serializerHelper(obj){
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === 'object'){
            serializer(obj[key])
        }
        
        if(typeof obj[key] === 'bigint'){
            obj[key] = obj[key].toString() + 'n'
        }
    })
    
    return obj
}

export default function serializer(obj){
    return JSON.stringify(serializerHelper(obj))
}