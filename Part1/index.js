console.log('Hello world')

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

let board = []

const playerSpan = document.getElementById('player')

function reset() {
  board = []
  playerSpan.innerText = 'X'

  for (let i = 0; i < 9; i++) {
    const iSpace = document.getElementById(i)
    iSpace.innerText = ''
  }
}

async function play(clickedId) {

  const clickedElement = document.getElementById(clickedId)

  if (clickedElement.innerText === '') {
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
      await sleep(250)
      window.alert(`Player ${topLeft} Won!`)
      reset()
      return
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
      await sleep(250)
      window.alert(`Player ${middleLeft} Won!`)
      reset()
      return
    }
    if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
      await sleep(250)
      window.alert(`Player ${bottomLeft} Won!`)
      reset()
      return
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
      await sleep(250)
      window.alert(`Player ${topLeft} Won!`)
      reset()
      return
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
      await sleep(250)
      window.alert(`Player ${topCenter} Won!`)
      reset()
      return
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
      await sleep(250)
      window.alert(`Player ${topRight} Won!`)
      reset()
      return
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
      await sleep(250)
      window.alert(`Player ${topLeft} Won!`)
      reset()
      return
    }
    if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft) {
      await sleep(250)
      window.alert(`Player ${topRight} Won!`)
      reset()
      return
    }

    let boardFull = true

    for (let i = 0; i < 9; i++) {
      if (board[i] === undefined) {
        boardFull = false
      }
    }
    if (boardFull === true) {
      await sleep(250)
      window.alert("CAT's game :/")
      reset()
    }
  }
}



