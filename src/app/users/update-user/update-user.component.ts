import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {

  showAdd !: boolean;
  showUpdate !: boolean;
  isFormSubmitted: boolean = false;

  id!: any;
  user!: any;

  userForm!: FormGroup;

  constructor(
    private usersService: UsersService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.userForm = new FormGroup({
    })
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((param) => {
      this.id = (param.get('id'));
      // console.log("id: ", this.id);
      this.getById(this.id)
    })
  }

  getById(id: any) {
    this.usersService.edit(id).subscribe((data: any) => {
      // console.log("users: ", data);
      this.user = data
      // this.userForm = data;

      this.userForm = new FormGroup({
        id: new FormControl(this.user.id),
        fname: new FormControl(this.user ? this.user.fname : null, [Validators.required]),
        lname: new FormControl(this.user ? this.user.lname : null, [Validators.required]),
        email: new FormControl(this.user ? this.user.email : null, [Validators.required, Validators.email]),
        department: new FormControl(this.user ? this.user.department : null, [Validators.required]),
        role: new FormControl(this.user ? this.user.role : null, [Validators.required]),
        address: new FormControl(this.user ? this.user.address : null),
        phone: new FormControl(this.user ? this.user.phone : null),
        // password: new FormControl(""),
        // cpassword: new FormControl(""),
        status: new FormControl(this.user.status == true ? this.user.status : false),
      })

    })
  }

  updateForm() {
    this.isFormSubmitted = true;
    this.usersService.updateUser(this.userForm.value).subscribe((data) => {
      alert("Update successfully...");
      this._router.navigateByUrl('/')
      // debugger
    })
    // const isFormValid = this.userForm.valid
    // debugger

  }

}
