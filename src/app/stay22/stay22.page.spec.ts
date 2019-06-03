import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stay22Page } from './stay22.page';

describe('Stay22Page', () => {
  let component: Stay22Page;
  let fixture: ComponentFixture<Stay22Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stay22Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stay22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
