# Pig Game

## Description

This is my second project in Javascript, and I did it for keep practicing JavaScript and DOM concepts. It's a roll dice game where you need to score more than you oppponent, you have to play with your luck to try to beat your opponent.

## Technologies

- HTML
- CSS
- DOM
- JavaScript

## How to Run it

You just need to have installed NodeJs, and you can run the following command:

```
live-server
```

## How to Play

The game consists in a score table where you will see your total score, and another mini score table where you will be adding partial scores.
As a current player, you must roll the dice to see how much you will add to your partial score, each number you get will be added to your current score and thus you will obtain your new score. So, you can roll the dice as much a you want, but if you get a 1 (one), your score won't be added and your turn is over.

To keep your score and add it to your total, you can press the `Hold` button, whenever you want. Just keep in mind that this action will end your turn, but with the benefit taht your score will increase the amount of current score you get in that moment.

For example, at the first turn, if you roll the dice an obtain a 5. Your current score will be a 5.

```
current score = 5
total score = 0
```

If you decide to roll the dice again, and you obtained a 3, Your new current score will be 8, but your total will still be 0. Until you press `Hold` button.

```
current score = 8
total score = 0
```

Now, imagine you want to hold'em and end your turn, your scores will be the following:

```
current score = 0
total score = 8
```

And, basically that's how it works.

**The first player to get a score of 100 win the game.**
