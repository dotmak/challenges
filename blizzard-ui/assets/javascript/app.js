window.onload = () => {

  window.gamesLoader = () => {
    let gamesNumber = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
    let games = document.querySelectorAll(".games__games-wrapper a")

    for (i = 0; i < gamesNumber; i++) {
      games[i].classList.remove('hidden')
    }
  }

  gamesLoader()
}