"use strict";
var _a;
let obj = {
    name: 'test',
    email: 'test@test.com',
    password: 'test',
    func: (str) => str
};
let val = (_a = obj.func) === null || _a === void 0 ? void 0 : _a.call(obj, "pass");
console.log(val !== null && val !== void 0 ? val : val);
class Users {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    get MyName() { return this.name; }
    set setName(name) { this.name = name; }
    static fn() { return this.fn; }
    func(str) { return str; }
}
console.log(Users.fn());
const user1 = new Users("name1", "email1");
console.log(user1.MyName);
console.log(user1.setName = "name2");
console.log(user1.MyName);
console.log(user1.func(user1.email));
