const player1 = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['iceStorm'],
  attack: function () {
    return console.log(player1.name + 'Fight...');
  }
}

const player2 = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['iceStorm'],
  attack: function () {
    return console.log(player2.name + 'Fight...');
  }
}


function createPlayer() {
  const player = document
}
