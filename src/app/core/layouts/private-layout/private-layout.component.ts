import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { NavService } from '@app/core/services/nav.service';

@Component({
  selector: 'app-private-layout',
  templateUrl: './private-layout.component.html',
  styleUrls: ['./private-layout.component.scss'],
})
export class PrivateLayoutComponent implements OnInit, AfterViewInit {
      sideBarOpened = false;
      isMobile$: Observable<boolean>;
      @ViewChild('appDrawer') appDrawer: ElementRef;

      constructor(private navService: NavService) {
            this.isMobile$ = this.navService.isMobile;
      }

      ngOnInit() {

      }

      ngAfterViewInit(): void {
            this.navService.appDrawer = this.appDrawer;
      }

      sideBarToggler() {
            this.sideBarOpened = !this.sideBarOpened;
      }
}
