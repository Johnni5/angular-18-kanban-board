import { Component, inject, Input} from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;

  isAddingTask = false; // not a must to declare typ, due to internal logik, its declared as false -> bool

  private readonly tasksService: TasksService; // lazily approach

  constructor() {
    this.tasksService = inject(TasksService);
  }

  // 1 private tasksService = new TasksService(); -> one instance of this service, if needed elsewhere - go make another one : bad

  // @Input() name: string | undefined;
  // @Input() name?: string;
  // @Input({ required: true }) name!: string;

  get selectedUserTask() {
    // 1 return this.tasksService.getUserId(this.userId);
    return this.tasksService.getUserId(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseTask() {
    this.isAddingTask = false;
  }
  
}
