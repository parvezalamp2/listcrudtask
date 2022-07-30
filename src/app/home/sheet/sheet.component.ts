import { Component, OnInit } from '@angular/core';
import { BeforeOpenEventArgs } from '@syncfusion/ej2-angular-spreadsheet';

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
    
  }

  beforeOpen (args: BeforeOpenEventArgs) {
    // your code snippets here
  }

  beforeSave (args: BeforeOpenEventArgs) {
    // your code snippets here
  }

}
