import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {

  userForm!: FormGroup;
  isFormSubmitted: boolean = false;

  constructor(
    private usersService: UsersService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
  }

  //  get f(){
  //   return this.userForm.controls
  //  }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      department: ['', [Validators.required]],
      role: ['', [Validators.required]],
      address: [''],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cpassword: [''],
      status:[true]

    }, 
    { validator: this.passwordMatchValidator }
  );



  }

  passwordMatchValidator(formGroup: FormGroup) {
    const passwordControl = formGroup.get('password');
    const confirmPasswordControl = formGroup.get('cpassword');

    if (passwordControl?.value === confirmPasswordControl?.value) {
      confirmPasswordControl?.setErrors(null);
    } else {
      confirmPasswordControl?.setErrors({ passwordMismatch: true });
    }
  }

  submitForm() {
    this.isFormSubmitted = true;
    // console.log("chk: ", this.isFormSubmitted)
    if(this.userForm.invalid){
      return;
    }

    console.log("new data: ", this.userForm.value);
    this.usersService.addUser(this.userForm.value).subscribe(data => {
      alert("added successfully...");
      this.userForm.reset();
      this._router.navigateByUrl('/')
    })

    const isFormValid = this.userForm.valid
    // debugger    
  }
}
