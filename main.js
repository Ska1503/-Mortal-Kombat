// Task #0

const playerOne = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['AK-47'],
  attack: function () {
    return console.log(player1.name + 'Fight...');
  }
}

const playerTwo = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['M-16'],
  attack: function () {
    return console.log(player2.name + 'Fight...');
  }
}


// Task #1

function createPlayer(player, playerName, lifes) {
  const player1 = document.createElement('div')
  const player2 = document.createElement('div')
  const progressbar = document.createElement('div')
  const character = document.createElement('div')
  const life = document.createElement('div')
  const name = document.createElement('div')
  const img = document.createElement('img')
  const arena = document.querySelector('.arenas')


  player1.classList.add('player1')
  player2.classList.add('player2')
  progressbar.classList.add('progressbar')
  character.classList.add('character')
  life.classList.add('life')
  life.style.width = 100 + '%'
  name.classList.add('name')
  name.textContent = playerOne.name
  img.src = playerOne.img

  arena.appendChild(player1)
  player1.appendChild(progressbar)
  player1.appendChild(character)
  progressbar.appendChild(life)
  progressbar.appendChild(name)
  character.appendChild(img)
}
createPlayer('player1', 'Scorpion', 90)
createPlayer('player2', 'Kitana', 70)