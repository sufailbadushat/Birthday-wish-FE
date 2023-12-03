import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit{

  constructor(private api:ApiService) {}

  data:any = [];

  ngOnInit(){
    this.api.getBirthdayEmp().subscribe((res) => {
      this.data=res;
    })
  }
}
