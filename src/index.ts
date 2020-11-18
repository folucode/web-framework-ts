import { User } from "./models/User";

const user = new User({ name: "Tosin", age: 23 });
user.set({name: "Tade", age: 20})

console.log(user.get('age'));
