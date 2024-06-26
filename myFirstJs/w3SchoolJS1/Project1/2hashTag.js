//Hash Tag generator
const str = "my name is banasri gupta";

function hashTagGenerator(str) {
  if (str.trim() == 0 || str.trim().length > 280) {
    return false;
  }
  let array = str.split(" ");
  console.log(array)
  //let hashStr = "";
  // array.forEach(element => {
  //   hashStr += element.at(0).toUpperCase() + element.substr(1);
  // });

  //return hashStr = '#' + hashStr;

  array = array.map((val) => val.replace(val[0], val[0].toUpperCase()));
  console.log(array)
  return `#${array.join("")}`;
}

console.log("hashTag", hashTagGenerator(str));