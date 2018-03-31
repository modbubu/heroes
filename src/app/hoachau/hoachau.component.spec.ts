import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoachauComponent } from './hoachau.component';

describe('HoachauComponent', () => {
  let component: HoachauComponent;
  let fixture: ComponentFixture<HoachauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoachauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoachauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
