import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderNumber: number= 0;
  ordersArray: number[]=[];
  myTimer;
  dayStarted = false;
  firstFiveOrders: number[]=[];
  instructions: string ="press start to begin work day";
  lottery: boolean = false;
  superLottery: boolean = false;
  winningOrder: number;
  winningOrders: number[];
  lotteryTimer;

  constructor() {
  }

  pauseDay() {
    clearInterval(this.myTimer);
    this.instructions="press a button to restart or end work day";
  }

  stopDay() {
    clearInterval(this.myTimer);
    this.orderNumber=0;
    this.ordersArray.length=0;
    this.dayStarted=false;
    this.lottery=false;
    this.superLottery=false;
    this.instructions="press start to begin work day";
  }

  startDay() {
    this.dayStarted=true;
    this.instructions="press a button to pause or end work day";
    this.myTimer = setInterval(() => {
      this.orderNumber++;
      this.ordersArray.push(this.orderNumber);

    }, 2000);
  }

  initializeLottery() {
    this.lottery = true;
  }

  initializeSuperLottery() {
    this.superLottery = true;
    if (this.ordersArray.length >2) {
      this.winningOrder = this.ordersArray[Math.floor(Math.random() * this.ordersArray.length)]
    }
  }
}
