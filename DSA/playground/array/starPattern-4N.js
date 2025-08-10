const generateStarPattern = () => {
  for (let i = 0; i < 4; i++) {
    let row = "";
    for (j = 0; j < 4; j++) {
      row += " * ";
    }
    console.log(row);
  }
};

generateStarPattern();

// Output:

// *  *  *  *
// *  *  *  *
// *  *  *  *
// *  *  *  *
