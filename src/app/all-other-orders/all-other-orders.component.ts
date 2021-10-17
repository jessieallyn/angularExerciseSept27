import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-all-other-orders',
  templateUrl: './all-other-orders.component.html',
  styleUrls: ['./all-other-orders.component.css']
})
export class AllOtherOrdersComponent implements OnInit {
  @Input() orders: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
