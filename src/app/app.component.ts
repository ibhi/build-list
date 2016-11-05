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
  pieData = [{
    label: 'Failed No. of unit tests',
    value: 400
  }, {
    label: 'Passed No. of unit tets',
    value: 600
  }];

  pieOptions = {
    height: 500,
    width: 500
  };

  metricsData = {
    test: 70,
    maintainability: 49,
    security: 64,
    workmanship: 72
  };

  ngOnInit() {
    setTimeout(() => {
      this.data = {progress: 80, state: 'running'};
    }, 5000);
  }
}
