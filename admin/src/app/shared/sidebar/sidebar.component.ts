import { Component, OnInit } from '@angular/core';
import { AuthonticationService } from 'users/src/lib/services/authontication.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html'
  })
export class SidebarComponent implements OnInit{
  constructor(private authhonticationService: AuthonticationService){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  logoutUser(){
    this.authhonticationService.logout();
  }

}
