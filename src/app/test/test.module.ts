import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TestComponent } from './test.component';

export const myFn = () => {};

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    TestRoutingModule,
    SharedModule
  ]
})
export default class TestModule { }
