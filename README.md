# Avatar the Last Air Bender Slot Machine

<a href="https://kellychhe-slot-machine.netlify.app/">This is a slot machine website</a>. The user initially starts with 1000 credits and can choose to bet 1 or 50 credits to see if they win! The user will win if three ATLA symbols match and they will gain 10 times the betting amount. When the user attempts to cash out on the credits, the web app randomly generates different responses.

<img width="1438" alt="Screen Shot 2022-05-30 at 12 25 32 PM" src="https://user-images.githubusercontent.com/102538779/171031681-7f00f3c4-603c-4005-9b14-a42742487374.png">

## Languages Used 

This was created using HTML5, CSS3, and JavaScript. 

For this project, I added event listeners to all the buttons in my HTML and used JS to track the bets made and credits remaining. To generate the symbols, I dynamically added three images to the DOM. I randomized them using Math.random() and if/else statements. I checked who won by pushing the randomized names of the symbols into an array. Then, I wrote a function that returns a winning response if index 0 matches index 1 and index 2 and a losing response if it doesn't. When someone wins, I multiplied the winning bet by 10 and added it back to the remaining credits. When the user loses, they get nothing back. When the user bets and spins again, I reset the array to empty and dynamically remove the images from the previous spin. I wanted to use Math.random() again to fully understand the concept so I added a feature that generates funny responses when the user tries to cash out. 

## Lessons Learned 

One of the biggest challenges was understanding what a slot machine does. Trying to figure out what betting one vs betting max means made it difficult to get started on the JS. This project was so exciting for me because it was one of the first times I used arrays/array methods in a project! I also got to learn about combining Math.random() and if/else to randomize elements. In terms of CSS I got to learn about text-shadow and got to play with different colors to make content more readable.
