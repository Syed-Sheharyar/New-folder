interface User<T> {
   name: string;
   email: string;
   password?: string;
   func?: (arg0: T) => T;
}

let obj: User<number> = {
    name: 'test',
    email: 'test@test.com',
    password: 'test',
    func: (str) => str,
}

// Calling the optional function
let val = obj.func?.(99)
console.log(val ?? val);

class Users implements User<string> {
    constructor(public name: string, public email: string){}

    get MyName() {return this.name}
    set setName(name: string) {this.name = name}
    static fn() {return this.fn}
    func(str:string) {return str}
}

console.log(Users.fn());
const user1 = new Users("name1", "email1")
console.log(user1.MyName);
console.log(user1.setName = "name2");
console.log(user1.MyName);
console.log(user1.func(user1.email));
