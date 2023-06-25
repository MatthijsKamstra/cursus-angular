import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '02_basic_types';

	_string: string = 'this is a string';
	_boolean: boolean = true;
	_number: number = 2;
}
