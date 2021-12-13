import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task'
import {TaskService} from '../task-service'

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks : Task[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }
  loadTasks(): void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);    
  }
}
