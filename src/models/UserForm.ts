import { User } from "./User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.get-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventkey in eventsMap) {
      const [eventName, selector] = eventkey.split(":");

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventkey]);
      });
    }
  }

  template(): string {
    return `<div>
        <h1>Form</h1>
        <div>User Name: ${this.model.get("name")}</div>
        <div>User Age: ${this.model.get("age")}</div>
        <input type="text" value=${this.model.get("name")} />
        <button>Click</button>
        <button class="set-name">set name</button>
        <button class="set-age">set random age</button>
        </div>
        `;
  }

  public render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
