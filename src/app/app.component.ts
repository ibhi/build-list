import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  data = {progress: 30, state: 'running'};
  options = {
    width: 500,
    height: 20,
    margin: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20
    }
  };

  ngOnInit() {
    setTimeout(() => {
      this.data = {progress: 80, state: 'running'};
    }, 5000);
  }
}
