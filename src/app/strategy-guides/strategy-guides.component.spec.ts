import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyGuidesComponent } from './strategy-guides.component';

describe('StrategyGuidesComponent', () => {
  let component: StrategyGuidesComponent;
  let fixture: ComponentFixture<StrategyGuidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyGuidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
