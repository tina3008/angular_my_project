import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QuestionItem } from '../category/category.config';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { TypingAnimationDirective } from '../../directives/typing-animation';

@Component({
  selector: 'app-generate-answer-modal',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule, TypingAnimationDirective],
  templateUrl: './generate-answer-modal.html',
  styleUrl: './generate-answer-modal.css',
})
export class GenerateAnswerModal {
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<GenerateAnswerModal>,
    @Inject(MAT_DIALOG_DATA)
    public data: Pick<QuestionItem, 'question' | 'answer'>,
  ) {}

  ngOnInit(): void {
    if (!this.data.answer) {
      this.regenerateAnswer();
    }
  }
  regenerateAnswer() {
    // TODO - call the service
    this.isLoading = true;
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      this.data.answer = 'New generated answer based on some API call or logic';
      this.isLoading = false; // Set to false once the data is updated
    }, 2000);
  }

  saveAnswer() {
    this.dialogRef.close(this.data.answer);
  }
}
