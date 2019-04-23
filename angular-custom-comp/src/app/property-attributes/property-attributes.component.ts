import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-property-attributes',
  templateUrl: './property-attributes.component.html',
  styleUrls: ['./property-attributes.component.css']
})
export class PropertyAttributesComponent implements OnInit {
  @Input() attrProperties: any[];
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
