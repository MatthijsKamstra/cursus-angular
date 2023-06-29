import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '10_click';

	clickMessage = '';

	items = ['item1', 'item2', 'item3', 'item4'];

	addItem(newItem: string) {
		console.log(newItem);
		this.items.push(newItem);
	}

	onLogMe() {
		console.log('log me');
	}

	onCopyHandler() {
		console.log('onCopyHandler');
	}

	onEditClick(value: String) {
		window.alert(`onEditClick : value: ${value}`);
	}

	onClickMessage(e: MouseEvent) {
		console.log(e);
		this.clickMessage = (e.target as HTMLButtonElement).id;
	};
}
