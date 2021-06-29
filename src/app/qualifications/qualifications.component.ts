import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.css']
})
export class QualificationsComponent implements OnInit {

  constructor() { }

  ToggleActive(event : Event){

    let e : Element = (event.target as Element);
    let id : string;

    while(!e.classList.contains('qualification__button')){
      e = e.parentElement;
    }

    id = e.id;

    if(e.parentElement.children.item(0).id !== id){
      if(!e.parentElement.children.item(1).classList.contains('qualification__active')){
        e.parentElement.children.item(1).classList.add('qualification__active');
        e.parentElement.children.item(0).classList.remove('qualification__active');}
    }else{
      if(!e.parentElement.children.item(0).classList.contains('qualification__active')){
        e.parentElement.children.item(0).classList.add('qualification__active');
        e.parentElement.children.item(1).classList.remove('qualification__active');}
    }

    while(!e.classList.contains('qualification__container')){
      e = e.parentElement;
    }

    e = e.children.item(1);

    for (let i = 0; i < e.children.length; i++) {
      e.children.item(i).classList.remove('qualification__active');
    }

    for (let i = 0; i < e.children.length; i++) {
      if (e.children.item(i).classList.contains(id)) {
        e.children.item(i).classList.add('qualification__active');
      }
    }

    console.log(e);
    // if (e.id === 'education') {
    //   if (!e.classList.contains('qualification__active')) {
    //     const work = document.getElementById('work');
    //     work.classList.remove('qualification__active')
    //   }
    // }else{
    //   if (!e.classList.contains('qualification__active')) {
    //     const education = document.getElementById('education');
    //     education.classList.remove('qualification__active')
    //   }
    // }

  }

  ngOnInit(): void {
  }

}
