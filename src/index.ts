import { User } from "./models/User";

const user = User.buildUser({ name: "Tosin Moronfolu", age: 23 });

user.on("save", () => {
  console.log(user);
});

user.save();
