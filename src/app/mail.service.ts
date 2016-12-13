import {Injectable} from '@angular/core';

@Injectable()
export class MailService {

  message = "You recive message ";

  texts = [{id: 0, message: 'toto'},
    {id: 1, message: 'titi'}, {id: 2, message: 'tata'}];

  constructor() {
  }

  update(id, message) {
    this.texts = this.texts.map(t =>
      t.id === id
        ? {id,message} : t
    );
  }

}
