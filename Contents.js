const divs = document.getElementsByTagName('div')

function degrade () {
  for (let i = 0; i < divs.length; i++){
    if (i % 2 === 0){
      divs[i].animate(
        [
          { transform: `rotate(0) translate3D(-.5%, -.5%, 0)`, color: '#000' },
          { color: '#431236', offset: 0.3 },
          { transform: `rotate(360deg) translate3D(-.5%, -.5%, 0)`, color: '#000' }
        ], {
          duration: 10000000,
          iterations: Infinity
        })
    }
    else {
      divs[i].animate(
        [
          { transform: `rotate(360deg) translate3D(.5%, .5%, 0)`, color: '#000' },
          { color: '#431236', offset: 0.3 },
          { transform: `rotate(0) translate3D(.5%, .5%, 0)`, color: '#000' }
        ], {
          duration: 10005000,
          iterations: Infinity
        })
    }
  }
}

function degradeBack () {
  const animations = document.getAnimations()
  for (let i = 0; i < animations.length; i++){
    animations[i].cancel()
  }
}

degrade()

document.addEventListener('DOMContentLoaded', () => {

  const questions = [
    {'In what year was the first iPhone released?': '2007'}, 
    {'How many days are in the year?': '365'},
    {'What does CPU stand for?': 'Central Processing Unit'},
    {'What does WWW stand for?': 'World Wide Web'},
    {'What HTML stand for?': 'Hypertext Markup Language'},
    {'What is Will Sentance\'s favorite candy?': 'Twin Snakes'},
    {'Who killed Han Solo?': 'Kylo Ren'}
  ]

  function getRandomQuestion (questions) {
    let index = Math.floor((Math.random() * questions.length))
    const question = document.querySelector('.question');
    question.innerHTML = Object.keys(questions[index])[0];
    return questions[index]
  }

  let currentQuestion = getRandomQuestion(questions)

  const form = document.getElementById('buttonForQuestion')

  form.addEventListener('submit', function(e) {
    e.preventDefault()
    const answer = document.getElementById("answer_field").value
    const answerKey = Object.keys(currentQuestion)[0];
    if (currentQuestion[answerKey].toLowerCase() === answer.toLowerCase()){
      currentQuestion = getRandomQuestion(questions);
      chrome.tabs.executeScript(null, {code: 'degradeBack()'});
    }
    document.getElementById("answer_field").value = '';
  }, false)


}, false)



