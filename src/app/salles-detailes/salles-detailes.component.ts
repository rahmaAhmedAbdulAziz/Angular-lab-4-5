import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salles-detailes',
  templateUrl: './salles-detailes.component.html',
  styleUrls: ['./salles-detailes.component.css']
})
export class SallesDetailesComponent implements OnInit {
  sallesdetailes : any ;
  constructor(private activatedRoute : ActivatedRoute) {
    const activeID = this.activatedRoute.snapshot.params['id']
    this.sallesdetailes = sallessList.find(salles => salles.id == activeID);
    console.log(this.sallesdetailes)
  }
  ngOnInit(): void {
  }

}
