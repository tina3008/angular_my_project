import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { SignInService } from '../../services/sign-in/sign-in';


@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatInputModule],
  templateUrl: './sign-in-modal.html',
  styleUrl: './sign-in-modal.css',
})
export class SignInModal {
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignInModal>,
    public signInService: SignInService,
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.signInForm.valid) {
      const { login, password } = this.signInForm.value;
      console.log('Login:', login);
      console.log('Password:', password);
      // TODO - Call the service
      this.signInService.login(login, password).subscribe(() => {
        this.dialogRef.close(this.signInForm.value);
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  get login() {
    return this.signInForm.get('login');
  }

  get password() {
    return this.signInForm.get('password');
  }
}
