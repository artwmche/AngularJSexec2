import { Component, OnInit } from '@angular/core';
import { PeriodicService } from '../periodic.service';
import {forEach} from '../../../node_modules/@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  elements;
  xpos:number=0;
  ypos:number=0;
  tableWidth:Array<any>;
  tableHeight:Array<any>;
  table:Array<Array<any>> = [];

  constructor(private periodicService: PeriodicService) { }

  ngOnInit() {
    this.periodicService.getElements().then(response => {
      console.log(response['elements']);
      this.elements = response['elements'];
      for (let i = 0 ; i < this.elements.length ; i++ ) {
        let element = this.elements[i];
        console.log(element.name + ' ' + element.xpos + ' ' + element.ypos);
        if ( this.xpos < element.xpos ) {
          this.xpos = element.xpos;
        }
        if ( this.ypos < element.ypos ) {
          this.ypos = element.ypos;
        }
      }
      console.log('largest xpos:' + this.xpos);
      console.log('largest ypos:' + this.ypos);
      this.tableWidth = new Array(this.xpos);
      this.tableHeight = new Array(this.ypos);
      let rowCount:number = 1;
      this.table[0] = [];
      for (let i = 0 ; i < this.elements.length ; i++){
        let element = this.elements[i];
        this.tableWidth = new Array(this.xpos);
        if (rowCount == element.ypos) {
          this.table[element.ypos - 1][element.xpos - 1] = element;
          console.log(this.table[element.ypos - 1][element.xpos - 1].name);
        } else {
          this.table[element.ypos - 1] = [];
          this.table[element.ypos - 1][element.xpos - 1] = element;
          console.log(this.table[element.ypos - 1][element.xpos - 1].name);
          rowCount = element.ypos;
        }
      }
    });
  }
  searchPeriodic(event: any) {
    let list = document.getElementById('PeriodicTable').getElementsByTagName("div");
    for (let i = 0 ; i < list.length ; i++){
      if (list[i].id) {
        if (event.target.value.toLowerCase().length > 0 ) {
          if (list[i].id.toString().toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
            document.getElementById(list[i].id).style.backgroundColor = "Gold";
          }
          else {
            document.getElementById(list[i].id).style.backgroundColor = "white";
          }
        }
        else {
          document.getElementById(list[i].id).style.backgroundColor = "white";
        }
      }

    }
  }
}
