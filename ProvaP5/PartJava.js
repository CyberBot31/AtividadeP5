var myquestions = [
	{
		question: "#1 - O que é Front-end?",
		answers: {
			a: 'Parte de um sistema que é oculta para o usuário.',
			b: 'Parte de um sistema é visivel e interativa ao usuário.',
			c: 'Parte lógica que recebe as regras de negócio.',
			d: 'Nenhuma das alternativas anteriores.'
		},
		correctAnswer: 'b'
	},
	{
		question: "#2 - O que é o React JS?",
		answers: {
			a: 'Uma poderosa biblioteca JavaScript.', 
			b: 'Uma linguagem de Programação.',
			c: 'Um servidor de Cloud.',
			d: 'Todas as respostas anteriores.'
		},
		correctAnswer: 'a'
	},
	{
		question: "#3 - Quais são as principais tecnologias do mundo Front-end?",
		answers: {
			a: 'Java, golang e Python.', 
			b: 'AWS, Google Cloud e Azure.', 
			c: 'Kotlin, HTML e CSS.', 
			d: 'HTML, CSS e JavaScript.'
		},
		correctAnswer: 'd'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	
	function showQuestions(questions, quizContainer){
		// armazena a saida e as opções de respostas!
		var output = [];
		var answers;
			// para cada questão
		for(var i=0; i<questions.length; i++){
				// primeiramente resetamos a lista de questões
			answers = [];
				// E aqui faremos para cada resposta na questão
			for(letter in questions[i].answers){
				// Aqui é escrito para o html usar o Radio
				answers.push(
					'<label>'
						+'<input type="radio" name="question'+i+'" value="'+letter+'">'
						+ letter + ': '
						+ questions[i].answes[letter]
					+ '</label>'
				);
			}
		
			// adiciona perguntas e suas respostas à saída
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers>' + answers.join('') + '</div>'
			);
		}

		// combinando a lista de saída em uma string de html e colocando na página
		quizContainer.innerHtml = output.join('');
	}
	
	function showResults(questions, quizContainer, resultsContainer){
		
		var answerContainers = quizContainer.querySelectorAll('.answers');
		
		var userAnswer = '';
		var numCorrect = 0;
		
		for(var i=0; i<questions.length; i++){
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
			
			if(userAnswer===questions[i].correctAnswer){
				numCorrect++;
				
				answerContainers[i].style.color = 'lightgreen';
			}
			
			else{
				answerContainers[i].style.color = 'red';
			}
			
		}
			
			resultsContainer.innerHTML = numCorrect + ' de ' + questions.length;
		}
	//mostra pergunta	
	showQuestions(questions, quizContainer);
	//ao enviar, mostra resultado
	submitButton.onclick = function() {
		showResults(questions, quizContainer, resultsContainer);
	}
}