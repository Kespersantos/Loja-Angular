import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {
    @Input()
    gameCover:string=''
    @Input()
    gameLabel:string=''
    @Input()
    gameType:string='xpto'
    @Input()
    gamePrice:string='R$ 1,99'

    constructor() { }

  ngOnInit(): void {
  }

}
