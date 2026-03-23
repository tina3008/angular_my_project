// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-preparation',
//   imports: [],
//   templateUrl: './preparation.html',
//   styleUrl: './preparation.css',
// })
// export class Preparation {}

import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationModal } from '../delete-confirmation-modal/delete-confirmation-modal';
import { MOCK_DATA } from './preparation.config';
import { QuestionItem } from '../category/category.config';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { GenerateAnswerModal } from '../generate-answer-modal/generate-answer-modal';

@Component({
  selector: 'app-preparation',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, TruncatePipe],
  templateUrl: './preparation.html',
  styleUrl: './preparation.css',
})
export class Preparation {
  displayedColumns: string[] = ['position', 'question', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  constructor(public dialog: MatDialog) {}

  openGenerateDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(GenerateAnswerModal, {
      width: '500px',
      data: {
        question: question.question,
        answer: question.answer,
      },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed', result);
      if (result) {
        // TODO - call the service for updating an answer
      }
    });
  }

  openDeleteDialog(question: QuestionItem): void {
    const dialogRef = this.dialog.open(DeleteConfirmationModal, {
      width: '333px',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      console.log('The dialog was closed', result);
      if (result) {
        console.log('Question would be deleted.', question);
        // TODO - call the service for deleting an answer
      }
    });
  }
}
