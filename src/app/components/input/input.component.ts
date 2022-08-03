import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  addingItem : string = '';
  showAlert : boolean = false;

  @Output() newTaskEmit = new EventEmitter<string>();
  @Output() showAlertEmit = new EventEmitter<boolean>();

  addItem() {
    if(this.addingItem != ''){
      this.newTaskEmit.emit(this.addingItem);
      this.showAlertEmit.emit(this.showAlert = false);
    }
    else {
      this.showAlertEmit.emit(this.showAlert = true);
    }
    this.addingItem = '';
  }

}
