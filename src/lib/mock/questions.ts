interface Question {
  question: string
  answer: string
}

interface Category {
  name: string
  questions: [Question, Question, Question, Question, Question]
}

const programmingCategory: Category = {
  name: 'Programming',
  questions: [
    {
      question:
        'Which programming language is primarily used for web development and is an acronym for Hypertext Preprocessor?',
      answer: 'PHP',
    },
    {
      question:
        'This programming language, developed by Microsoft, is known for its use in Windows applications.',
      answer: 'C#',
    },
    {
      question:
        "Which programming language's logo is a blue bird and is favored for its use in big data and machine learning?",
      answer: 'Python',
    },
    {
      question:
        'Which programming language is commonly used for system-level programming and has a mascot of a gopher?',
      answer: 'Go',
    },
    {
      question:
        'This programming language is known for its efficiency and control, and is often used to develop game engines.',
      answer: 'C++',
    },
  ],
}

export { programmingCategory }
