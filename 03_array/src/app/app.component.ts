import { Component } from '@angular/core';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '03_array';

	stringArray: string[] = ['zero', 'one', 'two'];
	booleanArray: boolean[] = [true, false, true];
	numberArray: number[] = [0, 1, 2];

	constructor() { }

	func() {
		for (let i = 0; i < this.stringArray.length; i++) {
			const _string = this.stringArray[i];
			console.log(_string);
		}
	}
}
