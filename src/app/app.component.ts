import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList : Array<string> = ['Starting a wonderfull day!'];

  public trackByFunc(index: number , item: any) {
    return item.index;
  }

  public getNewTask(newTask : string){
    let item = newTask != '' ? newTask : 'nothing!';
    this.todoList.push(item);
  }
}
