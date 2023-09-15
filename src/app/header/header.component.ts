import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  public constructor() {

  }

  public ShowMenu() : void {
    const menu = document.getElementById('nav-menu');
    menu.classList.add('show-menu');
  }

  public HideMenu() : void {
    const menu = document.getElementById('nav-menu');
    menu.classList.remove('show-menu');
  }

  public DarkMode(){

    const Btn = document.getElementById('theme-button'),
    DarkTheme = 'dark-theme',
    IconTheme = 'uil-sun';

    const selectedTheme = localStorage.getItem('selected-theme'),
          selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(DarkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => Btn.classList.contains(IconTheme) ? 'uil-moon' : 'uil-sun';

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](DarkTheme);
    Btn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](IconTheme)

    document.body.classList.toggle(DarkTheme);
    Btn.classList.toggle(IconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
  }

  ngOnInit(): void {
  }

}
