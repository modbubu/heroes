import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductManagerComponent } from './pruduct-manager.component';

describe('PruductManagerComponent', () => {
  let component: PruductManagerComponent;
  let fixture: ComponentFixture<PruductManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruductManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruductManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
