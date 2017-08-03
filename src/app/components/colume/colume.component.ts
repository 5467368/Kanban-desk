import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {SortbyPipe} from '../../pipes/sortby.pipe';

@Component({
	selector: 'app-colume',
	templateUrl: './colume.component.html',
	styleUrls: ['./colume.component.css']
})
export class ColumeComponent implements OnInit {

	panels: any[];
	tasks: any[];

	constructor(private dataService: DataService) {
		this.panels = this.dataService.panelsTitles;
		this.tasks = this.dataService.tasks;
		if (!this.tasks) {
			this.tasks = [];
		}
	}

	ngOnInit() {
	}

	nextStep(i: number) {
		if (this.tasks[i].step < 2) {
			this.tasks[i].step++;
		}
		this.dataService.tasks = this.tasks;
	}

	abortTask(i: number) {
		if (this.tasks[i].step != 3) {
			this.tasks[i].step = 3;
		}
		this.dataService.tasks = this.tasks;
	}

	deleteTask(i: number) {
		this.tasks.splice(i, 1);
		this.dataService.tasks = this.tasks;
	}

	dateShow(date: Date): string {
		let sDate: Date = new Date(date);
		let h: any = sDate.getHours();
		let m: any = sDate.getMinutes();

		return sDate.getDate() + '/' + sDate.getMonth() + '/' + sDate.getFullYear() + ' ' +
			(h<10 ? '0'+ h : h) +':' +
			(m<10 ? '0'+ m : m);
	}

	editTask(i: number) {
		this.tasks[i].showEditTask = !this.tasks[i].showEditTask;
		if (!this.tasks[i].showEditTask) {
			this.dataService.tasks = this.tasks;
		}
		return this.tasks;
	}
}
