import { throws } from "assert";

class Human {
    // js에 interface를 넣고 싶을때 class를 만든디.
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lynn = new Human('Lynn', 18, 'female')
const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
}

console.log(sayHi(lynn));
export { }; // 버그