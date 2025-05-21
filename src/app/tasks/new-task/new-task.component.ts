import {Component, EventEmitter, Output, inject, Input} from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({required:true}) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  private tasksService =inject(TasksService);



  onClose() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTasks({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();
  }
}
