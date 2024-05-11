import { Injectable } from '@angular/core';
import { Bicicletta } from '../shared/models/Bicicletta';
import { sample_bici } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class BiciService {

  constructor() { }
  getAll():Bicicletta[]{
    return sample_bici as Bicicletta[]
  }
}