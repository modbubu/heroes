import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoatuoiComponent } from './hoatuoi.component';

describe('HoatuoiComponent', () => {
  let component: HoatuoiComponent;
  let fixture: ComponentFixture<HoatuoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoatuoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoatuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
