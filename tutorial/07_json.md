# json

Json is Javascript Object Notatie?

## Setup

```bash
ng new 07_json --routing false --style css
```

## JSON example

```json
{
  "object": { "data": "test" },
  "string": "string",
  "bool": true,
  "array": ["zero", "one", "two"]
}
```

## 3 methodes for using json in Angular

- embedding json
- locally loading
- external loading

### 1. Embedding json

example json

```ts
const _array = [
  { superhero: "Batman" },
  { superhero: "Superman" },
  { superhero: "Flash" },
];
```

embedding

```ts
import { Component, OnInit } from "@angular/core";
import data from "./heros_embed.json"; // 👈 embed from same folder

interface IHero {
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

@Component({
  selector: "app-embed",
  templateUrl: "./embed.component.html",
  styleUrls: ["./embed.component.scss"],
})
export class EmbedComponent implements OnInit {
  title = "Embed JSON";

  heroes: IHero[] = data; // 👈 use embed

  constructor() {}

  ngOnInit(): void {}
}
```

html template

```html
<h2>{{title}}</h2>

<table class="table">
  <thead>
    <tr>
      <th></th>
      <th>superhero</th>
      <th>publisher</th>
      <th>alter_ego</th>
      <th>first_appearance</th>
      <th>characters</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let hero of heroes;let i=index;">
      <th scope="row">{{i+1}}</th>
      <td>{{ hero.superhero }}</td>
      <td>{{ hero.publisher }}</td>
      <td>{{ hero.alter_ego }}</td>
      <td>{{ hero.first_appearance }}</td>
      <td>{{ hero.characters }}</td>
    </tr>
  </tbody>
</table>
```

### 2. locally loading

/Users/matthijskamstra/Documents/GIT/learn_angular/03_json/src/app/component/employees/employees.component.ts

### 3. external loading

/Users/matthijskamstra/Documents/GIT/learn_angular/03_json/src/app/component/json-placeholder/json-placeholder.component.ts

## ts types

use online converter

- https://transform.tools/json-to-typescript
