
console.log('extention has loaded')

// function show_prompt() {
//   let name = prompt('Please enter your name', 'your name...');
//   if (name != null && name != "") {
//     alert(name);
//   }
// }

const divs = document.getElementsByTagName('div')

let degLevel = 1

function degrade (num) {
  let pos = 1;
  for (let i = 0; i < divs.length; i++){
    if (i % 2 === 0){
      divs[i].animate(
        [
          { transform: `rotate(0) translate3D(-${.5}%, -${.5}%, 0)`, color: '#000' },
          { color: '#431236', offset: 0.3 },
          { transform: `rotate(${360}deg) translate3D(-${.5}%, -${.5}%, 0)`, color: '#000' }
        ], {
          duration: 10000000,
          iterations: Infinity
        })
    }
    else {
      divs[i].animate(
        [
          { transform: `rotate(360deg) translate3D(${.5}%, ${.5}%, 0)`, color: '#000' },
          { color: '#431236', offset: 0.3 },
          { transform: `rotate(0) translate3D(${.5}%, ${.5}%, 0)`, color: '#000' }
        ], {
          duration: 10005000,
          iterations: Infinity
        })
    }

  }
}

degrade(degLevel)

function degradeBack (num) {
  for (let i = 0; i < divs.length; i++){
    divs[i].cancel()
  }
}

setTimeout(degradeBack(degLevel), 10000)




function submitAnswer() {
    alert("TESTTT'");
}



