import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ToggleSkills(event : Event){
    let e = (event.target as Element);
    while(!e.classList.contains('skills__content')){
      e = e.parentElement;
    }
    if(e.classList.contains('skills__open')){
      e.classList.remove('skills__open');
      e.classList.add('skills__close');
    }else{
      e.classList.remove('skills__close');
      e.classList.add('skills__open');
    }
  }

  ngOnInit(): void {
  }

}
