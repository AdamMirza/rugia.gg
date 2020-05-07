import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTeamIconComponent } from './pokemon-team-icon.component';

describe('PokemonTeamIconComponent', () => {
  let component: PokemonTeamIconComponent;
  let fixture: ComponentFixture<PokemonTeamIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTeamIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTeamIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
