import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  addingItem : string = '';

  @Output() newTaskEmit = new EventEmitter<string>();

  addItem() {
    if(this.addingItem != ''){
      this.newTaskEmit.emit(this.addingItem);
    }
    else {
      alert('your task cant be empty!')
    }
    this.addingItem = '';
  }

}
