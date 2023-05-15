import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class Navbar implements OnInit {
  constructor() {}

  ngOnInit() {}

  eventHover(event: any) {
    console.log(event)
  }
}
