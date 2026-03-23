import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TopMenu } from './components/top-menu/top-menu';
import { LeftSideMenu } from './components/left-side-menu/left-side-menu';
import { Category } from './components/category/category';
import { DeleteConfirmationModal } from './components/delete-confirmation-modal/delete-confirmation-modal';
import { GenerateAnswerModal } from './components/generate-answer-modal/generate-answer-modal';
import { Preparation } from './components/preparation/preparation';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { UserPanel } from './components/user-panel/user-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    Category,
    DeleteConfirmationModal,
    GenerateAnswerModal,
    LeftSideMenu,
    Preparation,
    TopMenu,
    PageNotFound,
    UserPanel,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
