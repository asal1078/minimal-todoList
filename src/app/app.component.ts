import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addingItem : string = '';
  todoList : Array<string> = ['Starting a wonderfull day!'];

  public trackByFunc(index: number , item: any) {
    return item.index;
  }

  public addItem() {
    let item = this.addingItem != '' ? this.addingItem : 'nothing!';
    this.todoList.push(item);
    this.addingItem = '';
  }
}
