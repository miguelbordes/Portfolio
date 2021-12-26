import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioMiguel';

  btnStyle = 'sidenav';
  submit() {
    if(this.btnStyle == 'sidenav') {
      this.btnStyle = 'sidenav2';
    } else {
      this.btnStyle = 'sidenav';
    }
  }
}
