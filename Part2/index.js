console.log('The house always wins!')

const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

console.log(idInput)
console.log(colorInput)

function setCard() {
  const card = document.getElementById(idInput.value)
  console.log(card)
  card.style.color = colorInput.value
}

function reset() {
  const diamonds = document.getElementById('diamonds')
  const clubs = document.getElementById('clubs')
  const hearts = document.getElementById('hearts')
  const spades = document.getElementById('spades')

  diamonds.style.color = 'grey'
  clubs.style.color = 'grey'
  hearts.style.color = 'grey'
  spades.style.color = 'grey'
}