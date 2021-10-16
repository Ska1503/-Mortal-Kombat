
const Scorpion = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['AK-47'],
  attack: function () {
    return console.log(Scorpion.name + 'Fight...');
  }
}

const Kitana = {
  name: 'Kitana',
  hp: 90,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['M-16'],
  attack: function () {
    return console.log(Kitana.name + 'Fight...')
  }
}


function createPlayer(playerClassName, playerCharacter) {
  const player = document.createElement('div')
  const progressbar = document.createElement('div')
  const character = document.createElement('div')
  const life = document.createElement('div')
  const namePers = document.createElement('div')
  const img = document.createElement('img')
  const arena = document.querySelector('.arenas')


  player.classList.add(playerClassName)
  progressbar.classList.add('progressbar')
  character.classList.add('character')
  life.classList.add('life')
  life.style.width = playerCharacter.hp +'%'
  namePers.classList.add('name')
  namePers.textContent = playerCharacter.name
  img.src = playerCharacter.img

  arena.appendChild(player)
  player.appendChild(progressbar)
  player.appendChild(character)
  progressbar.appendChild(life)
  progressbar.appendChild(namePers)
  character.appendChild(img)
}
createPlayer('player1', Scorpion)
createPlayer('player2', Kitana)
