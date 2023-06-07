const { Console } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable ', (answer) => {
  let name = answer
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('What\'s an activity you like doing? ', (answer) => {
    let activity = answer
    console.log(`Thank you for your valuable feedback: ${answer}`);
    
    rl.question('What do you listen to while doing that?', (answer) => {
      let listen = answer
      console.log(`Thank you for your valuable feedback: ${answer}`);
     
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.)', (answer) => {
        let favMeal = answer
        console.log(`Thank you for your valuable feedback: ${answer}`);
        
        rl.question('What\'s your favourite thing to eat for that meal?', (answer) => {
          let favFood = answer
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question('Which sport is your absolute favourite?', (answer) => {
            let sport = answer
            console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
              let power = answer
              console.log(`Thank you for your valuable feedback: ${answer}`);



  rl.close()
  console.log(`One of ${name}'s favourite activities is ${activity} while listening to ${listen}. 
  For ${favMeal}, ${name} loves to eat ${favFood}. ${name} also enjoys ${sport} and is amazing at ${power}.`);
            })
          })
        })
      })
    })
  })
})