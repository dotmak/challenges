window.onload = () => {

  window.gamesLoader = () => {
    setTimeout(function(){
      let gamesNumber = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
      let games = document.querySelectorAll(".games__games-wrapper a")
  
      for (i = 0; i < gamesNumber; i++) {
        // Logic is to also place a loading icon on markup and remove the icon when you remove the hidden class from games
        // If games were parsed through API call we would take a different approach to render is game along with animations
        games[i].classList.remove('hidden')
      }
    }, 900)
  }

  gamesLoader()
}