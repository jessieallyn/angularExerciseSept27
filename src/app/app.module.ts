import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { FirstFiveOrdersComponent } from './first-five-orders/first-five-orders.component';
import { AllOtherOrdersComponent } from './all-other-orders/all-other-orders.component';
import { LotteryWinningOrderComponent } from './lottery-winning-order/lottery-winning-order.component';
import { SuperLotteryComponent } from './super-lottery/super-lottery.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDashboardComponent,
    FirstFiveOrdersComponent,
    AllOtherOrdersComponent,
    LotteryWinningOrderComponent,
    SuperLotteryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
