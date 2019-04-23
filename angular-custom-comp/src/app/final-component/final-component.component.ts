import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-component',
  templateUrl: './final-component.component.html',
  styleUrls: ['./final-component.component.css']
})
export class FinalComponentComponent implements OnInit {
  orientVertical: string = "horizontal";
  orientHorizontal: string= "vertical";
  datas: any[] = [
    {
      title:"one",
      ar:[
        {
          display:"nameOne"
        },
        {
          display:"nameTwo"
        },
        {
          display:"nameThree"
        }
      ]
    },
    {
      title:"two",
      ar:[
        {
          display:"anameOne"
        },
        {
          display:"anaameTwo"
        },
        {
          display:"anameThree"
        }
      ]
    },
    {
      title:"three",
      ar:[
        {
          display:"bnameOne"
        },
        {
          display:"bnameTwo"
        },
        {
          display:"bnameThree"
        }
      ]
    },

  ]
  constructor() { }

  ngOnInit() {
  }

}
