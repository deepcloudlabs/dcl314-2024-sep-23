numbers = [4, 8, undefined, 15, 16, undefined, 23, 42]
let sum = 0
for (let number of numbers) { // external loop
    if (number)
        sum += number
}
console.log(sum)
