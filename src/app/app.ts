import { Component } from '@angular/core';

import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { PriceCard } from './components/price-card/price-card';
import { GoldCalculator } from './components/gold-calculator/gold-calculator';
import { PriceTrendComponent } from './components/price-trend/price-trend';
import { PriceHistory } from './components/price-history/price-history';
import { Footer } from './components/footer/footer';

import { GoldService } from './services/gold.service';
import { GoldPrice } from './models/gold.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LanguageService } from './services/language';

@Component({
  selector: 'app-root',

  imports: [
    Header,
    Hero,
    PriceCard,
    GoldCalculator,
    PriceTrendComponent,
    PriceHistory,
    Footer,
    HttpClientModule,
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  goldPrices: GoldPrice[] = []
constructor(public language: LanguageService, private goldService: GoldService) {
this.goldService.getPrices().subscribe(data => this.goldPrices = data);
}

}