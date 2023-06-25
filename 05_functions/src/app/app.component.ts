import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '05_functions';

	hello(): string {
		return 'Hello World';
	}
	helloName(name: string): string {
		return `Hello ${name}`;
	}
}
