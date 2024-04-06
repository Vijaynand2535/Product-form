import { Component, OnInit } from '@angular/core';
import { Istudent } from '../../models/student';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.scss']
})
export class StudentformComponent implements OnInit {
stdForm : Array<Istudent> = [
    // {
    //   title : "Angular",
    //   para : "angular is js framework",
    //   img : ""
    // }
]
  constructor() { }

  ngOnInit(): void {
  }
  onClick(productname : HTMLInputElement,productinfo: HTMLInputElement,productimgurl : HTMLInputElement){
    let productObj : Istudent = {
         title : productname.value,
         para : productinfo.value,
         img : productimgurl.value
    }
    this.stdForm.push(productObj)
    productname.value = '';
    productinfo.value = '';
    productimgurl.value=''


  }
}
