import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  constructor(private el: ElementRef) {}
  AboutMe:String = "Hi, My name is Frank Javier Pérez, and I have extensive experience in .NET development in C# and VB.NET. My experience spans web development, application migration, database management, and report generation. I have been involved in the creation of web services and applications, including designing forms and developing database procedures. I have also been responsible for migrating applications from VB6 to C# to modernize systems. Additionally, I have expertise in report generation using Crystal Reports, providing valuable insights for decision-making. With a proven track record of delivering high-quality work, I bring a wealth of experience and adaptability to any organization. My ability to excel in dynamic environments and effectively collaborate with teams makes me well-equipped to take on new projects and challenges.";

ngAfterViewInit() {
  const scrollContainer = this.el.nativeElement.querySelector('#container');
  const sections: HTMLElement[] = Array.from(this.el.nativeElement.querySelectorAll('section'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  const threshold = 0.2; // Umbral para activar el enlace (50% de visibilidad)

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        const activeNavLink = navLinks.find(link => link.getAttribute('href') === `#${sectionId}`);
        if (activeNavLink) {
          navLinks.forEach(link => link.classList.remove('active'));
          activeNavLink.classList.add('active');
        }
      }
    });
  }, { root: scrollContainer, threshold });

  sections.forEach(section => {
    observer.observe(section);
  });
}


/*
private activeSectionId: string | null = null;

ngAfterViewInit() {
  this.observeSections();
}

@HostListener('window:scroll', ['$event'])
onScroll(event: Event) {
  this.checkSectionVisibility();
}

private observeSections() {
  const scrollContainer = this.el.nativeElement.querySelector('#container');
  const sections: HTMLElement[] = Array.from(this.el.nativeElement.querySelectorAll('section'));

  const threshold = 0.2; // Umbral para activar el enlace (20% de visibilidad)

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.activeSectionId = entry.target.id;
        this.updateActiveNavLink();
      }
    });
  }, { root: scrollContainer, threshold });

  sections.forEach(section => {
    observer.observe(section);
  });

  this.checkSectionVisibility(); // Llamada inicial para establecer el enlace activo al cargar la página
}

private checkSectionVisibility() {
  const visibleSection = Array.from(this.el.nativeElement.querySelectorAll('section')).find(section => {
    const rect = (section as HTMLElement).getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
    return isVisible;
  });

  if (visibleSection) {
    this.activeSectionId = (visibleSection as HTMLElement).id;
    this.updateActiveNavLink();
  }
}

private updateActiveNavLink() {
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));

  navLinks.forEach(link => {
    const sectionId = link.getAttribute('href')?.substring(1);
    if (sectionId === this.activeSectionId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
*/
}
