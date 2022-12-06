const filename = '2022/Day 1/input.txt';
const fs = require('fs');
var input = fs.readFileSync(filename, 'utf-8');

//part 1
var input_array = input.split('\n');
var tc = [];
var elf = 0;
for (var i in input_array){
    if (input_array[i]){
        elf += parseInt(input_array[i]);
    } else {
        tc.push(elf);
        elf = 0;
    }
}
tc.sort(function(a, b){
    return b - a;
});
console.log(tc[0]);

//part 2
console.log(tc[0] + tc[1] + tc[2]);