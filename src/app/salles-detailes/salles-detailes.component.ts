import { Component, OnInit } from '@angular/core';
import SallesList from '../salles-list/product.json';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-salles-detailes',
  templateUrl: './salles-detailes.component.html',
  styleUrls: ['./salles-detailes.component.css']
})
export class SallesDetailesComponent implements OnInit {
  sallesdetailes : any ;
  constructor(private activatedRoute : ActivatedRoute) {
    const activeID = this.activatedRoute.snapshot.params['id']
    this.sallesdetailes = SallesList.find(salles => salles.id == activeID);
    console.log(this.sallesdetailes)
  }
  ngOnInit(): void {
  }

}
