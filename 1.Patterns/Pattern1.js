const numberOfLines = 10;
const numberOFStars = 5;

for (let i = 0; i < numberOfLines; i++) {
  let str = "";
  for (let j = 0; j < numberOFStars; j++) {
    str += "*";
  }
  console.log(str);
}
