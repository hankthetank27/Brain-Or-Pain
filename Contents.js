console.log('extention has loaded')

// function show_prompt() {
//   let name = prompt('Please enter your name', 'your name...');
//   if (name != null && name != "") {
//     alert(name);
//   }
// }

const divs = document.getElementsByTagName('div')
const all = document.getElementsByTagName('*')

let degLevel = 1


function degrade (num) {
  let pos = 1;
  for (let i = 0; i < divs.length; i++){
    divs[i].style.boxShadow = `1px solid black`
    divs[i].style.borderRadius = `${num}%`
    divs[i].animate(
      [
        { transform: `rotate(0) translate3D(-${num}%, -${num}%, 0)`, color: '#000' },
        { color: '#431236', offset: 0.3 },
        { transform: `rotate(${num}deg) translate3D(-${num}%, -${num}%, 0)`, color: '#000' }
      ], {
        duration: 40000,
        iterations: Infinity
      })

    // let id = setInterval(move, 1000)
    // function move (){
    //   console.log(divs[i].style.top )
    //   let current = Number(divs[i].style.top.replace('px', ''))
    //   pos *= 2;
    //   divs[i].style.top = (current + pos) + 'px';
    // }


  }
}
degrade(degLevel)

// for (let i = 0; i < all.length; i++){
//   all[i].style.boxShadow = '';
//   all[i].style.borderRadius = '0%';
//   all[i].style.fontFamily = 'Times New Roman';
// }

//show_prompt();




