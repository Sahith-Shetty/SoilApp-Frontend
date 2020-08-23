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
  nControl: FormControl = new FormControl();
  pControl: FormControl = new FormControl();
  kControl: FormControl = new FormControl();
  allSoilDetails = [];
  searchObj: any = {};
  constructor(private soilService: SoildataService) { }

  ngOnInit(): void {
  this.searchControl.valueChanges.subscribe(value => this.updateValues(value));
  this.nControl.valueChanges.subscribe(value => {this.searchObj.n = value; this.updateNPKValues();  });
  this.pControl.valueChanges.subscribe(value => {this.searchObj.p = value; this.updateNPKValues();  });
  this.kControl.valueChanges.subscribe(value => {this.searchObj.k = value; this.updateNPKValues();  });
  }

  updateValues(value) {
    this.nControl.setValue('', {emitEvent: false});
    this.pControl.setValue('', {emitEvent: false});
    this.kControl.setValue('', {emitEvent: false});
    this.soilService.searchSoilDetails(value).subscribe(data => {
          console.log(data);
          this.allSoilDetails = data;
        });
  }

  updateNPKValues() {
    const value = this.searchObj;
    this.searchControl.setValue('', {emitEvent: false});
    Object.keys(this.searchObj).map((e) => {if (this.searchObj[e] == '') { delete this.searchObj[e]; }});
    console.log(value);
    this.soilService.searchByNPK(value).subscribe(data => {
      console.log(data);
      this.allSoilDetails = data;
    });
  }

}
