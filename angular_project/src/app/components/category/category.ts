import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { QuestionItem, MOCK_DATA } from './category.config';
import { MatDialog } from '@angular/material/dialog';
import { GenerateAnswerModal } from '../generate-answer-modal/generate-answer-modal';
import { DeleteConfirmationModal } from '../delete-confirmation-modal/delete-confirmation-modal';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, TruncatePipe],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  displayedColumns: string[] = ['position', 'question', 'answer', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>(MOCK_DATA);

  constructor(public dialog: MatDialog) {}

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
