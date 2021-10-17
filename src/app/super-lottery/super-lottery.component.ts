import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-lottery',
  templateUrl: './super-lottery.component.html',
  styleUrls: ['./super-lottery.component.css']
})
export class SuperLotteryComponent implements OnInit {
  @Input() superLottery: boolean;
  @Input() winner: number[];

  constructor() { }

  ngOnInit(): void {
  }

}
