import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: string;
  email: string;
  password: string;

  constructor(
    private httpClient: HttpClient,
   
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    
    // let urlSearchParams = new URLSearchParams();
    // urlSearchParams.append('email', this.email);
    // urlSearchParams.append('password', this.password);
    // let body = urlSearchParams.toString()
    // console.log(body);
    // this.httpClient.post('http://localhost:3000/registerUser', body).subscribe(
    //   data => {
        
    //     alert('ok');
    //   },
    //   error => {
    //     console.log(JSON.stringify(error.json()));
    //   }
    // )

     fetch('http://localhost:3000/registerUser', {
       method: 'POST',
       headers: {'Content-Type':'application/json'},
       body: JSON.stringify({
          firstName: this.firstName,
          email: this.email,
          password: this.password
        }),
        /* headers: {
          "Content-type": "application/json; charset=UTF-8"
        } */
       
      })
      .then(response => response.json())
      .then(json => console.log(json))
  }

}
