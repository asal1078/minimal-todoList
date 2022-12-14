import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todoList : Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  public trackByFunc(index: number , item: any) {
    return item.index;
  }

}
