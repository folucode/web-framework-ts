import { User } from "./models/User";

const user = new User({ name: "Tosin Moronfolu", age: 23 });

user.on("change", () => {
  console.log("a change event happened");
});

user.set({ name: "Tosin Moronfolu David" });
