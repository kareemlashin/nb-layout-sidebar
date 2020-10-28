import { Component, OnInit } from '@angular/core';
import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import {NbLayoutDirection, NbLayoutDirectionService} from "@nebular/theme";

@Component({
  selector: 'app-nav-two',
  templateUrl: './nav-two.component.html',
  styleUrls: ['./nav-two.component.scss']
})
export class NavTwoComponent implements OnInit {
  constructor(private readonly sidebarService: NbSidebarService,private  directionService: NbLayoutDirectionService) {

  }

  ngOnInit(): void {
    if ( this.layout_direction === NbLayoutDirection.RTL) {
      this.sidebar_class = 'menu-sidebar-rtl';
    }
  }

  layout_direction: NbLayoutDirection = this.directionService.getDirection();
  sidebar_class: string = 'menu-sidebar';



  dir: any = 'ltr';
  items: NbMenuItem[] = [
    {
      title: 'cards',
      icon: 'folder-outline',
      link: '/cards',
    },
    {
      title: 'widget',
      icon: 'credit-card-outline',
      link: '/widget'
    }

    ,
    {
      title: 'avatar',
      icon: 'attach-2-outline',
      link: '/avatar'
    }
  ];

  dirChange(){

if (this.dir == 'rtl') {
      this.dir = 'ltr';
    }else{
      this.dir = 'rtl';
    }
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }
  
}
