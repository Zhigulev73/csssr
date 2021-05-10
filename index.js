const sum = (args) => args.reduce((prev, curr) => prev + curr)
const defn = (functionName, args, body) => {
   return sum(args)
}
let arr1 = []
let arr2 = []
let functionName = ''
const interpret = (...code) => {
    for (let arr of code ) {
        if (arr[0] === defn) {
            arr1 = arr
            functionName = arr1[1]
        } else if (arr[0] === functionName) {
            arr2 = arr
        }
        arr2.splice(0, 1)
    }
   return defn(arr1[1], arr2, arr1[3])
}

// Пример вызова функции interpret
const result = interpret(
    [defn, "sum3", ['a', 'b', 'c'], [sum, 'a', 'b', 'c']],
    ['sum3', 10, 20, 30]
)

console.log(result)
console.assert(result === 60)