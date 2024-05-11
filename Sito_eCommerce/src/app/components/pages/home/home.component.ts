import { Component } from '@angular/core';
import { BiciService } from 'src/app/services/bici.service';
import { Bicicletta } from 'src/app/shared/models/Bicicletta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  biciclette: Bicicletta[] = []

  constructor(private biciService: BiciService) {
    
  }
  
  ngOnInit(): void {
    this.biciclette = this.biciService.getAll();
  }
}
