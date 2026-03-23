import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-side-menu',
  imports: [MatListModule, RouterModule],
  templateUrl: './left-side-menu.html',
  styleUrl: './left-side-menu.css',
})
export class LeftSideMenu {}


