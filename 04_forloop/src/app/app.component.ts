import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '04_forloop';

	// TypeScript
	stringArray: string[] = ['zero', 'one', 'two'];
	booleanArray: boolean[] = [true, false, true];
	numberArray: number[] = [0, 1, 2];

	// JavaScript
	stringArrayJS: Array<string> = ['zero', 'one', 'two'];
	booleanArrayJS: Array<boolean> = [true, false, true];
	numberArrayJS: Array<number> = [0, 1, 2];


	constructor() {
		this.funcForLoop();
		this.funcForIn();
		this.funcForOf();
	}

	funcForLoop() {
		console.log('function with for loop');
		for (let i = 0; i < this.stringArray.length; i++) {
			const _string = this.stringArray[i];
			console.log(_string);
		}
	}

	funcForIn() {
		console.log('function with for in loop');
		for (let i in this.stringArray) {
			const _string = this.stringArray[i];
			console.log(_string);
		}
	}

	funcForOf() {
		console.log('function with for of loop');
		for (let x of this.stringArray) {
			const _string = x;
			console.log(_string);
		}
	}
}
