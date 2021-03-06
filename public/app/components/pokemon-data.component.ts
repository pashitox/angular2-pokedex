import { Component, Input } from 'angular2/core'
import { PokemonTypeComponent } from './pokemon-type.component'

@Component({
	selector: 'pokemon-data',
  directives: [PokemonTypeComponent],
	template: `
		<ul class="list-group">
                  <li class="list-group-item">
                    <strong>Type</strong>
                    <span class="pull-right">
                      <pokemon-type [pokemon]="pokemon" ></pokemon-type>
                    </span>
                  </li>
                  <li class="list-group-item">
                    <strong>Height</strong>
                    <span class="pull-right">{{pokemon.height}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Weight</strong>
                    <span class="pull-right">{{pokemon.weight}}</span>
                  </li>
                  <li class="list-group-item">
                    <strong>Abilities</strong>
                    <ul>
                      <li *ngFor="#ability of pokemon.abilities">
                        {{ ability }}
                      </li>
                    </ul>
                  </li>
                </ul>
	`
})

export class PokemonDataComponent {
  @Input() pokemon:Object = {}
}