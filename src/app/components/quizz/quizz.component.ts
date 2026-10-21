import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ALL_QUIZZES, HERO_VILLAIN_QUIZ, Option, Question, QuizData, QuizResult } from '../../data/quizz_questions';
import { SoundService } from '../../services/sound.service';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css'
})
export class QuizzComponent {
  public soundService = inject(SoundService);

  // Available quizzes
  public readonly availableQuizzes = signal<QuizData[]>(ALL_QUIZZES);
  public readonly currentQuiz = signal<QuizData>(HERO_VILLAIN_QUIZ);

  // State
  public readonly questionIndex = signal<number>(0);
  public readonly userAnswers = signal<Record<number, 'A' | 'B'>>({});
  public readonly isFinished = signal<boolean>(false);
  public readonly toastMessage = signal<string | null>(null);

  // Current Question
  public readonly currentQuestion = computed<Question | null>(() => {
    const quiz = this.currentQuiz();
    const index = this.questionIndex();
    if (!quiz || index >= quiz.questions.length) return null;
    return quiz.questions[index];
  });

  // Total questions
  public readonly totalQuestions = computed<number>(() => {
    return this.currentQuiz().questions.length;
  });

  // Progress percentage
  public readonly progressPercent = computed<number>(() => {
    const total = this.totalQuestions();
    if (total === 0) return 0;
    const answeredCount = Object.keys(this.userAnswers()).length;
    return Math.round((answeredCount / total) * 100);
  });

  // Check if current question has an answer
  public readonly currentAnswer = computed<'A' | 'B' | undefined>(() => {
    const q = this.currentQuestion();
    if (!q) return undefined;
    return this.userAnswers()[q.id];
  });

  // Final Result calculation
  public readonly finalResult = computed<QuizResult | null>(() => {
    if (!this.isFinished()) return null;

    const answers = Object.values(this.userAnswers());
    const countA = answers.filter(a => a === 'A').length;
    const countB = answers.filter(a => a === 'B').length;

    const quiz = this.currentQuiz();
    if (countA > countB) {
      return quiz.results.A;
    } else if (countB > countA) {
      return quiz.results.B;
    } else {
      return quiz.results.tie || quiz.results.A;
    }
  });

  // Result stats percentage
  public readonly stats = computed<{ percentA: number; percentB: number }>(() => {
    const answers = Object.values(this.userAnswers());
    const total = answers.length || 1;
    const countA = answers.filter(a => a === 'A').length;
    const countB = answers.filter(a => a === 'B').length;

    return {
      percentA: Math.round((countA / total) * 100),
      percentB: Math.round((countB / total) * 100)
    };
  });

  // Option selection
  public onSelectOption(option: Option): void {
    const q = this.currentQuestion();
    if (!q) return;

    this.soundService.playSelectSound();

    // Record answer
    this.userAnswers.update(curr => ({
      ...curr,
      [q.id]: option.alias
    }));

    // Auto-advance after brief delay for visual feedback
    setTimeout(() => {
      const nextIndex = this.questionIndex() + 1;
      if (nextIndex < this.totalQuestions()) {
        this.questionIndex.set(nextIndex);
        this.soundService.playNextSound();
      } else {
        // All answered!
        this.isFinished.set(true);
        this.soundService.playVictorySound();
      }
    }, 280);
  }

  // Navigation arrows
  public prevQuestion(): void {
    if (this.questionIndex() > 0) {
      this.questionIndex.update(i => i - 1);
      this.soundService.playNextSound();
    }
  }

  public nextQuestion(): void {
    if (this.questionIndex() < this.totalQuestions() - 1) {
      this.questionIndex.update(i => i + 1);
      this.soundService.playNextSound();
    } else if (Object.keys(this.userAnswers()).length === this.totalQuestions()) {
      this.isFinished.set(true);
      this.soundService.playVictorySound();
    }
  }

  // Jump to specific question
  public jumpToQuestion(index: number): void {
    if (index >= 0 && index < this.totalQuestions()) {
      this.questionIndex.set(index);
      this.soundService.playNextSound();
    }
  }

  // Restart quiz
  public restartQuiz(): void {
    this.userAnswers.set({});
    this.questionIndex.set(0);
    this.isFinished.set(false);
    this.soundService.playNextSound();
  }

  // Switch Quiz
  public switchQuiz(quizId: string): void {
    const target = this.availableQuizzes().find(q => q.id === quizId);
    if (target && target.id !== this.currentQuiz().id) {
      this.currentQuiz.set(target);
      this.restartQuiz();
    }
  }

  // Share result
  public shareResult(): void {
    const res = this.finalResult();
    const quiz = this.currentQuiz();
    if (!res) return;

    const text = `Fiz o teste "${quiz.title}" no BuzzFeed Clone e meu resultado foi: ${res.title}! 💥 Venha descobrir o seu!`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast('Resultado copiado para a área de transferência! 📋');
      }).catch(() => {
        this.showToast('Compartilhe: ' + text);
      });
    } else {
      this.showToast('Compartilhe: ' + text);
    }
  }

  private showToast(msg: string): void {
    this.toastMessage.set(msg);
    setTimeout(() => {
      this.toastMessage.set(null);
    }, 3500);
  }
}
