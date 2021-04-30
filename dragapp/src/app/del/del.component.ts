import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-del',
  templateUrl: './del.component.html',
  styleUrls: ['./del.component.css']
})
export class DelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
delbook(data:any){
  console.log(data)
}
}
