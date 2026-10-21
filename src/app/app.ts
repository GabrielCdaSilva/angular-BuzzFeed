import { Component } from '@angular/core';
import { QuizzComponent } from './components/quizz/quizz.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuizzComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Shell component hosting the BuzzFeed Quiz experience
}
