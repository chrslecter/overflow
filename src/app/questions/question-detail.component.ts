import { Component } from '@angular/core';
import { Question } from './question.model';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent {
  question: Question = new Question(
    'Saber cosas sobre android',
    'Mire, esta es mi pregunta',
    new Date,
    'devicon-android-plain colored'
  );
}
