import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SoildataService } from '../soildata.service';

@Component({
  selector: 'app-soilsearch',
  templateUrl: './soilsearch.component.html',
  styleUrls: ['./soilsearch.component.scss']
})
export class SoilsearchComponent implements OnInit {
  searchControl: FormControl = new FormControl();
  allSoilDetails = [];
  constructor(private soilService: SoildataService) { }

  ngOnInit(): void {
  this.searchControl.valueChanges.subscribe(value => {
	console.log(value);
 this.soilService.searchSoilDetails(value).subscribe(data => {
      console.log(data);
      this.allSoilDetails = data;
    });
  });
  }


}
