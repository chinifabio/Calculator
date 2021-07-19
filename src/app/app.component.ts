import { Component } from "@angular/core";
import {isNumeric} from "rxjs/internal-compatibility";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  num = 0;
  res = 0;
  temp = 0;

  title = "calculator";

  chars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0"];
  operand = ["+", "-", "*", "/"];

  operation = "+";

  pressed(input: string) {
    if(isNumeric(input)) {
      this.num*=10; this.num += Number.parseInt(input);

      switch (this.operation) {
        case "*":
          this.temp = this.res * this.num;
          break;
        case "+":
          this.temp = this.res + this.num;
          break;
        case "-":
          this.temp = this.res - this.num;
          break;
        case "/":
          this.temp = this.res / this.num;
          break;
      }
    } else if (input == "C") {
      this.temp = this.res = this.num = 0;
    } else {
      this.res = this.temp;
      this.num = 0;
      this.operation = input;
    }
  }
}
