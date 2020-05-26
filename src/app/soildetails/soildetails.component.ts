import { Component, OnInit } from '@angular/core';
import { Soil } from '../soil';
import { SoildataService } from '../soildata.service';

@Component({
  selector: 'app-soildetails',
  templateUrl: './soildetails.component.html',
  styleUrls: ['./soildetails.component.scss']
})
export class SoildetailsComponent implements OnInit {

  allSoilDetails: Soil[] = [];
  constructor(private soilService: SoildataService) { }

  ngOnInit(): void {
    this.soilService.getSoilDetails().subscribe(
      (res) => {
        this.allSoilDetails = res;
        this.allSoilDetails = this.allSoilDetails.sort((a, b) => a.SI - b.SI);
      }
    );
  }

}
