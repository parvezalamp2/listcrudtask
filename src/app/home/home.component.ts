import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import { takeWhile } from 'rxjs';
import { Sheet } from './excel';
import { Services } from './services';

declare var window:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allExcels!: Sheet[];
  searchValue!: string;
  
  @ViewChild('content', {static: false}) el!: ElementRef;
  title = 'richtextapp';

  constructor(private http: HttpClient,
    private excelservice: Services) { }

    deleteModal:any;
    idToDelete:number =0 ;

  ngOnInit(){
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById("deleteModal")
    )
    this.get();
    }

    get(){
      this.excelservice.get().subscribe((data)=> {
        this.allExcels = data;
      })
    }

    openDeleteModal(id:number){
      this.idToDelete = id;
      this.deleteModal.show();
    }

    delete(){
      this.excelservice.delete(this.idToDelete).subscribe((data)=> {
        this.allExcels = this.allExcels.filter(_=> _.id !== this.idToDelete);
        this.deleteModal.hide();
      })
    }

    makepdf(){
      let pdf = new jsPDF('p', 'pt', 'a4');
      pdf.html(this.el.nativeElement,{
        callback: (pdf)=> {
          pdf.save('generated.pdf');
        }
      });
      pdf.save();
    }

  }
