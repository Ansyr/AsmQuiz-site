export class Quiz {
  constructor() {
    this.currentQuestion = 0;
    this.quiz = {
      easy: {
        questions: [
          {
            question: '123',
            answers: [
              {
                answer: 'A',
                isTrue: true,
              },
              {
                answer: 'B',
                isTrue: false,
              },
              {
                answer: 'C',
                isTrue: true,
              },
            ],
          },
          {
            question: '231',
            answers: [
              {
                answer: 'A',
                isTrue: true,
              },
              {
                answer: 'B',
                isTrue: false,
              },
              {
                answer: 'C',
                isTrue: true,
              },
            ],
          },
          {
            question: '423',
            answers: [
              {
                answer: 'A',
                isTrue: true,
              },
              {
                answer: 'B',
                isTrue: false,
              },
              {
                answer: 'C',
                isTrue: true,
              },
            ],
          },
        ],
      },
      medium: {},
      hard: {},
    };
  }
  startQuiz() {
    this.currentQuestion = 0;
    const quizContainer = document.querySelector('quiz');
  }
}
