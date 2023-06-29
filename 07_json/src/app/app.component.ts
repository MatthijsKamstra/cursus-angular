import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import data from './heros_embed.json'; // 👈 embed from same folder

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = '07_json';

	heroes: IHero[] = data; // 👈 use embed

	employees!: IEmployee[];

	users: Array<User> = [];


	constructor(private http: HttpClient) {
		console.log(this.employees);
	}

	ngOnInit(): void {
		this.loadJsonLocal();
		this.loadJsonExternal();
	}

	loadJsonLocal() {
		this.http.get<Array<IEmployee>>('/assets/employees.json').subscribe(data => {
			this.employees = data;
		});
	}

	loadJsonExternal() {
		this.http.get<Array<User>>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
			this.users = data;
		});
	}

}

// hero

interface IHero {
	superhero: string;
	publisher: string;
	alter_ego: string;
	first_appearance: string;
	characters: string;
}

// employee

interface IEmployee {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
	website: string;
}

// users

export interface User {
	id: number
	name: string
	username: string
	email: string
	address: Address
	phone: string
	website: string
	company: Company
}

export interface Address {
	street: string
	suite: string
	city: string
	zipcode: string
	geo: Geo
}

export interface Geo {
	lat: string
	lng: string
}

export interface Company {
	name: string
	catchPhrase: string
	bs: string
}


