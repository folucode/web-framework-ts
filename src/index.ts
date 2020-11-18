import { User } from "./models/User";

const user = new User({ id: 1});
user.set({name: "Tosin Moronfolu", age: 23})
user.save();
