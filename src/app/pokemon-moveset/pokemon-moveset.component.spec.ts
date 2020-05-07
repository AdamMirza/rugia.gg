import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonMovesetComponent } from './pokemon-moveset.component';

describe('PokemonMovesetComponent', () => {
  let component: PokemonMovesetComponent;
  let fixture: ComponentFixture<PokemonMovesetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonMovesetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonMovesetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
