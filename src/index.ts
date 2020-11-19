import { User } from "./models/User";

const user = User.buildUser({ id: 1, name: "Tosin Moronfolu", age: 23 });

user.on("save", () => {
  console.log(user);
});

user.save();
