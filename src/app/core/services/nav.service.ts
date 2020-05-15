import { EventEmitter, Injectable } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string>(undefined);
  public isMobile = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  public closeNav() {
    this.appDrawer.close();
    console.log(123);
  }

  public openNav() {
    this.appDrawer.open();
  }

  public toggleNav() {
    this.appDrawer.opened ? this.appDrawer.close() : this.appDrawer.open();
  }
}
