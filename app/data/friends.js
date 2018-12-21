var friendsArray = [
  {
    name: "Ahmed",
    pictureURL: "www.google.com/image.png",
    answers: [3, 2, 5, 4, 5, 1, 1, 2, 1, 5]
  },
  {
    name: "Thomas",
    pictureURL: "www.google.com/image.png",
    answers: [5, 1, 2, 1, 1, 5, 4, 5, 2, 3]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
