const board = document.getElementById('board');

const colors = ['#16C9C9', '#C92816', '#1628C9', '#1CC916', '#C99116']

function createBoard() {

  for (let i = 0; i < 500; i++) {
    let square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      square.style.boxShadow = `0 0 2px ${colors[Math.floor(Math.random() * colors.length)]}, 0 0 10px ${colors[Math.floor(Math.random() * colors.length)]}`
    })
    square.addEventListener('mouseout', () => {
      square.style.backgroundColor = '#1d1d1d';
      square.style.boxShadow = '0 0 2px #000';
    })
    board.appendChild(square)

  }
}

createBoard()