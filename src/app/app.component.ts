import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WninputcontrolService } from 'wninputcontrol';
import { DashboardDataModel } from 'wndashboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'SelfProject';
  code: string = 'JP';
  format: string = '';
  date = new Date(Date.now());
  canTab = true
  list1 = [
    {
      code: 'TH',
      name: 'Thailand',
    },
    {
      code: 'JP',
      name: 'Japan',
    },
    {
      code: 'UK',
      name: 'United Kingdom',
    },
    {
      code: 'UK',
      name: 'United Kingdom',
    },
  ];
  myForm: FormGroup;
  arrControl = ['name', 'email'];
  constructor(private fb: FormBuilder, private ws: WninputcontrolService) {
    this.myForm = this.fb.group({
      name: [''],
      email: [''],
    });
  }

  dashboardData: DashboardDataModel[] = [
    {
      dataHeader: 'Casa Loan',
      totalCount: 100,
      subtitle: [
        {
        subHeader: 'new',
        count: 30
        },
        {
        subHeader: 'pending',
        count: 20
        },
        {
        subHeader: 'saved',
        count: 50
        },
      ]
    },
    {
      dataHeader: 'Walk-in',
      totalCount: 50,
      // subtitle: [
      //   {
      //   subHeader: 'new',
      //   count: 10
      //   },
      //   {
      //   subHeader: 'pending',
      //   count: 20
      //   },
      //   {
      //   subHeader: 'saved',
      //   count: 20
      //   },
      // ]
    },
    {
      dataHeader: 'E-money',
      totalCount: 60,
      subtitle: [
        {
        subHeader: 'new',
        count: 20
        },
        {
        subHeader: 'pending',
        count: 20
        },
        {
        subHeader: 'saved',
        count: 20
        },
      ]
    },
    {
      dataHeader: 'E-wallet',
      totalCount: 70,
      subtitle: [
        {
        subHeader: 'new',
        count: 10
        },
        {
        subHeader: 'pending',
        count: 30
        },
        {
        subHeader: 'saved',
        count: 30
        },
      ]
    },
    {
      dataHeader: 'FI',
      totalCount: 90,
      subtitle: [
        {
        subHeader: 'new',
        count: 30
        },
        {
        subHeader: 'pending',
        count: 20
        },
        {
        subHeader: 'saved',
        count: 40
        },
      ]
    },
  ]
  ngOnInit() {

  }

  onSubmit() {}

  clear() {
    this.ws.clearValidatorControl(this.myForm, this.arrControl, ['name']);
  }

  enable() {
    this.ws.enableControl(this.myForm, this.arrControl, ['name']);
  }

  disable() {
    this.ws.disableControl(this.myForm, this.arrControl, ['name']);
  }

  reset() {
    this.ws.resetControl(this.myForm, this.arrControl, ['name', 'email']);
  }
}
