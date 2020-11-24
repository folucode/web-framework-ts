import { User } from "./models/User";
import { UserForm } from "./models/UserForm";

const user = User.buildUser({ name: "Tosin", age: 23 });
const userForm = new UserForm(document.getElementById("root"), user);

userForm.render();
