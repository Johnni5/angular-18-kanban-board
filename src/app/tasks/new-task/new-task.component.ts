import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required: true}) userId!: string;

  @Output() close = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();

  // enteredTitle = signal(''); -> instead of zone
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  // enteredTitle = signal(''); // no template changes needed

  private tasksService = inject(TasksService);

  onCloseTask() {
    this.close.emit();
  }
 
  onSubmit(){
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate
      }, 
      this.userId
    );
    this.close.emit();
  };
}
