import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UsersService } from '../../services/users.service';

declare var jQuery: any;
@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.scss'],
  providers: [DatePipe]
})
export class UsersListsComponent implements OnInit {

  result: any = [];
  userRecords: any = [];
  userRecordsDetails: any = [];

  loading = false;
  params: any;
  layout: any = {};
  hideCardBody: boolean = true;
  modalRef: any;
  userText: string = '';

  constructor(
    private usersService: UsersService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  title = 'innovation tracker back';
  sideNavStatus: boolean = false;

  // Get users Lists
  getAllUser() {
    this.loading = true;

    this.usersService.getUsersLists().subscribe({
      next: (data) => {
        this.result = data;
        this.userRecords = this.result;
        console.log("userRecordsDetails: ", this.userRecords)
      },
      error: (err) => {
        console.log(err.message);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

}
