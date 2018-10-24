import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';

import { Client } from '../../models/Client';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[];
  totalOwed: number;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    //console.dir("AAAAAAAAAAAAAAA");

     
    this.httpClient.get('http://localhost:3000/getUser')
    .subscribe(
      data=>{
        console.dir(data);
        //this.myUserList=data as string[]
        
      },
      error=>{
        console.dir(error);
      }
      );

     /*  this.clientService.getClients().subscribe(clients => {
        this.clients = clients,
        this.getTotalOwed();
      }); */


  }

  getTotalOwed() {
    this.totalOwed = this.clients.reduce((total, client) => {
      return total + parseFloat(client.balance.toString());
    }, 0);
  }

}
