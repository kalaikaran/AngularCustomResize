import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplitPanelComponent } from './split-panel/split-panel.component';
import { FinalComponentComponent } from './final-component/final-component.component';

const routes: Routes = [
  { path: 'one', component: SplitPanelComponent },
  { path: 'final', component: FinalComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
