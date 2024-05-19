import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bicicletta } from '../shared/models/Bicicletta';
import { sample_bici } from 'src/data';


@Injectable({
  providedIn: 'root'
})
export class BiciService {

  constructor() { }

  getAll():Bicicletta[] {
    return sample_bici as Bicicletta[]
  }

  getAllBiciBySearchTerm(searchTerm: string) {
    return this.getAll().filter(Bicicletta => Bicicletta.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }  

  getAllBiciById(BiciclettaId: string): Bicicletta {
    return this.getAll().find(Bicicletta => Bicicletta.id == BiciclettaId) ?? new Bicicletta();
  }

}