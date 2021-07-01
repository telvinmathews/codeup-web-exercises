
function countSpaces(str) {
    var spaces = 0;

    if (typeof str !== 'string') {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            spaces++;
        }
    }
    return spaces;
}
var result = countSpaces(' hakvbh njl  jalbxd');
var result2 = countSpaces(' bkha bjd');
var result3 = countSpaces('');
var result4 = countSpaces(' hjhb bjb jbj ');
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
