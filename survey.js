const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answerObj = {};

rl.question('What\'s your name? ', (answer) => {
  answerObj.name = answer;
  rl.question('What\'s an activity you like doing? ', (answer) => {
    answerObj.activity = answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      answerObj.music = answer;
      rl.question('Which meal is your favourite? ', (answer) => {
        answerObj.meal = answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          answerObj.food = answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            answerObj.sport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              answerObj.superpower = answer;
              rl.close();
              console.log(`${answerObj.name} loves listening to ${answerObj.music} while ${answerObj.activity}, devouring ${answerObj.food} for ${answerObj.meal}, prefers ${answerObj.sport} over any other sport, and is amazing at ${answerObj.superpower}.`);
            });
          });
        });
      });
    });
  });
});