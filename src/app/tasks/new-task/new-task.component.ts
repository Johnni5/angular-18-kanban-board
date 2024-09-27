import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  // enteredTitle = signal(''); -> instead of zone
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  // enteredTitle = signal(''); // no template changes needed

  onCancelEvent() {
    this.cancel.emit();
  }
 
  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    })
  };
}
