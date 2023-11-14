import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conversor';

  Grados = {
    Fahrenheit: 0,
    Celsius: 0,
    Kelvin: 0,
  };

  convertir() {
    this.Grados.Celsius = (this.Grados.Fahrenheit - 32) * (5 / 9);
    this.Grados.Celsius = Number(this.Grados.Celsius.toFixed(2));
    this.Grados.Kelvin = (this.Grados.Celsius + 273);
  }


}
