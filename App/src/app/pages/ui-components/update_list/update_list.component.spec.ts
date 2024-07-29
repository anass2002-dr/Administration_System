/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Update_listComponent } from './update_list.component';

describe('Update_listComponent', () => {
  let component: Update_listComponent;
  let fixture: ComponentFixture<Update_listComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Update_listComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Update_listComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
