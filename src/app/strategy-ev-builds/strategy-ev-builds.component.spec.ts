import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyEvBuildsComponent } from './strategy-ev-builds.component';

describe('StrategyEvBuildsComponent', () => {
  let component: StrategyEvBuildsComponent;
  let fixture: ComponentFixture<StrategyEvBuildsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategyEvBuildsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyEvBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
