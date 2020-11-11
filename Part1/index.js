console.log('Hello world')

const board = []

function play (clickedId) {
  const playerSpan = document.getElementById('player')
  const clickedElement = document.getElementById('clickedId')
  if (playerSpan.innerText === 'X' {
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X'
    board
  } else {
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
  }
}