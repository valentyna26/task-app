import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import { Task } from '../model/task';


@Component({
  selector: 'task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  form: FormGroup;
    description:string;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<TaskDetailComponent>,
        @Inject(MAT_DIALOG_DATA) {name, description,status,priority,dueDate}:Task ) {

        this.description = description;


        this.form = fb.group({
          name: [name, Validators.required],
          description: [description, Validators.required],
          dueDate: [moment(), Validators.required],
          status: [status,Validators.required],
          priority: [priority,Validators.required]
        });

    }

    ngOnInit() {

    }


    save() {
        this.dialogRef.close(this.form.value);
    }

    close() {
        this.dialogRef.close();
    }

}
