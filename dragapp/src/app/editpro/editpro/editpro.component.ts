import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpro',
  templateUrl: './editpro.component.html',
  styleUrls: ['./editpro.component.css']
})
export class EditproComponent implements OnInit {

  

  constructor(private route:Router,private http:HttpClient) {
    
   }

  ngOnInit(): void {
  }
  addbook(data:any){
    this.http.post('http://localhost:9091/',data).subscribe((result)=>{
      console.log("result",result)
    })
    console.log('data',data)
  }
  }
