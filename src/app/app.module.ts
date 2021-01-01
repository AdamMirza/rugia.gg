import 'reflect-metadata';
import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PokemonTeamComponent } from './pokemon-team/pokemon-team.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonTeamIconComponent } from './pokemon-team-icon/pokemon-team-icon.component';
import { AtAGlanceComponent } from './at-a-glance/at-a-glance.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonMovesetComponent } from './pokemon-moveset/pokemon-moveset.component';
import { StrategyComponent } from './strategy/strategy.component';
import { StrategyEvBuildsComponent } from './strategy-ev-builds/strategy-ev-builds.component';
import { StrategyGuidesComponent } from './strategy-guides/strategy-guides.component';

import { PokemonDetailService } from './core/services/pokemon-detail.service';
import { PokemonDetailsWeaknessesComponent } from './pokemon-details-weaknesses/pokemon-details-weaknesses.component';
import { PokemonTypeIconComponent } from './pokemon-type-icon/pokemon-type-icon.component';
import { MovesComponent } from './moves/moves.component';
import { EvIvTableComponent } from './ev-iv-table/ev-iv-table.component';
import { BuildsComponent } from './builds/builds.component';
import { TierListComponent } from './tier-list/tier-list.component';
import { RegionsComponent } from './tier-list/regions/regions.component';
import { ListComponent } from './tier-list/list/list.component';
import { MatchupComponent } from './matchup/matchup.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, NavbarComponent, PokemonTeamComponent, DashboardComponent, PokemonTeamIconComponent, AtAGlanceComponent, PokemonDetailsComponent, PokemonMovesetComponent, StrategyComponent, StrategyEvBuildsComponent, StrategyGuidesComponent, PokemonDetailsWeaknessesComponent, PokemonTypeIconComponent, MovesComponent, EvIvTableComponent, BuildsComponent, TierListComponent, RegionsComponent, ListComponent, MatchupComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [PokemonDetailService],
  bootstrap: [AppComponent]
})
export class AppModule {}
