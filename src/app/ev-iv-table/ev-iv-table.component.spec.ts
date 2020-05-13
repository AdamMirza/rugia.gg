import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvIvTableComponent } from './ev-iv-table.component';

describe('EvIvTableComponent', () => {
  let component: EvIvTableComponent;
  let fixture: ComponentFixture<EvIvTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvIvTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvIvTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
