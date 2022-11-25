let questions = [
  {
    question: "Was ist in einer HTML-Datei im Browser angezeigt keine Lüge?",
    answer_1: "< QUOTE>Hier steht ein Kommentar</QUOTE>",
    answer_2: "< U>Dieser Text ist unsichtbar</U>",
    answer_3: "< TT>Dieser Text ist doppelt unterstrichen</TT>",
    answer_4: "< B>Dieser Text ist fett</B>",
    right_answer: 4,
  },
  {
    question:
      "Was bedeutet HTML?",
    answer_1: "Hypertext Mark Language",
    answer_2: "Hypertext Mark Look",
    answer_3: "Hypertext Markup Language",
    answer_4: "Hypertext Markup Look",
    right_answer: 3,
  },  
  {
    question: "Was ist eine mögliche Endung für eine HTML-Datei?",
    answer_1: "*.tml",
    answer_2: "*.ht",
    answer_3: "*.web",
    answer_4: "*.htm",
    right_answer: 4,
  },
  {
    question: "Was hilft einen um den Style von HTML-Dateien zu verbessern?",
    answer_1: "CSS",
    answer_2: "CPI",
    answer_3: "JScript",
    answer_4: "XHTML",
    right_answer: 1,
  },
  {
    question: "Gibt es ein Zeichenlimit in HTML-Dateien?",
    answer_1: "Ja 250 Tags",
    answer_2: "Ja 100.000 Zeichen",
    answer_3: "Nein, wenn man den DIV-Tag verwendet",
    answer_4: "Nein",
    right_answer: 4,
  },
  //CSS Questions
  {
    question: "Was ist keine gültige Schreibweise für die Farbe Weiß?",
    answer_1: "rgba(255,255,255,1)",
    answer_2: "#FFF",
    answer_3: "#ff",
    answer_4: "white",
    right_answer: 3,
  },
  {
    question: "Was bewirkt die CSS-Deklaration orphans: 3 ?",
    answer_1: "Nichts, mit CSS3 wurde die Eigenschaft verworfen.",
    answer_2: "Nichts. Die Eigenschaft ist erfunden.",
    answer_3: "Verbindet 3 Tabellen zu einer, wenn diese leer sind.",
    answer_4:
      "Bei Fließtext wird der Text so getrennt, dass mindestens 3 Zeilen am oberen Rand des 2. Blattes ausgedruckt werden.",
    right_answer: 4,
  },
  {
    question: "Welche Eigenschaft gibt es bereits seit CSS 2.1?",
    answer_1: "opacity",
    answer_2: "quotes",
    answer_3: "text-shadow",
    answer_4: "background-clip",
    right_answer: 2,
  },
  {
    question: "Welchen Einfluss hat das Pseudoattribut :empty?",
    answer_1: "Damit werden alle Unterelemente aus einem HTML-Element gelöscht.",
    answer_2: "Damit kann überprüft werden, ob der Nutzer Eingaben in einem Feld vorgenommen hat.",
    answer_3: "Darüber werden Eingaben in Formulare gelöscht.",
    answer_4: "Darüber können leere HTML-Elemente angesprochen werden, wie zum Beispiel leere Tabellenzellen.",
    right_answer: 4,
  },
  {
    question: "Was ist nicht das gleiche wie margin: 10px?",
    answer_1: "margin: 10px 10px 10px",
    answer_2: "margin: 10",
    answer_3: "margin: 10px 10px",
    answer_4: "margin: 10px 10px 10px 10px",
    right_answer: 4,
  },
  //JavaScript Questions
  {
    question: "Wer passt hier nicht in die Reihe?",
    answer_1: "AppleScript",
    answer_2: "ActionScript",
    answer_3: "CoffeeScript",
    answer_4: "LiveScript",
    right_answer: 1,
  },
  {question: "Welchen der folgenden logischen Operatoren gibt es nicht?",
    answer_1: "||",
    answer_2: "!=",
    answer_3: "<=",
    answer_4: "< !",
    right_answer: 4,
  },
  {
    question: "Was ist der Unterschied zwischen == und ===?",
    answer_1: " == ist das Gegenteil von === ",
    answer_2: " == überprüft nur den Wert, === auch den Datentyp",
    answer_3: " == gibt es nicht, === überprüft den Wert",
    answer_4: "== überprüft den Wert, === überprüft den Wert zweimal",
    right_answer: 2,
  },
  {
    question: "Was macht das break statement?",
    answer_1: "Es führt eine Loop oder Switch Anweisung weiter",
    answer_2: "Es unterbricht Loop oder Switch",
    answer_3: "Es unterbricht eine if-Auswertung",
    answer_4: "Es führt eine if-Anweisung weiter",
    right_answer: 2,
  },
  {
    question: "Wir wird eine Variable als array definiert?",
    answer_1: "let namen = ()",
    answer_2: "let namen = []",
    answer_3: "let namen = array",
    answer_4: "let namen = {}",
    right_answer: 2,
  },
   
];

let rightQuestions = 0;
let currentQuestion = 0;
let AUDIO_SUCCESS = new Audio("audio/success.mp3");
let AUDIO_FAIL = new Audio("audio/fail.mp3");
let AUDIO_NEXT = new Audio("audio/next-question.mp3");
let AUDIO_RESTART = new Audio("audio/restart-game.mp3");
let AUDIO_START = new Audio("audio/start-game.mp3"); // TODO

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (gameIsOver()) {
    showEndScreen();
  } else {
    updateToNextQuestion();
    updateProgrssBar();
  }
}

function gameIsOver() {
  return currentQuestion >= questions.length;
}

function updateProgrssBar() {
  let percent = (currentQuestion + 1) / questions.length;
  percent = Math.round(percent * 100);
  document.getElementById("progressBar").innerHTML = `${percent} %`;
  document.getElementById("progressBar").style = `width: ${percent}%;`;
}

function updateToNextQuestion() {
  let question = questions[currentQuestion];

  document.getElementById("questionText").innerHTML = question["question"];
  document.getElementById("answer_1").innerHTML = question["answer_1"];
  document.getElementById("answer_2").innerHTML = question["answer_2"];
  document.getElementById("answer_3").innerHTML = question["answer_3"];
  document.getElementById("answer_4").innerHTML = question["answer_4"];

  document.getElementById("current-question").innerHTML = currentQuestion + 1;
}

function showEndScreen() {
  document.getElementById("endScreen").style = "";
  document.getElementById("questionBody").style = "display: none;";
  document.getElementById("amountOfQuestions").innerHTML = questions.length;
  document.getElementById("amountOfRightQuestions").innerHTML = rightQuestions;
  document.getElementById("headerImage").src = "icon/brain-result.png";
}


function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection;
  let idOfRightAnswer = `answer_${question["right_answer"]}`;

  if (selectedQuestionNumber ==  idOfRightAnswer) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    rightQuestions++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idOfRightAnswer).parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
  document.getElementById("nextButton").disabled = false;
}

function nextQuestion() {
  document.getElementById("nextButton").disabled = true;
  AUDIO_NEXT.play();
  currentQuestion++;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}

function restartGame() {
  document.getElementById("headerImage").src = "img/card-background.jpg";
  document.getElementById("endScreen").style = "display: none;";
  document.getElementById("questionBody").style = "";
  rightQuestions = 0;
  currentQuestion = 0;
  AUDIO_RESTART.play();
  init();
}
