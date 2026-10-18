import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GoldPrice } from '../models/gold.model';

@Injectable({
providedIn: 'root'
})
export class GoldService {
private apiUrl = 'http://localhost:5253/api/gold';

constructor(private http: HttpClient) {}

getPrices(): Observable<GoldPrice[]> {
return this.http.get<any>(this.apiUrl).pipe(
map(d => {
const p = d.price;
return [
{ karat: '24', price: p },
{ karat: '22', price: Math.round(p * 0.916 * 100) / 100 },
{ karat: '21', price: Math.round(p * 0.875 * 100) / 100 },
{ karat: '18', price: Math.round(p * 0.75 * 100) / 100 }
];
})
);
}
}
