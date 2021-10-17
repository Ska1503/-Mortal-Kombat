const arena = document.querySelector('.arenas')
const randomBtn = document.querySelector('.button')

const player1 = {
  player: 1,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['AK-47'],
  attack: function () {
    return console.log(Scorpion.name + 'Fight...');
  }
}

const player2 = {
  player: 2,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['M-16'],
  attack: function () {
    return console.log(Kitana.name + 'Fight...')
  }
}

function createElements(tag, className) {
  const tags = document.createElement(tag)

  if (className) {
    tags.classList.add(className)
  }

  return tags
}

function createPlayer(playerCharacter) {
  const player = createElements('div', 'player' + playerCharacter.player)
  const progressbar = createElements('div', 'progressbar')
  const character = createElements('div', 'character')
  const life = createElements('div', 'life')
  const namePers = createElements('div', 'name')
  const img = createElements('img')

  life.style.width = playerCharacter.hp + '%'
  namePers.textContent = playerCharacter.name
  img.src = playerCharacter.img

  player.appendChild(progressbar)
  player.appendChild(character)
  progressbar.appendChild(life)
  progressbar.appendChild(namePers)
  character.appendChild(img)

  return player
}


function randomNumber() {
  return Math.ceil(Math.random() * 20)
}


function whoWinner() {
  player1.hp > player2.hp ? arena.appendChild(winPlayer(player1.name)) : arena.appendChild(winPlayer(player2.name))
}


function winPlayer(name) {
  const winTitle = createElements('div', 'winTitle')
  winTitle.innerText = name + ' Win'

  return winTitle
}


function changeHP(player) {
  const playerLife = document.querySelector('.player' + player.player + ' .life')

  player.hp -= randomNumber()
  playerLife.style.width = player.hp + '%'

  if (player.hp <= 0) {
    whoWinner()
    playerLife.style.width = 0 + '%'
    player.hp = 0 
    randomBtn.parentNode.removeChild(randomBtn)
    console.log(player.name, player.hp)  
  }
}


randomBtn.addEventListener('click', () => {
  changeHP(player1)
  changeHP(player2)
})


arena.appendChild(createPlayer(player1))
arena.appendChild(createPlayer(player2))

