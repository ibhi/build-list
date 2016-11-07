import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  private jobs;

  /* tslint:disable:no-unused-variable */
  private progressBarOptions = {
    width: 50,
    height: 20,
    margin: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5
    }
  };

  private stateClassMap = {
    'Pending': 'list-pending',
    'Running': 'list-running',
    'Rejected': 'list-rejected',
    'Completed': 'list-accepted',
    'Accepted': 'list-accepted'
  };
  /* tslint:enable:no-unused-variable */

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.jobs = data;
    });
  }
}
