console.log('Hello world')

const board = []

function play(clickedId) {
  const playerSpan = document.getElementById('player')
  const clickedElement = document.getElementById(clickedId)

  if (playerSpan.innerText === 'X') {
    playerSpan.innerText = 'O'
    clickedElement.innerText = 'X'
    board[clickedId] = 'X'
  } else {
    playerSpan.innerText = 'X'
    clickedElement.innerText = 'O'
    board[clickedId] = 'O'
  }

  const topLeft = board[0]
  const topCenter = board[1]
  const topRight = board[2]
  const middleLeft = board[3]
  const middleCenter = board[4]
  const middleRight = board[5]
  const bottomLeft = board[6]
  const bottomCenter = board[7]
  const bottomRight = board[8]

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    window.alert(`Player ${topLeft} Won!`)
    return
  }
  if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    window.alert(`Player ${middleLeft} Won!`)
    return
  }
  if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    window.alert(`Player ${bottomLeft} Won!`)
    return
  }
  if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    window.alert(`Player ${topLeft} Won!`)
    return
  }
  if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    window.alert(`Player ${topCenter} Won!`)
    return
  }
  if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    window.alert(`Player ${topRight} Won!`)
    return
  }
  if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    window.alert(`Player ${topLeft} Won!`)
    return
  }
  if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
    window.alert(`Player ${topRight} Won!`)
    return
  }

  let boardFull = true

  for (let i = 0; i < 9; i++) {
    if (board[i] === undefined) {
      boardFull = false
    }
  }
  if (boardFull === true) {
    window.alert("CAT's game :/")
  }
}