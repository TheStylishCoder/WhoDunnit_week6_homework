// Episode 1

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);

// Comments for episode 1: The output will be 'The murderer is Miss Scarlet' because we are calling the declareMurderer function and passing in the value associated to the key 'murderer' in the 'scenario' array. 

// Episode 2

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Comments for episode 2: The output will be a type error because we cannot reassign a new value to murderer as we have declared it to be a constant variable. The murderer is Professor Plum.

// Episode 3

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// Comments for episode 3: The output will be 'First Verdict: Mrs. Peacock' as we have re-assigned 'Mrs. Peacock' to the let variable murderer in the function body and the variable's scope is that function. 'Second Verdict: 'Professor Plum' because we assigned the value of 'Professor Plum' to the let variable murderer outside of any functions which means it's accessible to everything. In this case, because we have not called the function declareMurderer() we do not have access to the updated variable.

// Episode 4

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// Comments for episode 4: The output will be 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard' because the value of suspectThree has been re-assigned to 'Colonel Mustard' in the function body of declareAllSuspects. suspects is then assigned the value of the declareAllSuspects function so it has access to the updated variable value. 'Suspect three is Mrs.Peacock' because it only has access to the initial variable declaration and not when it's reassigned in the function body.

// Episode 5

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
  const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
  const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
  changeWeapon('Revolver');
  const verdict = declareWeapon();
  console.log(verdict);

// Comments for episode 5: The output will be 'The weapon is the Revolver' because even though the the scenario array is a constant variable, we can still change the information stored inside it. The function changeWeapon() is called and an argument of 'Revolver' is passed in meaning that the weapon in the array 'scenario' has changed from 'Candle Stick' to 'Revolver'.

// Episode 6

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Comments for episode 6: The output will be 'The murderer is Mrs.White' because we have called the function changeMurderer() and the last value that murderer holds in it is 'Mrs.White'. Then when we assign the function declareMurderer() to the variable verdict, 'Mrs.White' is still the value assigned to murderer. 

// Episode 7 

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Comments for episode 7: The outcome will be 'The murderer is Colonel Mustard' because in the function changeMurderer(), the last value assigned to murderer is 'Colonel Mustard' when the function plotTwist() is called.

// Episode 8 

const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);

// Comments for episode 8: The outcome will be 'The weapon is Candle Stick' because when the function changeScenario() is called and the values are passed in, both if statements return true and 'candle stick' is assigned to the scenario.weapon.

// Episode 9 

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Comments foe episode 9: The outcome will be 'The murderer is Professor Plum' because the if statement hasn't been used in a function and when declareMurderer() is called, it only has access to let murderer = 'Professor Plum' because it has global scope whereas let murderer = 'Mrs.Peacock' only has block scope.