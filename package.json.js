export default {
    data() {
      return {
        questionText: '', // Текст вопроса
        questionType: 'text', // Тип вопроса
        answers: [], // Варианты ответа
        correctAnswer: null, // Правильный ответ для single-choice
        correctAnswers: [], // Правильные ответы для multiple-choice
        questions: [] // Список добавленных вопросов
      };
    },
    methods: {
      // Добавить новый вариант ответа
      addAnswer() {
        this.answers.push({ text: '' });
      },
      // Удалить вариант ответа
      removeAnswer(index) {
        this.answers.splice(index, 1);
      },
      // Добавить вопрос в список вопросов
      addQuestion() {
        if (this.questionText.trim() === '') {
          alert('Введите текст вопроса.');
          return;
        }
  
        const newQuestion = {
          text: this.questionText,
          type: this.questionType,
          answers: this.answers,
          correctAnswer: this.correctAnswer,
          correctAnswers: this.correctAnswers
        };
  
        this.questions.push(newQuestion);
  
        // Очистить форму
        this.resetForm();
      },
      // Очистить форму после добавления вопроса
      resetForm() {
        this.questionText = '';
        this.questionType = 'text';
        this.answers = [];
        this.correctAnswer = null;
        this.correctAnswers = [];
      },
      // Удалить вопрос из списка вопросов
      removeQuestion(index) {
        this.questions.splice(index, 1);
      }
    }
};  