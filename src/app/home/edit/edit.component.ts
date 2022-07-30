import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sheet } from '../excel';
import { Services } from '../services';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formValue: Sheet = {
    id: 0,
    name: "",
    doc: "",
  }

  constructor(private excelService: Services, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id  = Number(param.get('id'));
      this.getById(id);
    })
  }

  getById(id:number){
    this.excelService.getById(id).subscribe((data => {
      this.formValue = data;
    }))
  }

  update(){
    this.excelService.update(this.formValue).subscribe({
      next: (data)=> {
        this.router.navigate([''])
      },
      error:(error => {
        console.log(error)
      })
    })
  }

}
