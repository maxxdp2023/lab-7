import { Component } from '@angular/core';
import { Car } from '../interfaces/car';
import { Service1Service } from '../services/service1.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  title = 'lab7f';
  carList: Car[] = [];
  Car!: Car[];

  constructor(private service: Service1Service) {}

  ngOnInit(): void {
    this.service.getCars().subscribe((cars) => {
      this.Car = cars._embedded.cars;
    });
  }
}
