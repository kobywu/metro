function hover(element) {
	 element.classList.add("hover");
}
function nohover(element){
	 element.classList.remove("hover");
}

//These are the questions that are going to be asked
var questions =[{
	"question": "How much is a Student (K-8 and 9-12) 30-Day Pass?",
	"option1":"$30",
	"option2":"$24",
	"option3":"$15",
	"option4":"$36",
	"answer":"2"
},{
	"question": "How much is a Student (K-8 and 9-12) Single One-Way Fare?",
	"option1":"$1",
	"option2":"$1.50",
	"option3":"$0.75",
	"option4":"2",
	"answer":"1"
},{
	"question": "What are students required to have to purchase fare or ride with a Student TAP card?",
	"option1":"valid photo ID",
	"option2":"pepper spray",
	"option3":"a homework assignment",
	"option4":"a smile",
	"answer":"1"
},{
	"question": "For additional information about reduced fare programs or questions about Student TAP cards contact...",
	"option1":"Your teacher",
	"option2":"Metro headquarters",
	"option3":"Transit Information",
	"option4":"metro Reduce Fare office",
	"answer":"4"
},{
	"question": "What area do you HAVE to be in to get reduce fare at the LA Metro",
	"option1":"school must be in the Los Angeles County",
	"option2":"need to live in the Los Angeles County",
	"option3":"You must go to school in Hawthorne",
	"option4":"El Seugundo born and raised",
	"answer":"1"
},{
	"question": "What other types of documentation can you use to get a TAP card?",
	"option1":"your report card",
	"option2":"car bills",
	"option3":"a reciept at a store",
	"option4":"your phone number",
	"answer":"1"
},{
	"question": "Do you need to create a TAP account for each student?",
	"option1":"Nope",
	"option2":"Of course not",
	"option3":"i am not sure",
	"option4":"Yes",
	"answer":"4"
},{
	"question": "What languages are not translated in the applications?",
	"option1":"English",
	"option2":"French",
	"option3":"Hindi",
	"option4":"Hmong",
	"answer":"3"
},{
	"question": "How much cheaper is a Student K-12 TAP card than a regular one per ride?",
	"option1":"$2",
	"option2":"$1",
	"option3":"$0.50",
	"option4":"$0.75",
	"answer":"4"
},{
	"question": "If you get a Student 30-Day Pass, how mnay rides do you get?",
	"option1":"30",
	"option2":"unlimited",
	"option3":"70",
	"option4":"60",
	"answer":"2"
},
]
//These variables will start at these values
var currentQuestion =0;
var score = 0;
var totQuestions = questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButon = document.getElementById('nextbutton');
var resultCont = document.getElementById('result');
var redo = document.getElementById('redo');
//
function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent =(questionIndex + 1) + '.' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

//
function loadNext() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){ 
		score += 1;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){ 
		nextButton.textContent ='Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display ='';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

function refreshPage(){
    window.location.reload();
} 
//This is where the code is actually called to load and display the questions
loadQuestion(currentQuestion);


