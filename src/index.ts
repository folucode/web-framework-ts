import { User } from "./models/User";
import { UserForm } from "./models/UserForm";

const user = User.buildUser({ name: "Tosin", age: 23 });

const root = document.getElementById("root");

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("Root Element not found");
}
