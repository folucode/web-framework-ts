import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  id = this.get("id");

  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/${this.id}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    if (this.id) {
      axios.put(`http://localhost:3000/users/${this.id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
