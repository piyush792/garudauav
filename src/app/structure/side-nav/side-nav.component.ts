import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() sideNavStatus: boolean = false;

  result: any;
  lists: any;

  constructor() {
  }
  ngOnInit(): void {
      this.lists = [
        {
          number: '1',
          name: 'Dashboard',
          img: 'grid_view.png',
          routerLnk: '/dashboard',
        },
        {
          number: '2',
          name: 'Project',
          img: 'article.png',
          routerLnk: '/project',
          
        },
        {
          number: '3',
          name: 'Department',
          img: 'business_center.png',
          routerLnk: '#',
          
        },
        {
          number: '4',
          name: 'User',
          img: 'group_add.png',
          routerLnk: '/users/lists',
          
        },
        {
          number: '5',
          name: 'Flight Planning',
          img: 'Group_385.png',
          routerLnk: '/flight_planning',
          
        },
        {
          number: '6',
          name: 'Workspace',
          img: 'photo_library.png',
          routerLnk: '/workspace',
          
        },
        {
          number: '7',
          name: 'Asset',
          img: 'inventory_2.png',
          routerLnk: '/asset',
          
        },
        {
          number: '8',
          name: 'Vendor',
          img: 'control_point_duplicate.png',
          routerLnk: '/vendor',
          
        },
        {
          number: '9',
          name: 'Client',
          img: 'clinical_notes.png',
          routerLnk: '/client',
          
        },
        {
          number: '10',
          name: 'Location',
          img: 'add_location_alt.png',
          routerLnk: '/location',
          
        }
      ]
      console.log(this.lists)
    

  }
}
