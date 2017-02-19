
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  alert('youch')
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
var investment = document.querySelector('#compoundInvestment')
investment.innerHTML = investment.innerHTML * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.querySelector('#circle-bw')
  if (circle.style.background !== 'black' ) {
  	circle.style.background = 'black'
  }
  else if (circle.style.background !== 'white') {
  	circle.style.background = 'white'
  }
})


document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var blowUp = document.querySelector('.circle-red')
  var styleCircle = window.getComputedStyle(blowUp)
  var dblCircleHt = parseInt(styleCircle.height)
  var dblCircleWh = parseInt(styleCircle.width)
  if (dblCircleHt <= 320 && dblCircleWh <= 320) {
  	blowUp.style.height = (dblCircleHt * 2) + 'px'
  	blowUp.style.width = (dblCircleWh * 2) + 'px'
  }
  else {
  	blowUp.style.height = '40px'
  	blowUp.style.width = '40px'
  }


  
  
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
var ulNode = document.querySelector('#userList')
var listItemNode = ulNode.children
for (var i = listItemNode.length - 1; i >= 0; i--) {
	if (listItemNode[i].classList.contains('inactive')) {
		ulNode.removeChild(listItemNode[i])
		}
	}
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
var sqNode = document.querySelector('#reverse-squares .answer-box')
var boxList = sqNode.children
for (var i = boxList.length - 1; i >= 0; i--) {
	sqNode.appendChild(boxList[i])
}
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var ulNode = document.querySelector('#tasks')
  var grList = ulNode.children

  for (var i = grList.length - 1; i >= 0; i--) {
  	grList[i].innerHTML = grList[i].innerHTML.split('').reverse().join('')
  }
})

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var imNode = document.querySelector('#city-img')
  imNode.src = imNode.innerHTML.split('/')
  console.log(imNode)
})

//Now that I have an array