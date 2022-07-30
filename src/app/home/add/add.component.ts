import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Services } from '../services';
import { Router } from '@angular/router';
import { Sheet } from '../excel';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  formValue: Sheet = {
    id: 0,
    name:"",
    doc: ""
  }
  constructor(private excelService: Services,
    private router: Router) { }

  ngOnInit(): void {
  }

  create(){
    this.excelService.create(this.formValue).subscribe({
      next:(data) =>{
        this.router.navigate([""])
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
}
