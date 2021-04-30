import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
updatebook(data:any){
  this.http.post('http://localhost:9091/',data).subscribe((result)=>{
    console.log("result",result)
  })
  console.log('data',data)
}
}
