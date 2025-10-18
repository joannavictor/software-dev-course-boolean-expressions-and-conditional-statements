/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const hasSword = true;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}

if (choice === "mountains") {
  if (hasTorch && hasSword && hasMap) {
    console.log("With your map, torch and sword. You know the route using map, you fight off wild animals and make it through the mountains safely.");
  } else if (hasMap && hasSword) {
    console.log("You fight bravely, but it's too dark to find your way without torch. You return to the starting point.");
  } else if (!hasTorch && !hasSword && !hasMap) {
    console.log("It’s too dark and without Map you might not know the route to destination. Without weapon you are defenseless. You are forced to retreat.");
  } else {
    console.log("Your torch lights the way, but you feel safe with a weapon. You move carefully as the path to destination is unknown without a map.");
  }
} else if (choice === "village") {
  if (hasMap || hasTorch) {
    console.log("Using your map and torch, you arrive at the village safely.");
  } else {
    console.log("Without any guidance, you get lost in the woods on your way to the village.");
  }
} else {
  console.log("Pray to God and Help will arrive. ");
}

