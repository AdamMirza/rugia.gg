import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  teamName: string;
  constructor() {
    this.teamName = "Awesome Team";
  }

  ngOnInit(): void {
  }

}
