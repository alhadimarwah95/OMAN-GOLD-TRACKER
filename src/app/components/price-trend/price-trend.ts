
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-price-trend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price-trend.html',
})
export class PriceTrendComponent implements OnInit {
  selectedKarat: '18K' | '21K' | '22K' | '24K' = '24K';
  chart: any;

  ngOnInit() {
    const ctx = document.getElementById('goldChart') as HTMLCanvasElement;
    if (!ctx) return;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
          label: 'Gold Price OMR',
          data: [26.2, 26.5, 26.8, 27.0, 27.2, 26.9, 27.4],
          borderColor: '#d4af37',
          backgroundColor: 'rgba(212,175,55,0.2)',
          fill: true,
          tension: 0.4
        }]
      },
      options: { responsive: true }
    });
  }

  updateChart() {
    const prices: any = {
      '18K': [19.6, 19.8, 20.1, 20.2, 20.4, 20.1, 20.5],
      '21K': [22.9, 23.1, 23.4, 23.6, 23.8, 23.5, 24.0],
      '22K': [24.0, 24.2, 24.5, 24.7, 24.9, 24.6, 25.1],
      '24K': [26.2, 26.5, 26.8, 27.0, 27.2, 26.9, 27.4]
    };
    if (this.chart) {
      this.chart.data.datasets[0].data = prices[this.selectedKarat];
      this.chart.update();
    }
  }
}