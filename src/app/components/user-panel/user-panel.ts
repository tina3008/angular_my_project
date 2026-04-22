import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of } from 'rxjs';
import { SignInModal } from '../sign-in-modal/sign-in-modal';
import { SignUpModal } from '../sign-up-modal/sign-up-modal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.css',
})
export class UserPanel {
  user$: Observable<{firstName: string, lastName: string}> = of();

  constructor( private dialog: MatDialog) {}

  signOut(): void {
    // Implement Signout
  }

  openSignInModal(): void {
    const dialogRef = this.dialog.open(SignInModal, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Call the service
      }
    });
  }

  openSignUpModal(): void {
    const dialogRef = this.dialog.open(SignUpModal, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Call the service
      }
    });
  }
}
