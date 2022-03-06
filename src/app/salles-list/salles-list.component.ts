import { Component, OnInit } from '@angular/core';
import SallesList from '../salles-list/product.json';
import { Project } from '../project';


@Component({
  selector: 'app-salles-list',
  templateUrl: './salles-list.component.html',
  styleUrls: ['./salles-list.component.css']
})
export class SallesListComponent implements OnInit {
  salles: Project[]=SallesList ;

  constructor() { }

  ngOnInit(): void {
  }

}
