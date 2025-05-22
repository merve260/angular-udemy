import {Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {InvestmentService} from "../../investment.service";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  enteredInitialInvestment = '0';
  enteredAnnualInvestment ='0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';

  constructor(private investmentService: InvestmentService){}
  OnSubmit(){
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment : +this.enteredInitialInvestment, //+ um die String zu Number umzuwandeln
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
      duration: +this.enteredDuration, });
  }

}
