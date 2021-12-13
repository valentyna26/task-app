import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import {TaskService} from '../task-service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'My Tasks List';

  constructor(public dialog: MatDialog, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    
    dialogConfig.data = {priority:'high', name:'test', description:'testd',status:'in progress',dueDate:new Date("12/11/2021")};

    const dialogRef = this.dialog.open(TaskDetailComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      val => {
        console.log("Dialog output:", val);
        if(val!=null)
        {
          this.taskService.addTask(val);
        }
      }
    );
  }

}
