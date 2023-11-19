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
  public onDelete: EventEmitter<string> = new EventEmitter();
  //onDelete=index value:

  onDeleteCharacter(id?: string): void {
    // Emitir el ID del personaje
    console.log({ id });
    if (!id) return;
    this.onDelete.emit(id);
  }
}
