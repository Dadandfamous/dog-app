# dog-app

🐶FIND FIDO - A DOG QUIZ GAME EXTRAVAGANZA!🐶

## [ Check out the deployed version here!](https://stoic-morse-bb2374.netlify.com/)
## What's this project is all about

This app was a group project in React/Redux completed during week 4 of Codaisseur with teammates Cathal Hastings, Ivan Hu, Lucía  D'Ippolito, Martin Braun. This week allowed us to gain some practical experience in React/Redux, practice working in teams on a project with Github and track and manage our progress on Trello.

## Technologies Used
- React
- Redux
- Github
- Trello **[Check out my trelloboard here](https://trello.com/b/G346VUc5/dogs-game)**

## Installing the Application
- Download/Clone the repo
- Install node dependencies (NPM install)
- Run react from the console (NPM run start)


# Group Project
​
Build a dog breed memorization game.
​
You'll be using a free public API called [Dog API](https://dog.ceo/dog-api/documentation/).
​
The webapp must be built using React and Redux.
​
# Features
​
1. The webapp must show the user a random picture of a dog (the Dog API provides an endpoint for this purpose), and it must ask the user to choose the correct breed name from a list of 3 options.
1. When a user makes the correct choice, they proceed to the next question.
1. If the user makes the wrong choice, the game should show them the right answer, then pause for 2 seconds before proceeding to the next question.
1. The game must keep track of the user's performance and display a success rate (in percentages) on the page.
1. Occasionally the user will get a different question type. The game must show them the name of a breed and 3 images of dogs. The user must select the correct image that matches the breed name.
1. The user should also be able to use the keyboard to select their answer for quicker gameplay.
1. If a user sees a breed for the first time, the game should give them an easy hint so they can learn the right answer.
1. The game starts off with only 3 breeds and should gradually increase in difficulty. When the user has a streak of 10 correct answers, the game will add another 3 breeds into the mix, and so on.
​
# How to get started
​
1. Draw some wireframes. That is, simple schematic designs that lay out all the parts of the webapp that need to be built.
1. Specify the game logic:
  1. List all the actions the user can take. For each interaction, write down what the input information is.
  1. Define the shape of your state. Think about all the pieces of information that you have to store in your application state.
1. Setup a React project and implement the wireframes from the previous step. Fill it with dummy data so you can at least see the GUI.
1. Push it to GitHub and add your teammates as collaborators. One person will host the code on their account.
1. Now start working on adding the API connection and implementing the logic as Redux actions and reducers.
