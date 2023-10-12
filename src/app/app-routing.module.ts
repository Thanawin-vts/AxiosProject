import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BadgeComponent } from './mat/badge/badge.component';
import { ButtonToggleComponent } from './mat/button-toggle/button-toggle.component';
import { CardComponent } from './mat/card/card.component';
import { ExpansionPanelComponent } from './mat/expansion-panel/expansion-panel.component';
import { GridListComponent } from './mat/grid-list/grid-list.component';
import { MenuComponent } from './mat/menu/menu.component';
import { ProgressBarComponent } from './mat/progress-bar/progress-bar.component';
import { RipplesComponent } from './mat/ripples/ripples.component';
import { SideNavComponent } from './mat/side-nav/side-nav.component';
import { SlideToggleComponent } from './mat/slide-toggle/slide-toggle.component';
import { SliderComponent } from './mat/slider/slider.component';
import { SnackbarComponent } from './mat/snackbar/snackbar.component';
import { StepperComponent } from './mat/stepper/stepper.component';
import { ToolbarComponent } from './mat/toolbar/toolbar.component';
import { TooltipComponent } from './mat/tooltip/tooltip.component';

const routes: Routes = [
  {
    path: "mainpage",
    component: MainpageComponent
  },
  {
    path: "badge",
    component: BadgeComponent
  },
  {
    path: "buttontoggle",
    component: ButtonToggleComponent
  },
  {
    path: "card",
    component: CardComponent
  },
  {
    path: "expansionpanel",
    component: ExpansionPanelComponent
  },
  {
    path: "gridlist",
    component: GridListComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "progressbar",
    component: ProgressBarComponent
  },
  {
    path: "ripples",
    component: RipplesComponent
  },
  {
    path: "sidenav",
    component: SideNavComponent
  },
  {
    path: "slidetoggle",
    component: SlideToggleComponent
  },
  {
    path: "slider",
    component: SliderComponent
  },
  {
    path: "snackbar",
    component: SnackbarComponent
  },
  {
    path: "stepper",
    component: StepperComponent
  },
  {
    path: "toolbar",
    component: ToolbarComponent
  },
  {
    path: "tooltip",
    component: TooltipComponent
  },
  {
    path: "**",
    redirectTo: "mainpage",
    pathMatch: "full",
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}