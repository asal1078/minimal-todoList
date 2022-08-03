import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoList : Array<string> = ['Starting a wonderfull day!'];
  showAlert : boolean = false;

  public getNewTask(newTask : string){
    let item = newTask != '' ? newTask : 'nothing!';
    this.todoList.push(item);
  }

  public getAlertStatus(alertStatus : boolean){
    this.showAlert = alertStatus;
  }
}
