import { User } from "./User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.click": this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log("Hi there");
  }

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
        <input />
        <button>Click</button>
        <button class="click">set random age</button>
        </div>
        `;
  }

  public render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
