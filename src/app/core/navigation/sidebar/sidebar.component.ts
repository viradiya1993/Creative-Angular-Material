import { Component, OnInit } from '@angular/core';
import { NavService } from '@app/core/services/nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  toggle: boolean[];
  constructor(private navService: NavService) { 
    this.toggle = this.myArray.map(i => false);
  }

  ngOnInit() {
  }
  myArray = [
    {
      'title': 'Purchases',
      'icon':'shopping_basket',
      'children': [
        {
          'icon':'shopping_basket',
          'title': 'Purchases'
        },
        {
          'icon':'shopping_basket',
          'title': 'Purchases',
          
        }
      ]
    },
    {
      'title': 'Sales',
      'icon':'money',
      'children': [
        {
          'icon':'money', 
          'title': 'Sales'
        },
        {
          'icon':'money',
          'title': 'Sales',
          
        }
      ]
    },
  ];

  getPosition(i: string): String {
    return i === "Purchases" ? '65px' : '100px';
  }
  
  closeSidenav(): void {
        this.navService.closeNav();
  }
  
}
