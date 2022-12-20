export class Quiz {
  constructor() {
    this.result = 0;
    this.testContainer = document.querySelector('.test__container');
    this.currentQuestion = 0;
    this.currentQuiz = null;
    this.currentAnswers = [];
    this.quizContainer = document.querySelector('.quiz');
    this.quiz = [];
  }
  startQuiz() {
    this.currentAnswers = [];
    this.testContainer.classList.add('hidden');
    this.currentQuestion = 0;
    if (this.currentQuiz) {
      this.quizContainer.innerHTML = `
      <p class="quiz__question fadeInAnim">
        ${this.currentQuiz[this.currentQuestion].question}
      </p>
    <div class="quiz__answers fadeInAnim"> </div>
      `;

      const answerContainer = document.querySelector('.quiz__answers');
      this.currentQuiz[this.currentQuestion].answers.forEach(question => {
        const html = `
        <button class="quiz__btn btn btn_outlined" >
          ${question.answer}
        </button>
        `;
        answerContainer.insertAdjacentHTML('beforeend', html);
      });
      document.querySelectorAll('.quiz__btn').forEach((btn, i) => {
        btn.addEventListener('click', () => this.clickHandler(i));
      });
    }
  }
  changeQuestion(answer) {
    this.currentAnswers.push(answer);
    this.currentQuestion = this.currentQuestion + 1;
    if (this.currentQuestion === this.currentQuiz.length) {
      this.endQuiz();
    } else {
      this.updateUi();
    }
  }

  updateUi() {
    if (this.currentQuiz) {
      this.quizContainer.innerHTML = `
      <p class="quiz__question fadeInAnim">
        ${this.currentQuiz[this.currentQuestion].question}
      </p>
    <div class="quiz__answers fadeInAnim"> </div>
      `;

      const answerContainer = document.querySelector('.quiz__answers');
      answerContainer.innerHTML = '';
      this.currentQuiz[this.currentQuestion].answers.forEach(question => {
        const html = `
        <button class="quiz__btn btn btn_outlined" >
          ${question.answer}
        </button>
        `;
        answerContainer.insertAdjacentHTML('beforeend', html);
      });
      document.querySelectorAll('.quiz__btn').forEach((btn, i) => {
        btn.addEventListener('click', () => this.clickHandler(i));
      });
    }
  }
  endQuiz() {
    this.quizContainer.innerHTML = '';
    this.result = this.currentAnswers.reduce((acc, value) => (acc += value));
    this.showResult();
  }
  clickHandler(i) {
    return this.changeQuestion(
      this.currentQuiz[this.currentQuestion].answers[i].isTrue
    );
  }
  showResult() {
    this.quizContainer.innerHTML = `
    <div class="quiz__result zoomInAnim">
    <div class="quiz__result-block">
      <p class="quiz__result-label">
        Ваш результат
        <span>
          ${this.result}
        </span>
      </p>
      <button class = "quiz__restart-btn btn">
        Пройти тест снова
      </button>
      <p class="quiz__result-info">
        ${this.resultInfo(this.result)}     
      </p>
    </div>
  </div>  `;
    document
      .querySelector('.quiz__restart-btn')
      .addEventListener('click', () => {
        this.testContainer.classList.remove('hidden');
        this.quizContainer.innerHTML = ``;
      });
  }
  resultInfo(result) {
    switch (result) {
      case 0: {
        return 'Ты смешарик';
      }
      case 1: {
        return 'Тебе следует повторить теорию!';
      }
      case 2: {
        return 'Такими темпеми ты дойдешь к своей цели';
      }
      case 4: {
        return 'Ты молодец, продолжай в том же духе!';
      }
      case 5: {
        return 'Уже тянешь на Junior программиста';
      }
      case 6: {
        return 'Уже тянешь на Middle программиста';
      }
      default: {
        return 'красава чел лучший, ты уничтожил этот сайт 😎';
      }
    }
  }
  async init() {
    const data = await fetch(
      'https://639e44623542a26130598a8a.mockapi.io/Quiz'
    ).then(data => data.json());
    this.quiz = data[0];
    document.querySelectorAll('[data-difficulty]').forEach(btn => {
      btn.addEventListener('click', () => {
        const difficulty = btn.getAttribute('data-difficulty');
        this.currentQuiz = this.quiz[difficulty]['questions'];
        this.startQuiz();
      });
    });
  }
  destroy() {
    this.result = 0;
    this.currentQuestion = 0;
    this.currentQuiz = null;
    this.currentAnswers = [];
    this.testContainer.classList.remove('hidden');
    this.quizContainer.innerHTML = ' ';
  }
}
