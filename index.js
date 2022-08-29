/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/DmitryHniezdilov/task-a-tiny-JS-world
   Web app: https://dmitryhniezdilov.github.io/task-a-tiny-JS-world/
   */

// ======== OBJECTS DEFINITIONS ========

const dog = {
  species: "dog",
  name: "Togo",
  gender: "male",
  legs: 4,
  hands: 0,
  saying: "woof-woof!",
};

const cat = {
  species: "cat",
  name: "Murka",
  gender: "female",
  legs: 4,
  hands: 0,
  saying: "meow-meow!",
};

const bear = {
  species: "character",
  name: "Winnie",
  gender: "male",
  legs: 4,
  hands: 0,
  saying: "Think, think, think!",
};

const men = {
  species: "human",
  name: "Artur",
  gender: "male",
  legs: 4,
  hands: 2,
  saying: "Do not borrow tomorrow's troubles today.",
};

const women = {
  species: "human",
  name: "Marilyn",
  gender: "female",
  legs: 2,
  hands: 2,
  saying: "A career is born in public – talent in privacy.",
};

const listOfInhabitants = [dog, cat, bear, men, women];

// ======== OUTPUT ========

listOfInhabitants.forEach(
  ({ species, name, gender, legs, hands, saying } = item) => {
    print(`${species}; ${name}; ${gender}; ${legs}; ${hands}; ${saying}`);
  }
);

/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
