import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-all-employess',
  templateUrl: './all-employess.component.html',
  styleUrls: ['./all-employess.component.css']
})
export class AllEmployessComponent implements OnInit{

  seachByName!: string;
  searchByJobRole!:string;
  searchByEmail!:string;
  searchByDOB!:string;

  employess:any = []
  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.getEmployees().subscribe((res) => {
      this.employess=res;      
    })
  }

}
