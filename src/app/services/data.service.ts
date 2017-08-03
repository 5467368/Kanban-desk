import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	get tasks(): TaskInfo[] {
		return this._tasks;
	}

	set tasks(value: TaskInfo[]) {
		this._tasks = value;
		DataService.saveJSON(this._tasks);
	}

	panelsTitles: any = [
		{ title: 'DO IT', panelClass: 'primary' },
		{ title: 'IN PROGRESS', panelClass: 'warning' },
		{ title: 'DONE', panelClass: 'success' },
		{ title: 'ABORTED', panelClass: 'danger' }
	];

	private _tasks: TaskInfo[] = [];

	constructor() {
		this._tasks = DataService.loadJSON();
	}

	static loadJSON(): any {
		try {
			return JSON.parse(window.localStorage['tasksList']);
		} catch (error) {
			alert("No local data to load!");
			return [];
		}

	}

	static saveJSON(data: any) {
		try {
			window.localStorage['tasksList'] = JSON.stringify(data || null);
		} catch (error) {
			alert("Cannot store data!" + error);
		}

	}
}

interface TaskInfo {
	header: string,
	content: string,
	step: number,
	priority: number,
	date: any,
	showEditTask: boolean
}