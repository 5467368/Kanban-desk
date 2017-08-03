import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-dialog-window',
	templateUrl: './dialog-window.component.html',
	styleUrls: ['./dialog-window.component.css']
})
export class DialogWindowComponent implements OnInit {

	newTask: any = {};
	taskList: any[];

	@Output() dialogStatus = new EventEmitter<boolean>();

	constructor(private dataService: DataService) {
		this.taskList = this.dataService.tasks;
		this.newTask.priority = 0;
	}

	ngOnInit() {
	}

	addNewTask() {
		this.newTask.showEditTask = false;
		this.newTask.step = 0;
		this.newTask.date = new Date().getTime();
		this.taskList.push(this.newTask);
		this.dataService.tasks = this.taskList;
		this.newTask = {};
		this.cancelNewTask();
		return this.dataService.tasks;
	}

	cancelNewTask() {
		this.dialogStatus.emit(false);
	}

}