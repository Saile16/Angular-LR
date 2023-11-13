import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];

  @Output()
  public onDelete: EventEmitter<number> = new EventEmitter();
  //onDelete=index value:

  onDeleteCharacter(index: number): void {
    // Emitir el ID del personaje
    this.onDelete.emit(index);
  }
}
