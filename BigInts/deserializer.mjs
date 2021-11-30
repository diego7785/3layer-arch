function deserializeHelper(obj) {
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === 'object'){
          deserialize(obj[key])
        }

        if(typeof obj[key] === 'string' && /^[0-9]+n$/.test(obj[key])){
          obj[key] = BigInt(obj[key].replace('n', ''))
        }
      })
    
      return obj
}

export default function deserialize(obj) {
    return JSON.parse(deserializeHelper(obj))
}
