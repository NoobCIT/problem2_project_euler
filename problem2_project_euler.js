
var array = [1,2];

for (i = 2; i < 1000; i++) {
  array[i] = array[i-2] + array[i-1];
}
console.log(array);

var sum = 0;
for (j=0; j < array.length; j++) {
  if ( array[j] < 4000000 && array[j] % 2 == 0) {
    sum += array[j];
  }
}

console.log(sum);
