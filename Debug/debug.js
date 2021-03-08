// console.log("Hello World")

// const x = 5 + 5 + 5

// const x = () => {
//     return 5
// }

// console.log(x())

// const cheese = "bread"

// console.log(cheese)

const reverseString = (str) => {
    // return str.split().reverse().join() 
    // Break into smaller steps and console.log each step.

    // Console.count helps you count steps along the way to see where there may be an error in your code.
    // Shows how many times method has been called.
    // console.count("reverseString")

    // See how long a function is taking to run.
    console.time("reverseString") // Starts timer

    const split = str.split("") // .split()
    // console.log(split)
    // console.count("reverseString")

    
    const reverse = split.reverse() // .reverse()
    // console.log(reverse)
    // console.count("reverseString")


    const final = reverse.join("") // .join()
    // console.log(final)
    // console.count("reverseString")

    console.timeEnd("reverseString") //Ends timer
    return final
}

console.log(reverseString("Hello"))

// console.table({name: "Gore Sometimes", age: 32})
// A technique to check data within an object.

// console.log("OBJECT: ", {name: "Gore Sometimes", age: 32})