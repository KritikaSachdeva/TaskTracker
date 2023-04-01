import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../TaskInterface';
import { TASKS } from '../mock-task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
