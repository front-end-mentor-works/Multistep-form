import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './app-store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PlanEffects } from './step2/store/step2.effects';
import { addonEffects } from './step3/store/step3.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SidebarComponent,
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([PlanEffects,addonEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
