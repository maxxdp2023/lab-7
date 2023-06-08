import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../interfaces/car';
import { BehaviorSubject, Observable } from 'rxjs';
import { Http } from '../interfaces/rest.interfaces/http';

@Injectable({
  providedIn: 'root',
})
export class Service1Service {
  list = new BehaviorSubject<Car[]>([]);

  url: string = 'http://localhost:8080/cars';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Http> {
    return this.http.get<Http>(this.url);
  }

  postCar(car: Car): Observable<Car[]> {
    return this.http.post<Car[]>(this.url, car);
  }

  putCar(car: Car): Observable<Car[]> {
    return this.http.put<Car[]>(this.url + `/${car.id}`, car);
  }

  deleteCar(car: Car): Observable<Car[]> {
    return this.http.delete<Car[]>(this.url + `/${car.id}`);
  }

  setList(list: Car[]) {
    this.list.next(list);
  }
}
