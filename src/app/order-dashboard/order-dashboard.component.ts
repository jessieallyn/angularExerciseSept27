import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
  @Input() orders: number[];

  constructor() { }

  ngOnInit(): void {

  }
}
