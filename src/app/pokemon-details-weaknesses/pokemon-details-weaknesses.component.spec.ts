import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailsWeaknessesComponent } from './pokemon-details-weaknesses.component';

describe('PokemonDetailsWeaknessesComponent', () => {
  let component: PokemonDetailsWeaknessesComponent;
  let fixture: ComponentFixture<PokemonDetailsWeaknessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailsWeaknessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailsWeaknessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
