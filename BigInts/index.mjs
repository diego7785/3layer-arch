import serializer from "./serializer.mjs";
import deserialize from "./deserializer.mjs";

const myObj = {
    testNumber: 123,
    testBigInt: 987n,
    nested: {
      myProp: 5n,
      myProp2: 10,
      myArray: [5n],
      myObject: {
        test: 5n
      }
    },
    melon: 'melon',
    myArray: [5, 50n]
}

console.log('Serialize')
console.log(serializer(myObj))

console.log('Deserialize')
console.log(deserialize(serializer(myObj)))