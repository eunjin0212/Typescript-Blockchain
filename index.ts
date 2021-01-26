const name = 'Jin',
    age = 28,
    gender = 'female'
const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`)
}
sayHi(name, age)
export { }; // 버그