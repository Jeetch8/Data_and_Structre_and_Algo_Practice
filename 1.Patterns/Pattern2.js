const numberOfLines = 10;

for (let i = 0; i < numberOfLines; i++) {
  let str = "";
  for (let j = 0; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
