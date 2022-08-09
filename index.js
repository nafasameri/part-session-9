class User {
    _id;
    name;
    age;
    static #NAMES = [];

    constructor(name, age) {
        if (User.NAMES.indexOf(name) == -1) {
            User.NAMES.push(name);
            this._id = Math.round(Math.random() * 10);
            this.name = name;
            this.age = age;
        }
        else
            throw new Error('this name exist!');
    }
}
user1 = new User('hfdjd', 34);
console.log(user1);
user2 = new User('jfsds', 54);
console.log(user2);
user3 = new User('hfdjd', 43);
console.log(user3);