# Peter_Answers_Clone
A clone of "peteranswers.com"

In this project, I tried to create a version of "peteranswers.com". This is a fortune site that guesses the user’s answer. However, there is a trick. In the petition input area, when the user presses ".", the game is activated. It means you actually write your answer to the input area but it masked with another message saying "Peter please answer the following question". This part was the hardest part for me. Because I couldn't find a way to store the user input as a string so that I can do functions on it. I came up with a working creative solution but of course, it has some issues. When you clicked away from the petition input area, you can not click again. :/ If the user doesn’t play the game, a random fortune that comes from API is shown as the user's answer. I am using a proxy for fetching API because I came across an issue called CORS. With the catch function, I say the user that "there is an HTTP issue. Please, try again later."

Considering this was my first big personal project and the sixth month of my journey, I am happy with how this project turned out. I also added some extra functionality like generating random quotes from an API. You can tweet your quote. 
Please visit the site for an actual experience.

Site URL: https://peter-answers-clone-new.vercel.app/
Video URL: https://youtu.be/LEzBTJlz8Ao
