import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiciService } from 'src/app/services/bici.service';
import { Bicicletta } from 'src/app/shared/models/Bicicletta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  biciclette: Bicicletta[] = []
  
    constructor(private biciService: BiciService, private activatedRoute: ActivatedRoute) {
      activatedRoute.params.subscribe((params) => {
        if (params.searchTerm) {
          this.biciclette = this.biciService.getAllBiciBySearchTerm(params.searchTerm);
          if (this.biciclette.length === 0) {
            this.biciclette = this.biciService.getAll();
          }
        } else {
          this.biciclette = this.biciService.getAll();
        }
      });
    }
  
    ngOnInit(): void {
    }
  }