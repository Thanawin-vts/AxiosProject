import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
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

// mat
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';

const myCustomTooltipOptions: MatTooltipDefaultOptions = {
  showDelay: 1000, // Delay in milliseconds before the tooltip appears
  hideDelay: 200,  // Delay in milliseconds before the tooltip disappears after mouseout
  touchendHideDelay: 2000, // Delay in milliseconds before the tooltip disappears after touchend event
  position: 'above', // Default tooltip position
};

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    ButtonToggleComponent,
    CardComponent,
    ExpansionPanelComponent,
    GridListComponent,
    MenuComponent,
    ProgressBarComponent,
    RipplesComponent,
    SideNavComponent,
    SlideToggleComponent,
    SliderComponent,
    SnackbarComponent,
    StepperComponent,
    ToolbarComponent,
    TooltipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatToolbarModule,
    MatTooltipModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  providers: [
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipOptions }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
