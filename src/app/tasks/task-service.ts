import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './model/task'

@Injectable({
  providedIn: 'root',
})
export class TaskService {
    tasks : Task[] = [
        {priority:'high', name:'test', description:'testd',status:'in progress',dueDate:new Date("12/11/2021")},
        {priority:'high', name:'test2', description:'test2d',status:'in progress',dueDate:new Date("12/11/2021")}];
  
  constructor() { }

  addTask(task: Task): void{
    this.tasks.push(task);
  }

  getTasks(): Observable<Task[]>{
      return of(this.tasks);
  }
}