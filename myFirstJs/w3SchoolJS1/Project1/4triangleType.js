const triangleType = (a, b, c) => {
  let triangleType = "";
  if (a == b && a == c) {
    triangleType = "Equilateral";
  } else {
    if (a == b || a == c || b == c) {
      triangleType = "Isosceles";
    } else {
      triangleType = "Scalene";
    }
  }
  return triangleType;
}

console.log(triangleType(3, 5, 4));