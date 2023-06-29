# for loop

- [04_forloop/src/app/app.component.ts](/04_forloop/src/app/app.component.ts)
- [04_forloop/src/app/app.component.html](/04_forloop/src/app/app.component.html)

## Setup

```bash
ng new 04_forloop
```

## 3 methodes

- for loop
- for in loop
- for of loop

### 1. for loop

Basic loop

```ts
const stringArray: string[] = ["zero", "one", "two"];
for (let i = 0; i < this.stringArray.length; i++) {
  const _string = this.stringArray[i];
  console.log(_string);
}
```

### 2. for in loop

For in loop

```ts
const stringArray: string[] = ["zero", "one", "two"];
for (let i in this.stringArray) {
  const _string = this.stringArray[i];
  console.log(_string);
}
```

### 3. for of loop

For of loop

```ts
const stringArray: string[] = ["zero", "one", "two"];
for (let x of this.stringArray) {
  console.log(x);
}
```

## for of loop in templates

simple loop door array

```html
<ul>
  <li *ngFor="let string of stringArray">{{ string }}</li>
</ul>
```

simpele loop door array met index

```html
<ul>
  <li *ngFor="let string of stringArray; let i = index">
    {{i}} - {{ string }}
  </li>
</ul>
```
