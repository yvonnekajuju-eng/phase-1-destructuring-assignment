const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
 moo === 'cow'
neigh === 'horse'
 baa === 'sheep'
oink === 'pig'
cluck === 'chicken'

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');
// bessie === 'cow'
// (horse skipped)
// dolly === 'sheep'
// babe === 'pig'
// little === 'chicken'


// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.
const [blackAndWhite, , black, pink] = farmAnimals.split(' ');
// blackAndWhite === 'cow'   (cow is black and white)
// black === 'sheep'
// pink === 'pig'


// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;
// red === 'red', orange === 'orange', ... indigo === 'indigo', violet === 'violet'




// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const [r, o, y, g, b, , v] = colors;
// r === 'red'
// o === 'orange'
// y === 'yellow'
// g === 'green'
// b === 'blue'
// (indigo skipped)
// v === 'violet'


// 6. But wait! Indigo is now feeling super left out. Let's only assign indigo using indg. 
const [ , , , , , indg ] = colors;
// indg === 'indigo'


// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;
// muppetName === 'Miss Piggy'
// color === 'pink'
// song === 'Never Before, Never Again'
// job === 'Cast member of The Muppet Show'
// partner === 'Kermit'


// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 }
  },
  nestedJob,
  nestedPartner
} = nestedMuppet;
// song2 === 'Moving Right Along'
// song4 === 'I Hope That Something Better Comes Along'
// nestedJob === 'Host of The Muppet Show'
// nestedPartner === 'Miss Piggy'