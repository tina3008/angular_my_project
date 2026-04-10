
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationModal } from '../delete-confirmation-modal/delete-confirmation-modal';
import { QuestionItem } from '../category/category.config';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { GenerateAnswerModal } from '../generate-answer-modal/generate-answer-modal';

import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { PreparationService } from '../../services/preparation/preparation';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-preparation',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './preparation.html',
  styleUrl: './preparation.css',
})
export class Preparation {
  displayedColumns: string[] = ['position', 'question', 'actions'];
  dataSource = new MatTableDataSource<QuestionItem>();
  category: string = '';
  isLoading = false;

  private destroy$ = new Subject<void>();

  constructor(
    public dialog: MatDialog,
    public preparationService: PreparationService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        takeUntil(this.destroy$),
        switchMap((queryParams) => {
          this.category = queryParams['tabName'] || '';
          this.isLoading = true;
          return this.preparationService.getPreparationQuestionsByCategory(this.category);
        }),
      )
      .subscribe((response) => {
        this.isLoading = false;
        this.dataSource = response.data as any;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  updateAnswer(categoryName: string, question: Partial<QuestionItem>, id: number): void {
    this.preparationService
      .updatePreparationQuestionById(question, id)
      .subscribe((response) => {
        console.log(response);
      });
  }

  openGenerateDialog(question: QuestionItem, index: number): void {
    const dialogRef = this.dialog.open(GenerateAnswerModal, {
      width: '500px',
      data: {
        // question: question.question,
        // answer: question.answer,
        ...question,
        index,
      },
    });

    dialogRef.afterClosed().subscribe((result: string) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.updateAnswer(this.category, { answer: result }, question.id);
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
        this.deleteAnswer(this.category, question.id);
      }
    });
  }

  deleteAnswer(categoryName: string, id: number): void {
    this.preparationService
      .deletePreparationQuestionById(categoryName, id)
      .subscribe((response) => console.log(response));
  }
}
