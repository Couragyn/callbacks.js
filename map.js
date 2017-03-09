var words = ["ground", "control", "to", "major", "tom"];


function map (array, func) {
  count = [];
  for (var i = 0; i < array.length; i ++){
    count.push(func(array[i]));
  }
  console.log(count);
}

map(words, function(word) {
  return word.length;
});