import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;

  activeLink: string = 'about'; // Inicialmente ningún enlace está activo

  setActiveLink(link: string) {
    this.activeLink = link;
  }
  
  closeNavbar(): void {
    if (this.navbarToggler.nativeElement.getAttribute('aria-expanded') === 'true') {
      this.navbarToggler.nativeElement.click();
    }
  }

}

