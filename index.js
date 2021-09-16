var readlineSync = require('readline-sync')

var userName = readlineSync.question('Enter your name to play ')

var questionOne ={
  question: "What is the min age to play Roblox ",
  answer: '13',
}

var questionTwo ={
  question: "IR or MC ",
  answer: 'IR',
}

var questionThree ={
  question: "Do you purchase Robux ",
  answer: 'yes',
}

var questionFour ={
  question: "How many friends, 150+? ",
  answer: 'yes',
}

var questionFive ={
  question: "are you a noob? ",
  answer: 'no',
}

var score = 0

var highScores = [
  {
    name: 'ABC',
    score: 5,
  },
  {
    name: 'XYZ',
    score: 3,
  },
]

function checkAnswer(question, answer){
  var ans = readlineSync.question(question)

  if (ans === answer){
    score ++
    console.log('you are right')
    console.log('your current score is: ', score)
    console.log('-----------------')
  }else{
    console.log('you are wrong')
    console.log('your current score is: ', score)
    console.log('-----------------')
  }
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive]

for(var i = 0; i < questions.length; i ++){
  checkAnswer(questions[i].question, questions[i].answer)
}

console.log('Hurrayy ... your current score is: ', score)
console.log('High Scores are: ')
for(var i = 0;i < highScores.length;i++){
  console.log(highScores[i].name, highScores[i].score)
}

console.log('if your score is more than high scores, send me the screenshot')

for(var i =0;i < highScores.length;i++){
  if (score > highScores[i].score){
    highScores[i].name = userName
    highScores[i].score = score
    break
  }
}

console.log('New High Scores are: ')
for(var i = 0;i < highScores.length;i++){
  console.log(highScores[i].name, highScores[i].score)
}