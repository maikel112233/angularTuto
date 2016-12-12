import { Component } from '@angular/core';
export class Hero{
  id:number;
  name:string;
  pepe:string;

  
  
};

const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice',pepe:'hola' },
  { id: 12, name: 'Narco',pepe:'jodido' },
  { id: 13, name: 'Bombasto', pepe:'jodiendo' },
  { id: 14, name: 'Celeritas',pepe:'cuentas' },
  { id: 15, name: 'Magneta',pepe:'rodo' },
  { id: 16, name: 'RubberMan',pepe:'uo' },
  { id: 17, name: 'Dynama',pepe:'yo' },
  { id: 18, name: 'Dr IQ',pepe: 't' },
  { id: 19, name: 'Magma' ,pepe:'suso'},
  { id: 20, name: 'Tornado',pepe:'yosua' }
];


@Component({
  selector: 'my-app',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],

  template: `
  <h2>My Heroes</h2>
<ul class="heroes">
<li *ngFor="let hero of heroes" (keyup)="onSelect($event)">
<input type="text"/>
  <span class="badge">{{hero.id}}</span> {{hero.name}} {{hero.pepe}}
</li>
</ul>
<p>{{clicMessage}}</p>
`

})
export class AppComponent  { 
  clicMessage="";
  title:string;
  heroes = HEROES;
  solo = HEROES[2].name;

  onSelect(event:any){this.clicMessage +=event.target.value+' | ';}
  
  
};

 
