import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SelfLearning';

  routeLists = [
    {
      name: "Main Page",
      route: "mainpage"
    },
    {
      name: "Badge",
      route: "badge"
    },
    // {
    //   name: "Bottomlist",
    //   route: "bottomlist"
    // },
    {
      name: "Button Toggle",
      route: "buttontoggle"
    },
    {
      name: "Card",
      route: "card"
    },
    // {
    //   name: "Divider",
    //   route: "divider"
    // },
    {
      name: "Expansion Panel",
      route: "expansionpanel"
    },
    // {
    //   name: "Formfield",
    //   route: "formfield"
    // },
    {
      name: "Grid List",
      route: "gridlist"
    },
    {
      name: "Menu",
      route: "menu"
    },
    {
      name: "Progress Bar",
      route: "progressbar"
    },
    {
      name: "Ripples",
      route: "ripples"
    },
    {
      name: "Side Nav",
      route: "sidenav"
    },
    {
      name: "Slide Toggle",
      route: "slidetoggle"
    },
    {
      name: "Slider",
      route: "slider"
    },
    {
      name: "Snackbar",
      route: "snackbar"
    },
    {
      name: "Stepper",
      route: "stepper"
    },
    {
      name: "Toolbar",
      route: "toolbar"
    },
    {
      name: "Tooltip",
      route: "tooltip"
    },
  ]

}
