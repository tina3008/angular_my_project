import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

import { SignUpService } from '../../services/sign-up/sign-up';
import { log } from 'console';
@Component({
  selector: 'app-sign-up-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatButtonModule, MatInputModule],

  templateUrl: './sign-up-modal.html',
  styleUrl: './sign-up-modal.css',
})
export class SignUpModal {
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignUpModal>,
    public signUpService: SignUpService,
  ) {
    this.signUpForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      const { login, email, password, firstName, lastName } = this.signUpForm.value;
      this.signUpService.register(login, email, password, firstName, lastName).subscribe(() => {
        this.dialogRef.close(this.signUpForm.value);
        console.log('sigup-email', email);
        console.log('sigup-password', password);
        console.log('sigup-firstName', firstName);
        console.log('sigup-lastName', lastName);

      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get login() {
    return this.signUpForm.get('login');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get firstName() {
    return this.signUpForm.get('firstName');
  }

  get lastName() {
    return this.signUpForm.get('lastName');
  }
}
