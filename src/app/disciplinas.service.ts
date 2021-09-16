import { Injectable } from '@angular/core';

interface Disciplinas{
  diaSemana: string;
  horario: string;
  nome: string;
  p1: number;
  p2: number;
}

@Injectable()
export class DisciplinasService {
  list: Array<Disciplinas>;
  storage: Storage; 

  constructor() {
    this.storage = window.localStorage;
    this.list = JSON.parse(this.storage.getItem('disciplinas'));
  }

  add(title: Disciplinas) {
    this.list.push(title);
    this.storage.setItem('disciplinas', JSON.stringify(this.list));
  }
  remove(index: number) {
    this.list.splice(index, 1);
    this.storage.setItem('disciplinas', JSON.stringify(this.list));
  }
  getList() {
    return this.list;
  }
}
