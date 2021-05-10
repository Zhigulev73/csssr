const sum = (args) => args.reduce((prev, curr) => prev + curr)
const defn = (functionName, args, body) => {
   return body[0](args)
}

const interpret = (...code) => {
    let arr1 = []
    let args = []
    let body = []
    let functionName = ''
    for (let arr of code ) {
        if (arr[0] === defn) {
            arr1 = arr
            functionName = arr1[1]
        } else if (arr[0] === functionName) {
            args = arr
        }
        body = arr1[3]
        args.splice(0, 1)
    }
   return defn(arr1[1], args, body)
}

// Пример вызова функции interpret
const result = interpret(
    [defn, "sum3", ['a', 'b', 'c'], [sum, 'a', 'b', 'c']],
    ['sum3', 10, 20, 30]
)

console.log(result)
console.assert(result === 60)