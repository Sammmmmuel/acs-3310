// challenge one 

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
  // console.log(capitalize('sam'));


// challenge two

function allcaps(str){
  return str.toUpperCase()
}

  // console.log(allcaps('sam'));

// challenge 3

function capitalizeWords(str) {
  return str.split(" ").map(word => capitalize(word)).join(" ")
}

  // console.log(capitalizeWords('sam is cool'));

// challenge 4

function removeExtraSpaces(str){
  return str.replace(/\s+/g, ' ').trim()
}

// console.log(removeExtraSpaces("sam         is          cool"))

// challenege 5

function kebobCase(str){
  return str.replace(/\s+/g, '-').toLowerCase();
}

  // console.log(kebobCase("sam is cool"));

// challeneg 6 

function snakeCase(str){
  return str.replace(/\s+/g, '_').toLowerCase();
}

  // console.log(snakeCase("sam is cool"));

// challenge 7

function camelCase(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return "";
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

// console.log(camelCase('sam is cool'))

// challenge 8

function shift(str){
  var trimdString = str.split("")
  trimdString = trimdString.map(word => word).join("")
  var firstChar = trimdString[0]
  trimdString = trimdString.split(trimdString[0])
  var combinedStr = trimdString.join("") + firstChar 
  return combinedStr
}

// console.log(shift("sam"))

// challenge 9

function makeHashTag(str){
  const trimdString = str.split(" ")
  trimdString.sort((a,b) => b.length - a.length)
  return array = trimdString.slice(0,3).map((str) => "#" + str)
}

  // console.log(makeHashTag("sam is super duper cool"))

// challenge 10

function isEmpty(str){
  return str.trim().length === 0;
}

// console.log(isEmpty("sam"))