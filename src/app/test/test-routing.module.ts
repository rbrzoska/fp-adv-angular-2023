import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationService } from '../shared/translation.service';
import { TestComponent } from './test.component';

const routes: Routes = [
  { path: '', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
