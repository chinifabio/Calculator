import { Component, OnInit } from '@angular/core';
import { KeyComponent } from './components/key/key.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "calculator";
  chars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'];
  gino = "";

  pressed(digit: any) {
    this.gino = digit == '0' ? "" : "you pressed " + digit;
  }

}
