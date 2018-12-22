var friendsArray = [
  {
    name: "Rick Sanchez",
    pictureURL: "https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728",
    answers: [3, 2, 5, 4, 5, 1, 1, 2, 1, 5]
  },
  {
    name: "Peter Griffin",
    pictureURL: "https://t7.rbxcdn.com/527b31c8925ded2782fdbdb396fe564a",
    answers: [1, 1, 2, 1, 1, 1, 1, 1, 2, 3]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
