import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent implements OnInit {
baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  get500Error(){
    this.http.get(this.baseUrl+'buggy/servererror').subscribe(response => console.log(response),err=>console.log(err));
  }

  get404Error(){
    this.http.get(this.baseUrl+'products/45').subscribe(response => console.log(response),err=>console.log(err));
  }

  get400Error(){
    this.http.get(this.baseUrl+'buggy/badrequest').subscribe(response => console.log(response),err=>console.log(err));
  }

  get400ValidationError(){
    this.http.get(this.baseUrl+'products/two').subscribe(response => console.log(response),err=>console.log(err));
  }


}
