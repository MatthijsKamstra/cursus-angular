import { Component } from '@angular/core';



@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '03_array';

	_stringArray: string[] = ['zero', 'one', 'two'];
	_booleanArray: boolean[] = [true, false, true];
	_numberArray: number[] = [0, 1, 2];

	constructor() { }

	func() {
		for (let i = 0; i < this._stringArray.length; i++) {
			const _string = this._stringArray[i];
			console.log(_string);
		}
	}
}
