/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatefulButtonDirective } from './stateful-button.component';

describe('StatefulButtonComponent', () => {
  let component: StatefulButtonDirective;
  let fixture: ComponentFixture<StatefulButtonDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulButtonDirective ]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(StatefulButtonDirective);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
