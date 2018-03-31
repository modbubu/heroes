import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaumoiComponent } from './maumoi.component';

describe('MaumoiComponent', () => {
  let component: MaumoiComponent;
  let fixture: ComponentFixture<MaumoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaumoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaumoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
