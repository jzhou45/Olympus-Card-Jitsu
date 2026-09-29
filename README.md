# Olympus Card-Jitsu

**[Play Olympus Card-Jitsu](https://jzhou45.github.io/Olympus-Card-Jitsu/)**

Olympus Card-Jitsu is a browser card game that brings together a few favorite things from my childhood: Club Penguin's Card-Jitsu, Greek mythology, and the Percy Jackson series. It adapts Card-Jitsu's core gameplay with new card types and 36 cards drawn from Greek mythology, and you play against a computer opponent.

I built it solo in vanilla JavaScript in about a week in July 2022, as my JavaScript project at App Academy. It runs entirely in the browser and is hosted on GitHub Pages.

![Olympus Card-Jitsu gameplay](./ocj_gameplay.gif)

## How to Play

Each round, you and the computer each play one card at the same time.

- **Types:** every card is a God, a Hero, or a Monster, and each type beats one other type:
  - **Gods** beat Heroes.
  - **Heroes** beat Monsters.
  - **Monsters** beat Gods.
- **Same type:** if both cards are the same type, the higher number wins. Equal numbers tie.
- **Winning a round:** the winner collects a token matching their card's type and color.
- **Winning the game:** collect three tokens of the same type in three different colors, or one token of each type in three different colors.
- **Timer:** you have 20 seconds to choose a card. If time runs out, your first card is played for you.

You hold five cards and draw a new one after each round. The deck has 36 cards: 3 types, 4 colors, and 3 cards of each type in each color.

## Background: Club Penguin's Card-Jitsu

Card-Jitsu is a card game that Club Penguin, a popular online game, introduced in November 2008 along with ninjas and the Dojo. Each card has one of three elements, Fire, Water, or Snow, which beat each other in a rock-paper-scissors cycle. Cards also have a number and a color, and some have special effects that change the rules for a round.

Olympus Card-Jitsu keeps the core rules, including the elements, numbers, colors, and tokens. It replaces the elements with Gods, Heroes, and Monsters, and it doesn't include special-effect cards.

## Features

- A title screen and illustrated instructions, which can be reopened during a game.
- A shuffled deck for every game, for both you and the computer.
- Cards lift and show their name when you hover over them.
- A 20-second timer that plays a card for you if you don't choose one.
- Token displays that show both players' progress toward winning.
- Background music with a play and pause button, and a gong sound effect.
- A win or loss screen with an option to play again.

The computer opponent plays the top card of its own shuffled deck, so its choices are random rather than strategic.

## Wireframe

![Wireframe of the main game screen](./wireframe.png)

The wireframe above shows the plan for the main game screen:
  * Your hand and the remaining time are along the bottom of the screen.
  * Once both players choose a card, or time runs out, both cards appear on the board. In the wireframe, the cards are shown as player sprites.
  * The top left shows the tokens you've won, and the top right shows the computer's.
  * The top center has buttons for the instructions and the sound.

## Implementation Highlights

The game is organized into classes: `Game` runs the rounds, `Deck` shuffles and deals, `Hand` and `Board` manage your cards, `AI` plays the computer's cards, and `Tally` tracks each player's tokens and checks for a win.

The round timer counts down once per second. It ends the round early as soon as you play a card, and plays your first card for you if time runs out:

```js
countdown(){
    this.board.board = null;
    this.ai.board = null;
    let sec = 20;
    let game = this;
    let timer = setInterval( function(){
        document.getElementById('timer').innerHTML=sec;
        sec--;
        if (game.board.board){
            clearInterval(timer);
            game.ai.play();
            game.winRound();
            document.getElementById('timer').innerHTML="0";
            return;
        };
        if (sec < 0){
            clearInterval(timer);
            game.moveFromHandToBoard(0);
            document.getElementById("card1").style.display = "none";
            game.ai.play();
            game.winRound();
            document.getElementById('timer').innerHTML="0";
            return;
        };
    }, 1000);
};
```

## Technologies Used

- **Game logic and interface:** vanilla JavaScript (ES6 classes and DOM manipulation), HTML, and CSS
- **Styling:** Sass, with the Caesar Dressing font from Google Fonts and icons from Font Awesome
- **Build:** npm, webpack, and Babel
- **Hosting:** GitHub Pages

## Running Locally

1. Install dependencies:
   ```sh
   npm install
   ```
2. Build the JavaScript and CSS into `dist/`, or use `npm run watch` to rebuild whenever a file changes:
   ```sh
   npm run build
   ```
3. Open `index.html` in a browser.

## Development Timeline

  * **Friday afternoon and the weekend:** built the card, hand, and deck classes, with the page elements for playing cards.
  * **Monday:** added the logic for winning rounds, and improved how cards look and behave.
  * **Tuesday:** built the computer opponent.
  * **Wednesday:** added multiple rounds and the logic for winning the game.
  * **Thursday morning:** deployed to GitHub Pages and polished the interface.

## Future Improvements

  * Make the computer opponent play strategically instead of at random.

## Credits

Olympus Card-Jitsu is a non-commercial student project. The images and audio below belong to their respective creators and owners.

  * Personal link icons and modal icons from [Font Awesome](https://fontawesome.com/)
  * Favicon from the [Central Davidson High School logo](https://www.highschoolot.com/content/image/5258959/)
  * Gong sound effect from [Ryan Lloyd](https://www.youtube.com/watch?v=kZ70uUp9eWo)
  * Background music: [Leonidas Succession](https://www.youtube.com/watch?v=F63cjnBRNo8&t=26s) by [Chulainn](https://www.youtube.com/c/CharlesChulainn)
  * Background image from [Assassin's Creed Odyssey](https://www.ubisoft.com/en-us/game/assassins-creed/odyssey)
  * Achilles image from [Wargod](https://www.facebook.com/legendofthecryptids/)
  * Aphrodite image: [Miranda by Thomas Francis Dicksee](https://artvee.com/dl/miranda-3/)
  * Ares image: [Ares Miaiphonos by GENZOMAN](https://www.deviantart.com/genzoman/art/Ares-Miaiphonos-135998313)
  * Arion image by Georg Simon Winter von Adlersflügel
  * Athena image by [bachzim](https://www.deviantart.com/bachzim/art/Athena-899463203)
  * Cerberus and Theseus images from [Hades](https://www.supergiantgames.com/games/hades/)
  * Chiron image from [Smite](https://www.smitegame.com/)
  * Echo image: *Echo and Narcissus* by John William Waterhouse
  * Er image: *Ananke* by Platone
  * Eurydice image: *Wounded Eurydice* by Jean-Baptiste-Camille Corot
  * Hades image by [Aleksandra Jędrasik](https://www.artstation.com/artwork/X9VxR)
  * Helen image: *Helen of Troy* by Evelyn De Morgan
  * Hephaestus image by [Mykhailo Kryvtsov](https://www.artstation.com/artwork/LaLmP)
  * Hera and Porphyrion images from [Rick Riordan](https://rickriordan.com/)
  * Heracles image from [The God of High School](https://www.webtoons.com/en/action/the-god-of-high-school/list?title_no=66&page=1)
  * Narcissus image: *Narcissus* by Michelangelo Merisi da Caravaggio
  * Paris image: *Paris in the Phrygian Cap* by Antoni Brodowski
  * Persephone image by [eloizz_art](https://twitter.com/eloizz_art/status/1387433361015193600?lang=ga)
  * Triton image from *The Little Mermaid* by Disney
