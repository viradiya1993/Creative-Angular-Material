import { Component, HostListener } from '@angular/core';
import { NavService } from '@app/core/services/nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.navService.isMobile.next(window.innerWidth < 600);
  }

  constructor(private navService: NavService) {
    this.navService.isMobile.next(window.innerWidth < 600);
  }
}
