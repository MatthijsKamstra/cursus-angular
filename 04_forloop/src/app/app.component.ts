import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '04_forloop';

	_stringArray: string[] = ['zero', 'one', 'two'];
	_booleanArray: boolean[] = [true, false, true];
	_numberArray: number[] = [0, 1, 2];

	constructor() {
		this.funcForLoop();
		this.funcForIn();
		this.funcForOf();
	}

	funcForLoop() {
		console.log('function with for loop');
		for (let i = 0; i < this._stringArray.length; i++) {
			const _string = this._stringArray[i];
			console.log(_string);
		}
	}

	funcForIn() {
		console.log('function with for in loop');
		for (let i in this._stringArray) {
			const _string = this._stringArray[i];
			console.log(_string);
		}
	}

	funcForOf() {
		console.log('function with for of loop');
		for (let x of this._stringArray) {
			const _string = x;
			console.log(_string);
		}
	}
}
